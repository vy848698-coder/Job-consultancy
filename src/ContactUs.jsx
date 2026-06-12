import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeCanvas } from 'qrcode.react'
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  CreditCard, Landmark, Smartphone, Lock, CheckCircle2, Settings, Factory, Building2, Handshake, Headset,
} from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeLeft = { hidden: { opacity: 0, x: -44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const INFO_CARDS = [
  { Icon: Phone, title: 'Call Us', lines: ['+91 9090117678'], sub: 'Mon–Sat · 9 AM to 7 PM IST', href: 'tel:+919090117678', color: '#2563EB', bg: '#EFF6FF' },
  { Icon: Mail, title: 'Email Us', lines: ['info@odishaworkforce.com'], sub: 'We reply within 24 hours', href: 'mailto:info@odishaworkforce.com', color: '#059669', bg: '#F0FDF4' },
  { Icon: MapPin, title: 'Visit Us', lines: ['Bhubaneswar, Odisha', 'India – 751017'], sub: 'Walk-in appointments welcome', href: null, color: '#D97706', bg: '#FFFBEB' },
  { Icon: Clock, title: 'Office Hours', lines: ['Mon – Sat: 9 AM – 7 PM', 'Sunday: Closed'], sub: 'Holidays may vary', href: null, color: '#7C3AED', bg: '#F5F3FF' },
]

const SUBJECTS = ['Job Seekers – Career Guidance', 'Employers – Hiring Solutions', 'Education Consultancy', 'Study Abroad', 'Franchise Enquiry', 'Training & Skill Development', 'General Enquiry']

/* ── Official bank details (Bank of India) ── */
const BANK_NAME = 'Bank of India'
const BANK_ROWS = [
  { label: 'Beneficiary Name', value: 'ODISHA WORKFORCE SOLUTIONS', copy: true },
  { label: 'Account Number', value: '516920110000143', copy: true },
  { label: 'Account Type', value: 'Current', copy: false },
  { label: 'IFSC Code', value: 'BKID0005169', copy: true },
  { label: 'Branch Code', value: '005169', copy: true },
  { label: 'Branch & City', value: 'Kalinga Vihar (Bhubaneswar)', copy: false },
  { label: 'GSTIN', value: '21AGPPJ6159G2ZA', copy: true },
]
const UPI_ID = 'boim-516967070143@boi'
const UPI_QR_STRING = `upi://pay?pa=${UPI_ID}&pn=Odisha Workforce Solutions&cu=INR`

export default function ContactUs({ onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', consent: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [payTab, setPayTab] = useState('bank')
  const [copied, setCopied] = useState('')
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your full name'
    else if (form.name.trim().length < 3) e.name = 'Name looks too short'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    if (!form.subject) e.subject = 'Please select a service'
    if (!form.message.trim()) e.message = 'Tell us how we can help'
    else if (form.message.trim().length < 10) e.message = 'Please add a little more detail (min 10 chars)'
    if (!form.consent) e.consent = 'Please accept to be contacted'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length !== 0) return

    setSending(true)
    setSendError('')
    try {
      // Sent as a "simple" form POST (application/x-www-form-urlencoded) so the
      // browser never fires a CORS preflight — more reliable on shared hosting.
      const res = await fetch('send.php', {
        method: 'POST',
        body: new URLSearchParams({
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      const text = await res.text()
      let data = {}
      try { data = JSON.parse(text) } catch { /* not JSON */ }
      if (res.ok && data.success) {
        setSubmitted(true)
      } else if (data.message) {
        setSendError(data.message)
      } else {
        // Surface the real status so we can diagnose (404 = file missing, 500 = PHP error, etc.)
        setSendError(`Send failed (HTTP ${res.status}). Please try again or WhatsApp us.`)
      }
    } catch (err) {
      setSendError('Network error: ' + (err?.message || 'request blocked') + '. Please try again.')
    } finally {
      setSending(false)
    }
  }

  function handleChange(k, v) {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((er) => { const n = { ...er }; delete n[k]; return n })
  }

  function copyValue(text, key) {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(''), 1600)
    })
  }

  return (
    <div className="page-wrap">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container">
          <div className="page-hero-inner with-visual">
            <motion.div className="page-hero-content" initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="page-breadcrumb" variants={fadeUp}>
              <button className="page-breadcrumb-link" onClick={() => onNavigate('home')}>Home</button>
              <span className="page-breadcrumb-sep">›</span>
              <span>Contact &amp; Payment</span>
            </motion.div>
            <motion.div className="hero-badge" variants={fadeUp} style={{ marginBottom: 20 }}>
              <span className="badge-dot" />
              We're Here to Help · Response Within 24 Hours
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Apply, Enquire &amp;<br />
              <span className="h1-gradient">Pay Securely</span><br />
              in One Place
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              Fill in the application form below and complete your registration / service fee payment
              through our verified Bank of India account or UPI — whichever you prefer.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp}>
              <motion.a href="#contact-form" className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Fill Application Form
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
              <motion.a href="#payment" className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Pay Now
              </motion.a>
            </motion.div>
            </motion.div>

            <motion.div className="page-hero-visual" initial="hidden" animate="visible" variants={fadeRight}>
              <motion.div className="svc-hero-panel"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="svc-hero-panel-head">
                  <span className="svc-hero-panel-badge"><Headset size={18} strokeWidth={2} /></span>
                  <div>
                    <div className="svc-hero-panel-title">Get in Touch</div>
                    <div className="svc-hero-panel-sub">Response within 24 hours</div>
                  </div>
                </div>
                {[
                  { Icon: Phone, label: '+91 9090117678', color: '#2563EB' },
                  { Icon: Mail, label: 'info@odishaworkforce.com', color: '#059669' },
                  { Icon: MessageCircle, label: 'Chat on WhatsApp', color: '#25D366' },
                  { Icon: MapPin, label: 'Bhubaneswar, Odisha', color: '#D97706' },
                ].map((a) => (
                  <div key={a.label} className="svc-hero-row">
                    <span className="svc-hero-row-icon" style={{ background: `${a.color}18`, color: a.color }}>
                      <a.Icon size={17} strokeWidth={1.9} />
                    </span>
                    <span className="svc-hero-row-label">{a.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="section-pad" style={{ paddingBottom: 0 }}>
        <div className="container">
          <motion.div className="contact-info-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {INFO_CARDS.map((c) => {
              const Wrap = c.href ? motion.a : motion.div
              return (
                <Wrap key={c.title} href={c.href || undefined} className="contact-info-card" variants={staggerItem} whileHover={{ y: -5 }}>
                  <div className="cic-icon" style={{ background: c.bg, color: c.color }}><c.Icon size={24} strokeWidth={1.9} /></div>
                  <div className="cic-title">{c.title}</div>
                  {c.lines.map((l) => <div key={l} className="cic-line" style={c.href ? { color: c.color } : undefined}>{l}</div>)}
                  <div className="cic-sub">{c.sub}</div>
                </Wrap>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Form + Side */}
      <section className="section-pad" id="contact-form">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="contact-form-wrap">
                <div className="section-tag" style={{ marginBottom: 12 }}>Application / Enquiry Form</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>How Can We Help?</h2>
                <p className="contact-form-sub">Fill in the form below and our team will reach out within 24 hours. Fields marked <span style={{ color: 'var(--primary)', fontWeight: 700 }}>*</span> are required.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="ok" className="contact-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      <div className="contact-success-icon"><CheckCircle2 size={48} strokeWidth={1.8} color="#10B981" /></div>
                      <h3>Application Submitted!</h3>
                      <p>Thank you, {form.name || 'friend'}! Our team will contact you within 24 hours. To confirm your registration, complete the payment below.</p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 16 }}>
                        <motion.a href="#payment" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                          Proceed to Payment →
                        </motion.a>
                        <motion.button className="btn btn-outline"
                          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '', consent: false }) }}>
                          New Form
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" className="contact-form" onSubmit={handleSubmit} noValidate
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="contact-form-row">
                        <div className="contact-field">
                          <label className="contact-label" htmlFor="cf-name">Full Name *</label>
                          <input id="cf-name" className={`contact-input${errors.name ? ' input-error' : ''}`} type="text" placeholder="e.g. Rahul Panigrahi"
                            value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                          {errors.name && <span className="field-error">{errors.name}</span>}
                        </div>
                        <div className="contact-field">
                          <label className="contact-label" htmlFor="cf-phone">Phone Number *</label>
                          <input id="cf-phone" className={`contact-input${errors.phone ? ' input-error' : ''}`} type="tel" placeholder="+91 90901 17678"
                            value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                          {errors.phone && <span className="field-error">{errors.phone}</span>}
                        </div>
                      </div>
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="cf-email">Email Address *</label>
                        <input id="cf-email" className={`contact-input${errors.email ? ' input-error' : ''}`} type="email" placeholder="your@email.com"
                          value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="cf-subject">Service Needed *</label>
                        <select id="cf-subject" className={`contact-input${errors.subject ? ' input-error' : ''}`} value={form.subject} onChange={(e) => handleChange('subject', e.target.value)}>
                          <option value="">Select a service…</option>
                          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.subject && <span className="field-error">{errors.subject}</span>}
                      </div>
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="cf-msg">Your Message *</label>
                        <textarea id="cf-msg" className={`contact-input contact-textarea${errors.message ? ' input-error' : ''}`} placeholder="Tell us what you need help with…" rows={5}
                          value={form.message} onChange={(e) => handleChange('message', e.target.value)} />
                        {errors.message && <span className="field-error">{errors.message}</span>}
                      </div>
                      <label className={`contact-consent${errors.consent ? ' consent-error' : ''}`}>
                        <input type="checkbox" checked={form.consent} onChange={(e) => handleChange('consent', e.target.checked)} />
                        <span>I agree to be contacted by Odisha Workforce Solutions regarding my enquiry. *</span>
                      </label>
                      {errors.consent && <span className="field-error" style={{ marginTop: -8 }}>{errors.consent}</span>}
                      {sendError && <span className="field-error" style={{ marginTop: -4 }}>{sendError}</span>}
                      <motion.button type="submit" className="btn btn-primary contact-submit" disabled={sending}
                        whileHover={sending ? undefined : { scale: 1.02, y: -2 }} whileTap={sending ? undefined : { scale: 0.97 }}>
                        {sending ? 'Sending…' : 'Submit Application'}
                        {!sending && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Side info */}
            <motion.div className="contact-side" variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="contact-side-card">
                <div className="contact-side-head">
                  <span className="contact-side-icon"><MapPin size={20} strokeWidth={2} /></span>
                  <h3 className="contact-side-title">Our Office</h3>
                </div>
                <p className="contact-side-addr">Odisha Workforce Solutions<br />Bhubaneswar, Odisha<br />India – 751017</p>
                <a href="https://maps.google.com/?q=Bhubaneswar+Odisha" target="_blank" rel="noreferrer" className="contact-map-placeholder contact-map-clickable">
                  <div className="contact-map-inner">
                    <span className="contact-map-pin"><MapPin size={28} strokeWidth={2} /></span>
                    <div className="contact-map-label">Bhubaneswar, Odisha</div>
                    <span className="contact-map-link">Open in Google Maps →</span>
                  </div>
                </a>
              </div>

              <div className="contact-social-card">
                <div className="contact-social-title">Connect With Us</div>
                <div className="contact-social-links">
                  {[
                    { name: 'WhatsApp', href: 'https://wa.me/919090117678', color: '#25D366',
                      svg: <MessageCircle size={18} strokeWidth={2} /> },
                    { name: 'LinkedIn', href: '#', color: '#0A66C2',
                      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/></svg> },
                    { name: 'Facebook', href: '#', color: '#1877F2',
                      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 21.5v-8.01H5.6V9.5h3.6V7.49c0-3.57 1.73-5.24 4.7-5.24 1.42 0 2.18.1 2.54.15v3.5h-2.04c-1.26 0-1.7.66-1.7 2v1.6h3.7l-.5 3.99H12.7V21.5H9.2Z"/></svg> },
                    { name: 'Instagram', href: '#', color: '#E4405F',
                      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg> },
                  ].map((s) => (
                    <a key={s.name} href={s.href} className="contact-social-btn" style={{ '--sc': s.color }}
                      target={s.href !== '#' ? '_blank' : undefined} rel="noreferrer">
                      <span>{s.svg}</span>
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a href="#payment" className="contact-pay-teaser">
                <div className="cpt-icon"><CreditCard size={22} strokeWidth={2} /></div>
                <div>
                  <div className="cpt-title">Make a Payment</div>
                  <div className="cpt-sub">Bank transfer or UPI · 100% verified account</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT SECTION ── */}
      <section className="payment-section" id="payment">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Secure Payment</div>
            <h2 className="section-title">Pay Your Registration / Service Fee</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Choose your preferred method. All payments go directly to our verified Bank of India account.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="pay-tabs">
            <button className={`pay-tab${payTab === 'bank' ? ' active' : ''}`} onClick={() => setPayTab('bank')}>
              <span className="pay-tab-emoji"><Landmark size={18} strokeWidth={2} /></span> Bank Transfer
            </button>
            <button className={`pay-tab${payTab === 'upi' ? ' active' : ''}`} onClick={() => setPayTab('upi')}>
              <span className="pay-tab-emoji"><Smartphone size={18} strokeWidth={2} /></span> Scan &amp; Pay (UPI)
            </button>
          </div>

          <AnimatePresence mode="wait">
            {payTab === 'bank' ? (
              <motion.div key="bank" className="pay-panel"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <div className="bank-card">
                  <div className="bank-card-head">
                    <div className="bank-logo-badge">BOI</div>
                    <div>
                      <div className="bank-card-name">{BANK_NAME}</div>
                      <div className="bank-card-tag">Relationship beyond banking</div>
                    </div>
                    <span className="bank-verified">✔ Verified Account</span>
                  </div>
                  <div className="bank-rows">
                    {BANK_ROWS.map((r) => (
                      <div key={r.label} className="bank-row">
                        <span className="bank-row-label">{r.label}</span>
                        <span className="bank-row-value">
                          {r.value}
                          {r.copy && (
                            <button className="bank-copy" onClick={() => copyValue(r.value, r.label)} title={`Copy ${r.label}`}>
                              {copied === r.label
                                ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.6"><polyline points="20 6 9 17 4 12"/></svg>
                                : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>}
                            </button>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bank-note">
                    <strong>Note:</strong> Please verify the account name as <strong>Odisha Workforce Solutions</strong> before paying, and share the payment screenshot / reference on
                    {' '}<a href="https://wa.me/919090117678" target="_blank" rel="noreferrer">WhatsApp</a>.
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="upi" className="pay-panel"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <div className="upi-card">
                  <div className="upi-head">
                    <div className="bank-logo-badge">BOI</div>
                    <div>
                      <div className="bank-card-name">Scan &amp; Pay</div>
                      <div className="bank-card-tag">Odisha Workforce Solutions</div>
                    </div>
                  </div>
                  <div className="upi-qr-wrap">
                    <QRCodeCanvas value={UPI_QR_STRING} size={208} level="M" includeMargin={false} fgColor="#0F172A" bgColor="#ffffff" />
                  </div>
                  <div className="upi-id-row">
                    <span className="upi-id-text">{UPI_ID}</span>
                    <button className="bank-copy" onClick={() => copyValue(UPI_ID, 'upi')} title="Copy UPI ID">
                      {copied === 'upi'
                        ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.6"><polyline points="20 6 9 17 4 12"/></svg>
                        : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>}
                    </button>
                  </div>
                  <div className="upi-apps">Pay with any UPI app · BHIM · PhonePe · Google Pay · Paytm</div>
                  <a href={UPI_QR_STRING} className="btn btn-primary upi-pay-btn">
                    Open in UPI App
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pay-safety">
            <Lock size={15} strokeWidth={2} style={{ flexShrink: 0 }} />
            <span>Odisha Workforce Solutions is not responsible for payments made to unauthorized accounts. Always verify the beneficiary name before paying.</span>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="section-pad" style={{ background: 'var(--light)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <h3 className="section-title" style={{ fontSize: '1.5rem' }}>Explore More</h3>
          </motion.div>
          <motion.div className="contact-quick-links" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {[
              { label: 'Our Services', Icon: Settings, page: 'services' },
              { label: 'Industries We Serve', Icon: Factory, page: 'industries' },
              { label: 'About Us', Icon: Building2, page: 'about' },
              { label: 'Franchise', Icon: Handshake, page: 'franchise' },
            ].map((l) => (
              <motion.button key={l.label} className="contact-quick-btn" variants={staggerItem}
                whileHover={{ y: -4 }} onClick={() => onNavigate(l.page)}>
                <span className="cqb-emoji"><l.Icon size={22} strokeWidth={1.9} /></span>
                <span className="cqb-label">{l.label}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
