import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeLeft = { hidden: { opacity: 0, x: -44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const BENEFITS = [
  { emoji: '💰', title: 'Low Investment, High Returns', desc: 'Start with minimal capital and leverage our proven business model for consistent monthly revenue.', color: '#2563EB', bg: '#EFF6FF' },
  { emoji: '📋', title: 'Complete Training & Support', desc: 'Full operational training, marketing materials, and dedicated support from our core team.', color: '#059669', bg: '#F0FDF4' },
  { emoji: '🌐', title: 'Exclusive Territory Rights', desc: 'Operate with exclusive rights in your district with full brand protection and zero competition.', color: '#7C3AED', bg: '#F5F3FF' },
  { emoji: '📈', title: 'Proven Business Model', desc: 'Join 15+ successful partners already earning consistent monthly revenue across India.', color: '#D97706', bg: '#FFFBEB' },
  { emoji: '🤝', title: 'Strong Brand Support', desc: 'Leverage the OWS brand equity, national networks, and marketing collateral to build your business faster.', color: '#DC2626', bg: '#FEF2F2' },
  { emoji: '⚡', title: 'Fast Setup & Launch', desc: 'Get operational within 2–3 weeks with our turnkey setup guide and dedicated onboarding team.', color: '#0891B2', bg: '#ECFEFF' },
]

const STEPS = [
  { n: '01', title: 'Submit Enquiry', desc: 'Fill in the franchise enquiry form or call us to express your interest.' },
  { n: '02', title: 'Consultation Call', desc: 'Our franchise team explains the model, investment, and earning potential.' },
  { n: '03', title: 'Sign Agreement', desc: 'Simple, transparent franchise agreement with full clarity on terms.' },
  { n: '04', title: 'Training & Setup', desc: '5-day immersive training program covering operations, sales, and technology.' },
  { n: '05', title: 'Launch & Earn', desc: 'Go live with full OWS support — and start generating revenue from day one.' },
]

const REQUIREMENTS = [
  { emoji: '🏢', label: 'Office Space', value: '200–300 sq ft (owned or rented)' },
  { emoji: '💻', label: 'Equipment', value: '2+ computers, printer, internet connection' },
  { emoji: '👥', label: 'Team Size', value: '2–4 staff members to start' },
  { emoji: '💵', label: 'Investment', value: 'Contact us for franchise fee details' },
  { emoji: '📍', label: 'Location', value: 'Any district/city in India' },
  { emoji: '📜', label: 'Experience', value: 'HR or business background preferred (not mandatory)' },
]

const EARNERS = [
  { initials: 'RM', name: 'Ramesh Mishra', location: 'Cuttack, Odisha', revenue: '₹1.8L/month', color: '#2563EB' },
  { initials: 'PD', name: 'Priya Das', location: 'Rourkela, Odisha', revenue: '₹2.1L/month', color: '#059669' },
  { initials: 'SK', name: 'Suresh Kumar', location: 'Berhampur, Odisha', revenue: '₹1.5L/month', color: '#7C3AED' },
]

export default function Franchise({ onNavigate }) {
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
              <span>Franchise</span>
            </motion.div>
            <motion.div className="hero-badge" variants={fadeUp} style={{ marginBottom: 20 }}>
              <span className="badge-dot" />
              15+ Partners · Pan-India · Low Investment
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Own an OWS Franchise.<br />
              <span className="h1-gradient">Build a Profitable</span><br />
              Business.
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              Join the Odisha Workforce Solutions franchise network and build a successful recruitment
              and education consultancy business in your city with our proven model, brand, and support.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp}>
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>
                Apply for Franchise
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>
              <motion.a href="tel:+919090117678" className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Call for Details
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="page-stats-strip">
        <div className="container">
          <div className="page-stats-row">
            {[['15+','Active Franchise Partners'],['₹1–2.5L','Monthly Earning Potential'],['2–3 Weeks','Setup Time'],['100%','Brand & Tech Support']].map(([v,l]) => (
              <div key={l} className="page-strip-stat">
                <span className="page-strip-val">{v}</span>
                <span className="page-strip-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Why Partner With Us</div>
            <h2 className="section-title">Franchise Benefits</h2>
            <p className="section-subtitle">Everything you need to build a successful workforce consultancy in your city.</p>
          </motion.div>
          <motion.div className="franchise-benefits-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {BENEFITS.map((b) => (
              <motion.div key={b.title} className="franchise-benefit-card" variants={staggerItem} whileHover={{ y: -6 }}>
                <div className="fbc-icon" style={{ background: b.bg, color: b.color }}>{b.emoji}</div>
                <h4 className="fbc-title">{b.title}</h4>
                <p className="fbc-desc">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Earners showcase */}
      <section className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="franchise-earner-grid">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="section-tag">Success Stories</div>
              <h2 className="section-title">Franchise Partners<br />Already Earning</h2>
              <p className="about-para">
                Our partners across Odisha are building profitable businesses by leveraging the OWS brand, network, and operational support.
              </p>
              <motion.button className="btn btn-primary" style={{ marginTop: 24 }}
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>
                Become a Partner →
              </motion.button>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="franchise-earners-list">
                {EARNERS.map((e) => (
                  <div key={e.name} className="franchise-earner-card">
                    <div className="fe-av" style={{ background: e.color }}>{e.initials}</div>
                    <div className="fe-info">
                      <div className="fe-name">{e.name}</div>
                      <div className="fe-location">📍 {e.location}</div>
                    </div>
                    <div className="fe-revenue" style={{ color: e.color }}>{e.revenue}</div>
                  </div>
                ))}
                <div className="franchise-earner-note">Average earnings of active franchise partners</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Getting Started</div>
            <h2 className="section-title">How to Join</h2>
            <p className="section-subtitle">From enquiry to launch in as little as 2–3 weeks.</p>
          </motion.div>
          <motion.div className="franchise-steps-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {STEPS.map((s) => (
              <motion.div key={s.n} className="franchise-step-card" variants={staggerItem}>
                <div className="fsc-number">{s.n}</div>
                <h4 className="fsc-title">{s.title}</h4>
                <p className="fsc-desc">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">What You Need</div>
            <h2 className="section-title">Franchise Requirements</h2>
          </motion.div>
          <motion.div className="franchise-req-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {REQUIREMENTS.map((r) => (
              <motion.div key={r.label} className="franchise-req-card" variants={staggerItem}>
                <span className="frc-emoji">{r.emoji}</span>
                <div>
                  <div className="frc-label">{r.label}</div>
                  <div className="frc-value">{r.value}</div>
                </div>
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
            <motion.h2 className="about-cta-title" variants={fadeUp}>
              Ready to Build Your Own<br />Recruitment Business?
            </motion.h2>
            <motion.p className="about-cta-sub" variants={fadeUp}>
              Apply today and our franchise team will get back to you within 24 hours.
            </motion.p>
            <motion.div className="about-cta-actions" variants={fadeUp}>
              <motion.button className="btn btn-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>Apply for Franchise Now</motion.button>
              <motion.a href="tel:+919090117678" className="btn btn-outline-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Call +91 9090117678
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
