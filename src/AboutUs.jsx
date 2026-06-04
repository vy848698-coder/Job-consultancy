import { motion } from 'framer-motion'
import owsLogo from './assets/logo.png'

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

const CORE_SERVICES = [
  { emoji: '🎯', title: 'Recruitment & Staffing', desc: 'End-to-end permanent and contract staffing solutions across all levels and industries.' },
  { emoji: '🏢', title: 'HR Consulting & Workforce Planning', desc: 'Strategic HR advisory, workforce structuring, and organizational development support.' },
  { emoji: '🎓', title: 'Campus Recruitment Drives', desc: 'Structured campus hiring programs connecting top colleges with leading employers.' },
  { emoji: '🤝', title: 'Mega Job Fairs & Bulk Hiring', desc: 'Large-scale hiring events and bulk recruitment drives for high-volume workforce needs.' },
  { emoji: '📈', title: 'Skill Development & Training', desc: 'Industry-focused training programs to make candidates job-ready with market-relevant skills.' },
  { emoji: '💼', title: 'Career Counselling & Placement', desc: 'One-on-one guidance to map ideal career paths and connect talent with the right roles.' },
  { emoji: '✈️', title: 'Education Consultancy (India & Abroad)', desc: 'Study abroad guidance, university selection, and visa support for aspirational students.' },
  { emoji: '📝', title: 'Resume Building & Interview Prep', desc: 'Professional resume crafting and mock interview coaching to maximize selection rates.' },
]

const WHY_POINTS = [
  { icon: '✔', text: 'Professional and transparent processes' },
  { icon: '✔', text: 'Strong employer and institutional network' },
  { icon: '✔', text: 'Industry-focused recruitment solutions' },
  { icon: '✔', text: 'Personalized guidance and support' },
  { icon: '✔', text: 'Commitment to quality and client satisfaction' },
  { icon: '✔', text: 'Local expertise with a national and global outlook' },
]

const COMMITMENTS = [
  { emoji: '👤', title: 'Job Seekers', desc: 'Build successful careers with expert guidance, skill development, and the right opportunities.' },
  { emoji: '🎓', title: 'Students', desc: 'Achieve educational goals with trusted consultancy for colleges and universities in India and abroad.' },
  { emoji: '🏢', title: 'Employers', desc: 'Find the right talent efficiently with tailored, high-quality recruitment and staffing solutions.' },
  { emoji: '🏫', title: 'Institutions', desc: 'Strengthen workforce readiness through structured campus placements and skill programs.' },
]

const STATS = [
  { value: '5000+', label: 'Candidates Placed', color: '#2563EB' },
  { value: '300+', label: 'Employer Partners', color: '#059669' },
  { value: '95%', label: 'Client Retention', color: '#D97706' },
  { value: '8+', label: 'Years of Excellence', color: '#7C3AED' },
]

