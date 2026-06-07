import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target, Sparkles, HeartHandshake, Lightbulb, Users, Building2, GraduationCap, Megaphone,
  TrendingUp, Compass, Plane, FileText, ShieldCheck, Network, Star, Globe, UserRound, School,
  Phone, Rocket, BadgeCheck, Award, FileCheck2, Briefcase, MapPin,
} from 'lucide-react'
import owsBadge from './assets/logo-badge.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const VP = { once: true, margin: '-80px' }

/* ── Comprehensive solution areas (from the company profile) ── */
const SOLUTION_AREAS = [
  'Recruitment & Staffing',
  'Workforce Development',
  'HR Consulting',
  'Skill Development',
  'Campus Hiring',
  'Education Consultancy',
  'Career Support Services',
]

/* ── Foundation: Mission · Vision · Why Choose Us · What We Do (4 cards) ── */
const FOUNDATION = [
  {
    key: 'mission',
    Icon: Target,
    color: '#2563EB',
    label: 'Our Mission',
    title: 'Creating Sustainable Opportunities',
    desc: 'To create sustainable career opportunities, develop industry-ready talent, and deliver innovative workforce solutions that enable individuals and organizations to grow together.',
    accent: 'linear-gradient(90deg, #2563EB, #38BDF8)',
  },
  {
    key: 'vision',
    Icon: Sparkles,
    color: '#7C3AED',
    label: 'Our Vision',
    title: 'A Recognized Global Leader',
    desc: 'To become a trusted and recognized leader in workforce solutions, recruitment services, and education consultancy by transforming careers and empowering businesses globally.',
    accent: 'linear-gradient(90deg, #7C3AED, #EC4899)',
  },
  {
    key: 'why',
    Icon: HeartHandshake,
    color: '#059669',
    label: 'Why Choose Us',
    title: 'People Are Our Foundation',
    desc: 'We believe people are the foundation of every successful organization. Our experienced team collaborates closely with clients, employers, institutions, and candidates to deliver customized and effective solutions.',
    accent: 'linear-gradient(90deg, #059669, #34D399)',
  },
  {
    key: 'what',
    Icon: Lightbulb,
    color: '#D97706',
    label: 'Our Services',
    title: 'Solutions Built Around You',
    desc: 'We provide a wide range of services designed to meet the evolving needs of job seekers, students, employers, and educational institutions.',
    accent: 'linear-gradient(90deg, #D97706, #FBBF24)',
  },
]

/* ── 8 Core Services with expandable "Learn More" detail ── */
const CORE_SERVICES = [
  {
    Icon: Users,
    title: 'Recruitment & Staffing Solutions',
    desc: 'Helping organizations identify, attract, and hire qualified professionals for various roles and industries.',
    more: 'We handle the complete hiring cycle — sourcing, screening, shortlisting, and onboarding — so organizations across every industry secure the right professionals quickly and reliably.',
  },
  {
    Icon: Building2,
    title: 'HR Consulting & Workforce Planning',
    desc: 'Strategic human resource solutions to improve workforce efficiency and organizational growth.',
    more: 'Our HR experts advise on workforce structuring, policies, and planning, helping organizations build efficient, future-ready teams that support long-term growth.',
  },
  {
    Icon: GraduationCap,
    title: 'Campus Recruitment Drives',
    desc: 'Connecting employers with fresh talent through organized campus hiring programs.',
    more: 'We organize end-to-end campus hiring programs — coordinating with colleges, managing assessments and interviews, and connecting employers with promising fresh talent.',
  },
  {
    Icon: Megaphone,
    title: 'Mega Job Fairs & Bulk Hiring',
    desc: 'Managing large-scale recruitment campaigns and employment events.',
    more: 'From planning to execution, we manage large-scale job fairs and bulk hiring campaigns that bring employers and job seekers together for fast, high-volume recruitment.',
  },
  {
    Icon: TrendingUp,
    title: 'Skill Development & Training Programs',
    desc: 'Industry-focused training initiatives designed to improve employability and workforce readiness.',
    more: 'Our practical, industry-aligned training programs build the technical and soft skills candidates need to become job-ready and confident in the modern workplace.',
  },
  {
    Icon: Compass,
    title: 'Career Counselling & Placement Support',
    desc: 'Personalized guidance and placement assistance for students and job seekers.',
    more: 'We offer one-on-one career counselling to map the right path for each individual, backed by dedicated placement support that connects talent with suitable opportunities.',
  },
  {
    Icon: Plane,
    title: 'Education Consultancy (India & Abroad)',
    desc: 'Expert support for admissions, career planning, and educational opportunities both in India and internationally.',
    more: 'From course and university selection to admissions and documentation, we guide students through every step of pursuing education in India and abroad.',
  },
  {
    Icon: FileText,
    title: 'Resume Building & Interview Preparation',
    desc: 'Professional resume creation, interview coaching, and career readiness services.',
    more: 'We craft professional, impactful resumes and provide interview coaching so candidates can present themselves confidently and improve their selection chances.',
  },
]

