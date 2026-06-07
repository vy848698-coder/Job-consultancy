<?php
/**
 * send.php — Contact form handler for Odisha Workforce Solutions
 * Sends submissions to the owner via Hostinger SMTP (no external libraries).
 * Place this file in the same folder as index.html (web root) on Hostinger.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

/* Answer CORS preflight (in case a www↔non-www redirect makes the request cross-origin) */
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/* ───────── Config ───────── */
const SMTP_HOST      = 'smtp.hostinger.com';
const SMTP_PORT      = 465;                              // implicit SSL
const SMTP_USER      = 'no-reply@odishaworkforce.com';
const SMTP_PASS      = 'iC7v@6Wp';
const MAIL_FROM      = 'no-reply@odishaworkforce.com';
const MAIL_FROM_NAME = 'OWS Website';
const MAIL_TO        = 'vk3630932@gmail.com';
const MAIL_COPY      = 'no-reply@odishaworkforce.com';  // same-domain copy (always lands in Hostinger webmail)

/* ───────── Only allow POST ───────── */
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

/* ───────── Read input (JSON or form-encoded) ───────── */
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

/** Strip CR/LF to prevent header injection */
function clean($v) { return trim(str_replace(["\r", "\n"], ' ', (string) ($v ?? ''))); }

$name    = clean($data['name'] ?? '');
$phone   = clean($data['phone'] ?? '');
$email   = clean($data['email'] ?? '');
$service = clean($data['subject'] ?? '');
$message = trim((string) ($data['message'] ?? ''));

/* ───────── Validate ───────── */
$errors = [];
if (mb_strlen($name) < 2)                                    $errors[] = 'name';
if (!preg_match('/^[+]?[\d\s-]{10,15}$/', $phone))           $errors[] = 'phone';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))              $errors[] = 'email';
if ($service === '')                                         $errors[] = 'subject';
if (mb_strlen($message) < 5)                                 $errors[] = 'message';
if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please fill all fields correctly.', 'fields' => $errors]);
    exit;
}

/* ───────── Build email ───────── */
$subjectLine = 'New Website Enquiry — ' . ($service ?: 'General') . ' — ' . $name;
$rows =
    '<tr><td style="padding:6px 14px 6px 0"><strong>Name</strong></td><td>'    . htmlspecialchars($name)    . '</td></tr>' .
    '<tr><td style="padding:6px 14px 6px 0"><strong>Phone</strong></td><td>'   . htmlspecialchars($phone)   . '</td></tr>' .
    '<tr><td style="padding:6px 14px 6px 0"><strong>Email</strong></td><td>'   . htmlspecialchars($email)   . '</td></tr>' .
    '<tr><td style="padding:6px 14px 6px 0"><strong>Service</strong></td><td>' . htmlspecialchars($service) . '</td></tr>' .
    '<tr><td style="padding:6px 14px 6px 0;vertical-align:top"><strong>Message</strong></td><td>' . nl2br(htmlspecialchars($message)) . '</td></tr>';
$body =
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;line-height:1.6">' .
    '<h2 style="margin:0 0 14px;color:#059669">New Enquiry — Odisha Workforce Solutions</h2>' .
    '<table style="border-collapse:collapse">' . $rows . '</table>' .
    '<p style="color:#64748b;font-size:12px;margin-top:18px">Sent from odishaworkforce.com contact form · ' . date('d M Y, h:i A') . '</p>' .
    '</div>';

/* ───────── Minimal SMTP client over SSL ───────── */
function smtp_send($from, $fromName, $recipients, $replyTo, $subject, $htmlBody) {
    $recipients = array_values(array_unique(array_filter((array) $recipients)));
    $primaryTo  = $recipients[0] ?? '';
    $fp = @stream_socket_client('ssl://' . SMTP_HOST . ':' . SMTP_PORT, $errno, $errstr, 20);
    if (!$fp) return "connect: $errstr ($errno)";
    stream_set_timeout($fp, 20);

    $read = function () use ($fp) {
        $out = '';
        while ($line = fgets($fp, 515)) {
            $out .= $line;
            if (isset($line[3]) && $line[3] === ' ') break;   // last line of a (multiline) reply
        }
        return $out;
    };
    $send = function ($c) use ($fp) { fwrite($fp, $c . "\r\n"); };
    $ok   = function ($resp, $code) { return substr($resp, 0, 3) === (string) $code; };

    $r = $read();                              if (!$ok($r, 220)) return "greeting: $r";
    $send('EHLO odishaworkforce.com'); $r = $read(); if (!$ok($r, 250)) return "ehlo: $r";
    $send('AUTH LOGIN');               $r = $read(); if (!$ok($r, 334)) return "auth: $r";
    $send(base64_encode(SMTP_USER));   $r = $read(); if (!$ok($r, 334)) return "user: $r";
    $send(base64_encode(SMTP_PASS));   $r = $read(); if (!$ok($r, 235)) return "pass: auth failed";
    $send('MAIL FROM:<' . $from . '>'); $r = $read(); if (!$ok($r, 250)) return "mailfrom: $r";
    foreach ($recipients as $rcpt) {
        $send('RCPT TO:<' . $rcpt . '>'); $r = $read(); if (!$ok($r, 250)) return "rcptto ($rcpt): $r";
    }
    $send('DATA');                      $r = $read(); if (!$ok($r, 354)) return "data: $r";

    $headers  = 'From: ' . $fromName . ' <' . $from . ">\r\n";
    $headers .= 'To: <' . $primaryTo . ">\r\n";
    $headers .= 'Reply-To: <' . $replyTo . ">\r\n";
    $headers .= 'Subject: ' . $subject . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= 'Date: ' . date('r') . "\r\n";

    $out = preg_replace('~\r\n|\r|\n~', "\r\n", $htmlBody);   // normalise to CRLF
    $out = preg_replace('/^\./m', '..', $out);               // dot-stuffing
    fwrite($fp, $headers . "\r\n" . $out . "\r\n.\r\n");
    $r = $read();                                if (!$ok($r, 250)) return "send: $r";

    $send('QUIT');
    fclose($fp);
    return true;
}

$result = smtp_send(MAIL_FROM, MAIL_FROM_NAME, [MAIL_TO, MAIL_COPY], $email, $subjectLine, $body);

if ($result === true) {
    echo json_encode(['success' => true, 'message' => 'Sent']);
} else {
    http_response_code(500);
    error_log('OWS contact form SMTP error: ' . $result);   // logged server-side, not exposed
    echo json_encode(['success' => false, 'message' => 'Could not send right now. Please WhatsApp us or try again.']);
}
