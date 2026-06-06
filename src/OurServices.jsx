import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const S = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' }

const SERVICES = [
  {
    color: '#2563EB', bg: '#EFF6FF',
    icon: <svg {...S}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Recruitment & Staffing Solutions',
    desc: 'We help organizations identify, recruit, and retain qualified professionals across various industries.',
    items: [
      'Permanent Hiring',
      'Temporary & Contract Staffing',
      'Bulk Hiring Solutions',
      'Executive Search',
      'Entry-Level & Experienced Recruitment',
      'Industry-Specific Talent Acquisition',
    ],
  },
  {
    color: '#059669', bg: '#F0FDF4',
    icon: <svg {...S}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    title: 'HR Consulting & Workforce Planning',
    desc: 'Our HR solutions are designed to improve organizational efficiency and workforce management.',
    items: [
      'Workforce Planning',
      'HR Policy Guidance',
      'Employee Management Support',
      'Talent Mapping',
      'Recruitment Process Support',
      'Organizational HR Solutions',
    ],
  },
  {
    color: '#7C3AED', bg: '#F5F3FF',
    icon: <svg {...S}><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg>,
    title: 'Campus Recruitment Drives',
    desc: 'We organize and manage campus hiring programs that connect educational institutions with leading employers.',
    items: [
      'On-Campus Recruitment Drives',
      'Pre-Placement Training',
      'Employer Coordination',
      'Candidate Screening & Shortlisting',
      'Placement Assistance',
    ],
  },
  {
    color: '#DC2626', bg: '#FEF2F2',
    icon: <svg {...S}><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
    title: 'Mega Job Fairs & Hiring Events',
    desc: 'We conduct large-scale job fairs and recruitment events to create employment opportunities for job seekers and hiring solutions for employers.',
    items: [
      'Multi-Company Hiring Events',
      'Walk-In Interviews',
      'Candidate Registration & Support',
      'Employer Participation Management',
      'Bulk Recruitment Coordination',
    ],
  },
  {
    color: '#EA580C', bg: '#FFF7ED',
    icon: <svg {...S}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    title: 'Skill Development & Training Programs',
    desc: 'We provide industry-oriented training programs that enhance employability and professional growth.',
    items: [
      'Soft Skills Development',
      'Communication Skills',
      'Interview Preparation',
      'Personality Development',
      'Industry-Specific Training',
      'Career Readiness Programs',
    ],
  },
  {
    color: '#0891B2', bg: '#ECFEFF',
    icon: <svg {...S}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
    title: 'Career Counselling & Placement Support',
    desc: 'We guide students and job seekers toward suitable career opportunities and professional success.',
    items: [
      'Career Guidance',
      'Job Search Assistance',
      'Resume Building',
      'Interview Preparation',
      'Placement Support',
      'Career Planning',
    ],
  },
  {
    color: '#DB2777', bg: '#FDF2F8',
    icon: <svg {...S}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
    title: 'Education Consultancy (India & Abroad)',
    desc: 'We assist students in selecting the right educational pathways both in India and internationally.',
    items: [
      'Admission Guidance',
      'Course & University Selection',
      'Study Abroad Assistance',
      'Documentation Support',
      'Career-Oriented Education Planning',
      'Student Counselling',
    ],
  },
  {
    color: '#D97706', bg: '#FFFBEB',
    icon: <svg {...S}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: 'Resume Building & Interview Preparation',
    desc: 'Our experts help candidates present themselves professionally and confidently in the job market.',
    items: [
      'Professional Resume Creation',
      'CV Optimization',
      'Mock Interviews',
      'Communication Improvement',
      'Interview Techniques & Guidance',
    ],
  },
]

export default function OurServices({ onNavigate }) {
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
              Professional · Result-Oriented
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Comprehensive Workforce<br />
              <span className="h1-gradient">& Career Solutions</span>
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              At Odisha Workforce Solutions (OWS), we provide professional and result-oriented services
              designed to support job seekers, students, employers, and institutions — bridging the gap
              between talent and opportunity through innovative workforce and education solutions.
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

      {/* Services */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              A complete suite of workforce and education services, delivered with professionalism and care.
            </p>
          </motion.div>

          <motion.div className="svc-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} className="svc-card" variants={staggerItem} whileHover={{ y: -6 }}
                style={{ '--svc-color': s.color, '--svc-bg': s.bg }}>
                <span className="svc-accent" />
                <div className="svc-card-head">
                  <span className="svc-icon">{s.icon}</span>
                  <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-divider" />
                <ul className="svc-list">
                  {s.items.map((it) => (
                    <li key={it} className="svc-list-item">
                      <span className="svc-check">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <button className="svc-link" onClick={() => onNavigate('contact')}>
                  Enquire about this service
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
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