/* ── What Makes Us Different ── */
const STANDOUT = [
  { Icon: ShieldCheck, text: 'Professional and transparent processes' },
  { Icon: Network, text: 'Strong employer and institutional network' },
  { Icon: Target, text: 'Industry-focused recruitment solutions' },
  { Icon: HeartHandshake, text: 'Personalized guidance and support' },
  { Icon: Star, text: 'Commitment to quality and client satisfaction' },
  { Icon: Globe, text: 'Local expertise with a national and global outlook' },
]

/* ── Our Commitment ── */
const COMMITMENTS = [
  { Icon: UserRound, color: '#2563EB', title: 'Job Seekers', desc: 'Helping job seekers build successful careers.' },
  { Icon: GraduationCap, color: '#059669', title: 'Students', desc: 'Helping students achieve their educational goals.' },
  { Icon: Building2, color: '#D97706', title: 'Employers', desc: 'Helping employers find the right talent.' },
  { Icon: School, color: '#7C3AED', title: 'Institutions', desc: 'Helping institutions strengthen workforce readiness.' },
]

/* ── Credentials (factual, from the company profile) ── */
const STATS = [
  { Icon: BadgeCheck, value: 'ISO 9001:2015', label: 'Certified', color: '#2563EB' },
  { Icon: Award, value: 'MSME', label: 'Registered', color: '#059669' },
  { Icon: FileCheck2, value: 'GST', label: 'Compliant', color: '#D97706' },
  { Icon: Globe, value: 'India & Abroad', label: 'Service Reach', color: '#7C3AED' },
]

