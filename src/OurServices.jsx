import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const SERVICES = [
  {
    icon: '👥',
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
    icon: '🏢',
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
    icon: '🎓',
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
    icon: '🎪',
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
    icon: '📈',
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
    icon: '🧭',
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
    icon: '✈️',
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
    icon: '📝',
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
              <motion.div key={s.title} className="svc-card" variants={staggerItem} whileHover={{ y: -6 }}>
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
                      <svg className="svc-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
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
