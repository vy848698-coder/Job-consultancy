import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    emoji: '🎯',
    label: 'Our Mission',
    title: 'Creating Sustainable Opportunities',
    desc: 'To create sustainable career opportunities, develop industry-ready talent, and deliver innovative workforce solutions that enable individuals and organizations to grow together.',
    accent: 'linear-gradient(90deg, #2563EB, #38BDF8)',
  },
  {
    key: 'vision',
    emoji: '🌟',
    label: 'Our Vision',
    title: 'A Recognized Global Leader',
    desc: 'To become a trusted and recognized leader in workforce solutions, recruitment services, and education consultancy by transforming careers and empowering businesses globally.',
    accent: 'linear-gradient(90deg, #7C3AED, #EC4899)',
  },
  {
    key: 'why',
    emoji: '🤝',
    label: 'Why Choose Us',
    title: 'People Are Our Foundation',
    desc: 'We believe people are the foundation of every successful organization. Our experienced team collaborates closely with clients, employers, institutions, and candidates to deliver customized and effective solutions.',
    accent: 'linear-gradient(90deg, #059669, #34D399)',
  },
  {
    key: 'what',
    emoji: '💡',
    label: 'Our Services',
    title: 'Solutions Built Around You',
    desc: 'We provide a wide range of services designed to meet the evolving needs of job seekers, students, employers, and educational institutions.',
    accent: 'linear-gradient(90deg, #D97706, #FBBF24)',
  },
]

/* ── 8 Core Services with expandable "Learn More" detail ── */
const CORE_SERVICES = [
  {
    emoji: '🎯',
    title: 'Recruitment & Staffing Solutions',
    desc: 'Helping organizations identify, attract, and hire qualified professionals for various roles and industries.',
    more: 'We handle the complete hiring cycle — sourcing, screening, shortlisting, and onboarding — so organizations across every industry secure the right professionals quickly and reliably.',
  },
  {
    emoji: '🏢',
    title: 'HR Consulting & Workforce Planning',
    desc: 'Strategic human resource solutions to improve workforce efficiency and organizational growth.',
    more: 'Our HR experts advise on workforce structuring, policies, and planning, helping organizations build efficient, future-ready teams that support long-term growth.',
  },
  {
    emoji: '🎓',
    title: 'Campus Recruitment Drives',
    desc: 'Connecting employers with fresh talent through organized campus hiring programs.',
    more: 'We organize end-to-end campus hiring programs — coordinating with colleges, managing assessments and interviews, and connecting employers with promising fresh talent.',
  },
  {
    emoji: '🤝',
    title: 'Mega Job Fairs & Bulk Hiring',
    desc: 'Managing large-scale recruitment campaigns and employment events.',
    more: 'From planning to execution, we manage large-scale job fairs and bulk hiring campaigns that bring employers and job seekers together for fast, high-volume recruitment.',
  },
  {
    emoji: '📈',
    title: 'Skill Development & Training Programs',
    desc: 'Industry-focused training initiatives designed to improve employability and workforce readiness.',
    more: 'Our practical, industry-aligned training programs build the technical and soft skills candidates need to become job-ready and confident in the modern workplace.',
  },
  {
    emoji: '💼',
    title: 'Career Counselling & Placement Support',
    desc: 'Personalized guidance and placement assistance for students and job seekers.',
    more: 'We offer one-on-one career counselling to map the right path for each individual, backed by dedicated placement support that connects talent with suitable opportunities.',
  },
  {
    emoji: '✈️',
    title: 'Education Consultancy (India & Abroad)',
    desc: 'Expert support for admissions, career planning, and educational opportunities both in India and internationally.',
    more: 'From course and university selection to admissions and documentation, we guide students through every step of pursuing education in India and abroad.',
  },
  {
    emoji: '📝',
    title: 'Resume Building & Interview Preparation',
    desc: 'Professional resume creation, interview coaching, and career readiness services.',
    more: 'We craft professional, impactful resumes and provide interview coaching so candidates can present themselves confidently and improve their selection chances.',
  },
]

/* ── What Makes Us Different ── */
const STANDOUT = [
  { icon: '🛡️', text: 'Professional and transparent processes' },
  { icon: '🌐', text: 'Strong employer and institutional network' },
  { icon: '🎯', text: 'Industry-focused recruitment solutions' },
  { icon: '🤲', text: 'Personalized guidance and support' },
  { icon: '⭐', text: 'Commitment to quality and client satisfaction' },
  { icon: '🌏', text: 'Local expertise with a national and global outlook' },
]

/* ── Our Commitment ── */
const COMMITMENTS = [
  { emoji: '👤', title: 'Job Seekers', desc: 'Helping job seekers build successful careers.' },
  { emoji: '🎓', title: 'Students', desc: 'Helping students achieve their educational goals.' },
  { emoji: '🏢', title: 'Employers', desc: 'Helping employers find the right talent.' },
  { emoji: '🏫', title: 'Institutions', desc: 'Helping institutions strengthen workforce readiness.' },
]

/* ── Credentials (factual, from the company profile) ── */
const STATS = [
  { value: 'ISO 9001:2015', label: 'Certified', color: '#2563EB' },
  { value: 'MSME', label: 'Registered', color: '#059669' },
  { value: 'GST', label: 'Compliant', color: '#D97706' },
  { value: 'India & Abroad', label: 'Service Reach', color: '#7C3AED' },
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
          <motion.div
            className="about-hero-inner"
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
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="about-stats-bar">
        <div className="container">
          <motion.div className="about-stats-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {STATS.map((s) => (
              <motion.div key={s.label} className="about-stat-item" variants={staggerItem}>
                <div className="about-stat-value" style={{ color: s.color }}>{s.value}</div>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
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
                <div className="about-foundation-emoji">{f.emoji}</div>
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
                  <div className="about-service-emoji">{s.emoji}</div>
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
                <span className="about-standout-icon">{p.icon}</span>
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
                <div className="about-commitment-emoji">{c.emoji}</div>
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
                <div className="about-contact-icon">📞</div>
                <div className="about-contact-label">Call Us Anytime</div>
                <a href="tel:+919090117678" className="about-contact-number">+91 9090117678</a>
                <p className="about-contact-sub">Mon–Sat · 9 AM to 7 PM IST</p>
                <motion.a href="tel:+919090117678" className="btn btn-primary about-contact-btn"
                  whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                  Contact Us Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </motion.a>
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
              Empowering Careers. Strengthening Businesses.<br />Creating Opportunities. 🚀
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