export default function AboutUs({ onNavigate }) {
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
              Headquartered in Bhubaneswar, Odisha Workforce Solutions (OWS) is a leading recruitment,
              education consultancy, and workforce development organization — dedicated to connecting
              talent with opportunity across India and abroad.
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
              <h2 className="section-title">Empowering People.<br />Enabling Progress.</h2>
              <p className="about-para">
                Odisha Workforce Solutions (OWS) is a leading recruitment, education consultancy, and
                workforce development organization dedicated to connecting talent with opportunity.
              </p>
              <p className="about-para">
                Founded with the vision of empowering individuals and supporting organizational growth,
                we provide comprehensive solutions in Recruitment, Staffing, Skill Development, HR Services,
                Campus Hiring, and Education Consultancy across India and abroad.
              </p>
              <p className="about-para">
                We are an <strong>ISO 9001:2015 Certified</strong>, <strong>MSME-registered</strong>, and{' '}
                <strong>GST-compliant</strong> organization committed to delivering professional, ethical,
                and result-driven services.
              </p>
              <div className="about-badges">
                {['ISO 9001:2015', 'MSME Registered', 'GST Compliant'].map((b) => (
                  <span key={b} className="about-badge-chip">{b}</span>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-who-right" variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="about-logo-card">
                <div className="about-logo-card-inner">
                  <img src={owsLogo} alt="Odisha Workforce Solutions" className="about-logo-large" />
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

      {/* ── Mission & Vision ── */}
      <section className="about-mv section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Our Purpose</div>
            <h2 className="section-title">Mission & Vision</h2>
            <p className="section-subtitle">The principles that drive everything we do at Odisha Workforce Solutions.</p>
          </motion.div>
          <motion.div className="about-mv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            <motion.div className="about-mv-card about-mv-mission" variants={staggerItem} whileHover={{ y: -8 }}>
              <div className="about-mv-icon">🎯</div>
              <div className="about-mv-label">Our Mission</div>
              <h3 className="about-mv-title">Creating Sustainable Opportunities</h3>
              <p className="about-mv-desc">
                To create sustainable career opportunities, develop industry-ready talent, and provide
                innovative workforce solutions that help individuals and organizations grow together.
              </p>
            </motion.div>
            <motion.div className="about-mv-card about-mv-vision" variants={staggerItem} whileHover={{ y: -8 }}>
              <div className="about-mv-icon">🌟</div>
              <div className="about-mv-label">Our Vision</div>
              <h3 className="about-mv-title">Recognized Global Leader</h3>
              <p className="about-mv-desc">
                To become a trusted and recognized leader in workforce solutions, recruitment services,
                and education consultancy by transforming careers and empowering businesses globally.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Services ── */}
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
            {CORE_SERVICES.map((s, i) => (
              <motion.div key={s.title} className="about-service-card" variants={staggerItem}
                whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,.1)' }}>
                <div className="about-service-emoji">{s.emoji}</div>
                <h4 className="about-service-title">{s.title}</h4>
                <p className="about-service-desc">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="about-why section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="about-why-grid">
            <motion.div className="about-why-left" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="section-tag">Why Choose Us</div>
              <h2 className="section-title">We Stand Out<br />Because Of</h2>
              <p className="about-para">
                At Odisha Workforce Solutions, we believe that people are the foundation of every
                successful organization. Our experienced team works closely with clients and candidates
                to deliver customized and effective solutions.
              </p>
              <motion.div className="about-why-points" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
                {WHY_POINTS.map((p) => (
                  <motion.div key={p.text} className="about-why-point" variants={staggerItem}>
                    <span className="about-why-check">✓</span>
                    <span>{p.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="about-why-right" variants={fadeRight} initial="hidden" whileInView="visible" viewport={VP}>
              <div className="about-why-visual">
                <div className="about-why-bg-card">
                  <div className="about-why-pattern" />
                  <div className="about-why-stat-row">
                    <div className="about-why-big-stat">
                      <div className="about-why-stat-num">5000+</div>
                      <div className="about-why-stat-label">Candidates Placed</div>
                    </div>
                    <div className="about-why-big-stat">
                      <div className="about-why-stat-num">300+</div>
                      <div className="about-why-stat-label">Employer Partners</div>
                    </div>
                  </div>
                  <div className="about-why-quote">
                    "Through innovation, integrity, and dedication, we continue to build long-term
                    relationships and create meaningful impact in the workforce ecosystem."
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section className="about-commitment section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Our Commitment</div>
            <h2 className="section-title">We Are Here to Help</h2>
            <p className="section-subtitle">
              Through innovation, integrity, and dedication, we create meaningful impact for all our stakeholders.
            </p>
          </motion.div>
          <motion.div className="about-commitment-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {COMMITMENTS.map((c, i) => (
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
                Whether you are looking for career opportunities, workforce solutions, or educational
                guidance, we are here to support your journey every step of the way.
              </p>
              <div className="about-reach-tags">
                {['Bhubaneswar', 'Cuttack', 'Rourkela', 'Pan-India', 'Canada', 'Australia', 'UK', 'Gulf'].map((r) => (
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
              Ready to Transform Your Career<br />or Find the Right Talent?
            </motion.h2>
            <motion.p className="about-cta-sub" variants={fadeUp}>
              Join thousands of job seekers and employers who trust Odisha Workforce Solutions.
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
