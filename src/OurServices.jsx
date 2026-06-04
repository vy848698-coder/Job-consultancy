import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeLeft = { hidden: { opacity: 0, x: -44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const SEEKERS = [
  { emoji: '🎯', title: 'Career Counselling & Placement', desc: 'One-on-one guidance with industry experts to map your ideal career path and connect you with the right opportunities.', tag: 'Career' },
  { emoji: '📈', title: 'Skill Development & Training', desc: 'Industry-oriented training programs designed to make you job-ready with practical, market-relevant skills.', tag: 'Training' },
  { emoji: '🎓', title: 'Education Consultancy', desc: 'Expert guidance for higher education admissions in India and abroad — from college selection to visa support.', tag: 'Education' },
  { emoji: '📝', title: 'Resume & Interview Prep', desc: 'Professional resume writing, LinkedIn optimisation, and mock interview coaching to help you stand out.', tag: 'Coaching' },
  { emoji: '💼', title: 'Job Matching & Referrals', desc: 'AI-assisted job matching to pair your skills and aspirations with the most suitable open positions.', tag: 'Placement' },
  { emoji: '🌐', title: 'Study Abroad Guidance', desc: 'End-to-end overseas education support — university selection, SOP writing, and visa processing.', tag: 'International' },
]

const EMPLOYERS = [
  { emoji: '👥', title: 'Recruitment & Staffing Solutions', desc: 'End-to-end permanent and contract hiring across industries — from sourcing and screening to onboarding.', tag: 'Recruitment' },
  { emoji: '🏢', title: 'HR Consulting & Workforce Planning', desc: 'Strategic HR solutions and workforce planning to align your talent strategy with business growth goals.', tag: 'HR Strategy' },
  { emoji: '🏫', title: 'Campus Recruitment Drives', desc: 'Organized campus drives at top colleges to connect you with bright, job-ready fresh graduates.', tag: 'Campus' },
  { emoji: '🎪', title: 'Mega Job Fairs & Bulk Hiring', desc: 'Large-scale job fairs and bulk hiring events for companies looking to scale teams quickly.', tag: 'Bulk Hiring' },
  { emoji: '📊', title: 'Payroll & Compliance Support', desc: 'Complete payroll management, PF, ESI, and statutory compliance handling for your workforce.', tag: 'Compliance' },
  { emoji: '⚙️', title: 'Contractual Staffing', desc: 'Flexible contract and temporary staffing solutions to meet seasonal or project-based workforce demands.', tag: 'Contractual' },
]

const PROCESS = [
  { n: '01', emoji: '🔍', title: 'Requirement Analysis', desc: 'Deep dive into your goals, skills, and expectations to understand exactly what you need.' },
  { n: '02', emoji: '🎯', title: 'Profile Building', desc: 'Craft your professional profile, resume, and pitch to maximize your market appeal.' },
  { n: '03', emoji: '🔗', title: 'Matching & Shortlisting', desc: 'Leveraging our network to match you with the best opportunities or candidates.' },
  { n: '04', emoji: '📋', title: 'Interview Coordination', desc: 'End-to-end scheduling and preparation support for every interview round.' },
  { n: '05', emoji: '✅', title: 'Offer & Onboarding', desc: 'Salary negotiation, offer evaluation, and seamless onboarding support.' },
]

export default function OurServices({ onNavigate }) {
  const [tab, setTab] = useState('seekers')
  const cards = tab === 'seekers' ? SEEKERS : EMPLOYERS

  return (
    <div className="page-wrap">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container">
          <motion.div className="page-hero-inner" initial="hidden" animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="page-breadcrumb" variants={fadeUp}>
              <button className="page-breadcrumb-link" onClick={() => onNavigate('home')}>Home</button>
              <span className="page-breadcrumb-sep">›</span>
              <span>Our Services</span>
            </motion.div>
            <motion.div className="hero-badge" variants={fadeUp} style={{ marginBottom: 20 }}>
              <span className="badge-dot" />
              Tailored · Professional · Result-Driven
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Comprehensive Solutions<br />
              <span className="h1-gradient">Tailored to Your Needs</span>
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              Whether you're a job seeker, student, or employer — OWS delivers end-to-end workforce
              and education solutions designed around your specific goals.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp}>
              <motion.a href="tel:+919090117678" className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Get Started Today
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
              <motion.button className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>
                Talk to an Expert
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="page-stats-strip">
        <div className="container">
          <div className="page-stats-row">
            {[['5000+','Candidates Placed'],['300+','Employer Partners'],['95%','Client Retention'],['8+','Years of Service']].map(([v,l]) => (
              <div key={l} className="page-strip-stat">
                <span className="page-strip-val">{v}</span>
                <span className="page-strip-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services tabs */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Choose your profile to see services designed specifically for you.</p>
          </motion.div>
          <motion.div className="page-tabs" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <button className={`page-tab${tab === 'seekers' ? ' active' : ''}`} onClick={() => setTab('seekers')}>
              👤 For Job Seekers & Students
            </button>
            <button className={`page-tab${tab === 'employers' ? ' active' : ''}`} onClick={() => setTab('employers')}>
              🏢 For Employers & Organisations
            </button>
          </motion.div>
          <motion.div className="page-services-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP} key={tab}>
            {cards.map((s) => (
              <motion.div key={s.title} className="page-service-card" variants={staggerItem} whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,.1)' }}>
                <div className="psc-emoji">{s.emoji}</div>
                <span className="psc-tag">{s.tag}</span>
                <h3 className="psc-title">{s.title}</h3>
                <p className="psc-desc">{s.desc}</p>
                <div className="psc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">How It Works</div>
            <h2 className="section-title">Our 5-Step Process</h2>
            <p className="section-subtitle">A transparent, structured approach that delivers results — every time.</p>
          </motion.div>
          <motion.div className="page-process-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {PROCESS.map((p, i) => (
              <motion.div key={p.n} className="page-process-card" variants={staggerItem}>
                <div className="ppc-number">{p.n}</div>
                <div className="ppc-emoji">{p.emoji}</div>
                <h4 className="ppc-title">{p.title}</h4>
                <p className="ppc-desc">{p.desc}</p>
                {i < PROCESS.length - 1 && <div className="ppc-connector" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-banner">
        <div className="about-cta-bg" />
        <div className="container">
          <motion.div className="about-cta-inner" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            <motion.h2 className="about-cta-title" variants={fadeUp}>Ready to Get Started?</motion.h2>
            <motion.p className="about-cta-sub" variants={fadeUp}>Talk to our team today and find the perfect solution for your needs.</motion.p>
            <motion.div className="about-cta-actions" variants={fadeUp}>
              <motion.a href="tel:+919090117678" className="btn btn-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Call +91 9090117678
              </motion.a>
              <motion.button className="btn btn-outline-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('contact')}>
                Send an Enquiry
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