export default function AboutUs({ onNavigate }) {
  const [openCard, setOpenCard] = useState(null)

  return (
    <div className="about-page">

      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-orb about-hero-orb-1" />
        <div className="about-hero-orb about-hero-orb-2" />
        <div className="container">
          <div className="about-hero-inner">
            <motion.div
              className="about-hero-content"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
            <motion.div className="about-breadcrumb" variants={fadeUp}>
              <button className="about-breadcrumb-link" onClick={() => onNavigate('home')}>Home</button>
              <span className="about-breadcrumb-sep">›</span>
              <span>About Us</span>
            </motion.div>
            <motion.div className="hero-badge" variants={fadeUp} style={{ marginBottom: 20 }}>
              <span className="badge-dot" />
              ISO 9001:2015 · MSME Registered · GST Compliant
            </motion.div>
            <motion.h1 className="about-hero-title" variants={fadeUp}>
              Your Trusted Partner in<br />
              <span className="h1-gradient">Workforce & Education</span><br />
              Solutions
            </motion.h1>
            <motion.p className="about-hero-sub" variants={fadeUp}>
              Odisha Workforce Solutions (OWS) is a leading recruitment, education consultancy, and
              workforce development organization dedicated to connecting talent with opportunities —
              across India and abroad.
            </motion.p>
            <motion.div className="about-hero-actions" variants={fadeUp}>
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => { onNavigate('home'); setTimeout(() => { document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' }) }, 100) }}>
                Explore Services
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>
              <motion.a href="tel:+919090117678" className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Call Us Now
              </motion.a>
            </motion.div>
            </motion.div>

            <motion.div className="about-hero-visual" initial="hidden" animate="visible" variants={fadeRight}>
              <div className="about-hv-grid">
                {[
                  { Icon: Users, label: 'Recruitment & Staffing', color: '#2563EB' },
                  { Icon: GraduationCap, label: 'Education Consultancy', color: '#059669' },
                  { Icon: TrendingUp, label: 'Skill Development', color: '#D97706' },
                  { Icon: Briefcase, label: 'HR & Workforce Services', color: '#7C3AED' },
                ].map((c, i) => (
                  <motion.div
                    key={c.label}
                    className="about-hv-card"
                    animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="about-hv-icon" style={{ background: `${c.color}18`, color: c.color }}>
                      <c.Icon size={26} strokeWidth={1.9} />
                    </span>
                    <span className="about-hv-label">{c.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="about-stats-bar">
        <div className="container">
          <motion.div className="about-stats-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {STATS.map((s) => (
              <motion.div key={s.label} className="about-stat-item" variants={staggerItem} whileHover={{ y: -6 }}>
                <span className="about-stat-icon" style={{ background: `${s.color}18`, color: s.color }}>
                  <s.Icon size={24} strokeWidth={2} />
                </span>
                <div className="about-stat-value">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="about-who section-pad">
        <div className="container">
          <div className="about-who-grid">
            <motion.div className="about-who-left" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title">Your Trusted Partner in<br />Workforce & Education</h2>
              <p className="about-para">
                Odisha Workforce Solutions (OWS) is a leading recruitment, education consultancy, and
                workforce development organization dedicated to connecting talent with opportunities.
              </p>
              <p className="about-para">
                Founded with a vision to empower individuals and support organizational growth, OWS
                delivers comprehensive solutions across the workforce and education ecosystem:
              </p>
              <div className="about-solution-chips">
                {SOLUTION_AREAS.map((s) => (
                  <span key={s} className="about-solution-chip">
                    <span className="about-solution-dot" />
                    {s}
                  </span>
                ))}
              </div>
              <p className="about-para" style={{ marginTop: 20 }}>
                Headquartered in Bhubaneswar, Odisha, OWS is an <strong>ISO 9001:2015 Certified</strong>,{' '}
                <strong>MSME Registered</strong>, and <strong>GST Compliant</strong> organization committed
                to providing professional, ethical, and result-oriented services across India and abroad.
              </p>
            </motion.div>

            <motion.div className="about-who-right" variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="about-logo-card">
                <div className="about-logo-card-inner">
                  <span className="about-logo-badge-chip">
                    <img src={owsBadge} alt="Odisha Workforce Solutions" className="about-logo-large" />
                  </span>
                  <div className="about-logo-name">Odisha Workforce Solutions</div>
                  <div className="about-logo-tagline">Empowering People. Enabling Progress.</div>
                  <div className="about-logo-location">
                    <MapPin size={14} strokeWidth={2} />
                    Bhubaneswar, Odisha, India
                  </div>
                </div>
                <div className="about-card-decoration" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Foundation: Mission · Vision · Why Choose Us · What We Do (4 cards) ── */}
      <section className="about-foundation section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">What Drives Us</div>
            <h2 className="section-title">The Foundation of Everything We Do</h2>
            <p className="section-subtitle">Our purpose, promise, and approach — built on trust, transparency, and lasting impact.</p>
          </motion.div>
          <motion.div className="about-foundation-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {FOUNDATION.map((f) => (
              <motion.div key={f.key} className="about-foundation-card" variants={staggerItem} whileHover={{ y: -8 }}>
                <span className="about-foundation-bar" style={{ background: f.accent }} />
                <div className="about-foundation-emoji" style={{ background: `${f.color}18`, color: f.color }}><f.Icon size={28} strokeWidth={1.9} /></div>
                <div className="about-foundation-label">{f.label}</div>
                <h3 className="about-foundation-title">{f.title}</h3>
                <p className="about-foundation-desc">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Core Services: 8 cards with expandable Learn More ── */}
      <section className="about-services section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              A wide range of services tailored to meet the evolving needs of job seekers, students, employers, and institutions.
            </p>
          </motion.div>
          <motion.div className="about-services-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {CORE_SERVICES.map((s, i) => {
              const isOpen = openCard === i
              return (
                <motion.div
                  key={s.title}
                  className={`about-service-card${isOpen ? ' is-open' : ''}`}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                >
                  <div className="about-service-emoji" style={{ color: 'var(--primary)' }}><s.Icon size={24} strokeWidth={1.9} /></div>
                  <h4 className="about-service-title">{s.title}</h4>
                  <p className="about-service-desc">{s.desc}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        className="about-service-more"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {s.more}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    className="about-service-toggle"
                    onClick={() => setOpenCard(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Show Less' : 'Learn More'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .25s' }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── We Stand Out Because Of (cards) ── */}
      <section className="about-standout section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Why Choose OWS</div>
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">
              The qualities that make Odisha Workforce Solutions a partner you can rely on.
            </p>
          </motion.div>
          <motion.div className="about-standout-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {STANDOUT.map((p) => (
              <motion.div key={p.text} className="about-standout-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <span className="about-standout-icon" style={{ color: 'var(--primary)' }}><p.Icon size={22} strokeWidth={2} /></span>
                <span className="about-standout-text">{p.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Commitment (cards) ── */}
      <section className="about-commitment section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Our Commitment</div>
            <h2 className="section-title">We Are Committed to Helping</h2>
            <p className="section-subtitle">
              Through innovation, integrity, and dedication, we build long-term relationships and create
              meaningful impact across the workforce ecosystem.
            </p>
          </motion.div>
          <motion.div className="about-commitment-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {COMMITMENTS.map((c) => (
              <motion.div key={c.title} className="about-commitment-card" variants={staggerItem} whileHover={{ y: -6 }}>
                <div className="about-commitment-emoji" style={{ background: `${c.color}18`, color: c.color }}><c.Icon size={28} strokeWidth={1.9} /></div>
                <h4 className="about-commitment-title">{c.title}</h4>
                <p className="about-commitment-desc">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Serving Section ── */}
      <section className="about-serving section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="about-serving-inner">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="section-tag">Our Reach</div>
              <h2 className="section-title">Serving Odisha,<br />India &amp; Beyond</h2>
              <p className="about-para">
                From local hiring solutions to international education support, Odisha Workforce Solutions
                proudly serves clients across multiple industries and regions.
              </p>
              <p className="about-para">
                Whether you are looking for career opportunities, workforce solutions, recruitment services,
                or educational guidance, our team is ready to support your journey every step of the way.
              </p>
              <div className="about-reach-tags">
                {['Bhubaneswar', 'Odisha', 'Pan-India', 'Abroad'].map((r) => (
                  <span key={r} className="about-reach-tag">{r}</span>
                ))}
              </div>
            </motion.div>
            <motion.div className="about-serving-contact" variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="about-contact-card">
                <div className="about-contact-icon"><Phone size={26} strokeWidth={2} /></div>
                <div className="about-contact-label">Call Us Anytime</div>
                <a href="tel:+919090117679" className="about-contact-number">+91 9090117679</a>
                <a href="tel:+919090117678" className="about-contact-number">+91 9090117678</a>
                <p className="about-contact-sub">Mon–Sat · 9 AM to 7 PM IST</p>
                <div className="about-contact-actions">
                  <motion.a href="tel:+919090117679" className="btn btn-primary about-contact-btn"
                    whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                    Call Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </motion.a>
                  <motion.a href="https://wa.me/919090117679" target="_blank" rel="noopener noreferrer"
                    className="btn about-whatsapp-btn"
                    whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                      <path d="M16.04 3.2c-7.1 0-12.86 5.76-12.86 12.86 0 2.27.6 4.49 1.73 6.45L3.1 28.8l6.46-1.69a12.8 12.8 0 0 0 6.48 1.76h.01c7.1 0 12.86-5.76 12.86-12.86 0-3.44-1.34-6.67-3.77-9.1a12.78 12.78 0 0 0-9.1-3.71zm0 23.5h-.01a10.66 10.66 0 0 1-5.43-1.49l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.63 10.63 0 0 1-1.63-5.65c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.54 1.11 7.56 3.13a10.63 10.63 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.7 10.7zm5.87-8.01c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55l-.62-.01c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/>
                    </svg>
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="about-cta-banner">
        <div className="about-cta-bg" />
        <div className="container">
          <motion.div className="about-cta-inner" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            <motion.h2 className="about-cta-title" variants={fadeUp}>
              Empowering Careers. Strengthening Businesses.<br />Creating Opportunities.
              <Rocket size={26} strokeWidth={2} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 10 }} />
            </motion.h2>
            <motion.p className="about-cta-sub" variants={fadeUp}>
              Connect with Odisha Workforce Solutions for career opportunities, workforce solutions, and
              educational guidance — across India and abroad.
            </motion.p>
            <motion.div className="about-cta-actions" variants={fadeUp}>
              <motion.button className="btn btn-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => { onNavigate('home'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100) }}>
                Explore Opportunities
              </motion.button>
              <motion.a href="tel:+919090117678" className="btn btn-outline-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Talk to Our Team
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
