import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }
const staggerItem = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-60px' }

const INDUSTRIES = [
  {
    emoji: '💻', label: 'Information Technology (IT)', color: '#2563EB', bg: '#EFF6FF',
    roles: ['Software Development', 'Web & Mobile Applications', 'IT Support & Networking', 'Data Entry & Back Office Operations', 'Digital Marketing & Technical Support'],
  },
  {
    emoji: '🏭', label: 'Manufacturing & Production', color: '#DC2626', bg: '#FEF2F2',
    roles: ['Factory & Plant Workforce', 'Machine Operators', 'Production Supervisors', 'Quality Control Staff', 'Technical & Skilled Workers'],
  },
  {
    emoji: '🏥', label: 'Healthcare & Pharmaceuticals', color: '#059669', bg: '#F0FDF4',
    roles: ['Hospitals & Clinics', 'Nursing & Healthcare Staff', 'Medical Representatives', 'Laboratory Technicians', 'Healthcare Administration'],
  },
  {
    emoji: '🛒', label: 'Retail & FMCG', color: '#16A34A', bg: '#F0FDF4',
    roles: ['Retail Sales Executives', 'Store Management', 'Customer Service Staff', 'Supply Chain & Distribution', 'FMCG Sales & Marketing'],
  },
  {
    emoji: '🏦', label: 'Banking & Financial Services', color: '#D97706', bg: '#FFFBEB',
    roles: ['Banking Operations', 'Insurance & Financial Advisors', 'Customer Relationship Executives', 'Sales & Business Development', 'Back Office Support'],
  },
  {
    emoji: '📚', label: 'Education & Training', color: '#7C3AED', bg: '#F5F3FF',
    roles: ['Schools & Colleges', 'Faculty & Trainers', 'Academic Coordinators', 'Career Counsellors', 'Administrative Staff'],
  },
  {
    emoji: '🏨', label: 'Hospitality & Tourism', color: '#DB2777', bg: '#FDF2F8',
    roles: ['Hotels & Resorts', 'Front Office Executives', 'Food & Beverage Services', 'Housekeeping Staff', 'Travel & Tourism Support'],
  },
  {
    emoji: '🚚', label: 'Logistics & Supply Chain', color: '#0891B2', bg: '#ECFEFF',
    roles: ['Warehouse Management', 'Delivery & Distribution Staff', 'Inventory Management', 'Transportation Coordination', 'Supply Chain Operations'],
  },
  {
    emoji: '🎧', label: 'BPO & Customer Support', color: '#4F46E5', bg: '#EEF2FF',
    roles: ['Voice & Non-Voice Process', 'Customer Care Executives', 'Technical Support Teams', 'Telecalling & Sales Support', 'International & Domestic Process Hiring'],
  },
  {
    emoji: '⚙️', label: 'Engineering & Infrastructure', color: '#EA580C', bg: '#FFF7ED',
    roles: ['Civil Engineering', 'Mechanical & Electrical Workforce', 'Construction Site Staff', 'Project Coordination', 'Technical Supervisors'],
  },
  {
    emoji: '🚗', label: 'Automobile Industry', color: '#0EA5E9', bg: '#F0F9FF',
    roles: ['Automobile Technicians', 'Service Advisors', 'Sales & Showroom Staff', 'Spare Parts Management', 'Production & Assembly Line Workforce'],
  },
  {
    emoji: '✈️', label: 'Aviation & Airport Services', color: '#0284C7', bg: '#F0F9FF',
    roles: ['Ground Staff Recruitment', 'Customer Service Executives', 'Airport Operations Support', 'Ticketing & Reservation Staff', 'Hospitality & Passenger Assistance'],
  },
  {
    emoji: '🛍️', label: 'E-Commerce & Online Services', color: '#9333EA', bg: '#FAF5FF',
    roles: ['Delivery & Fulfillment Staff', 'Warehouse Executives', 'Customer Support Teams', 'Operations Management', 'Inventory & Logistics Support'],
  },
  {
    emoji: '📡', label: 'Telecom & Communication', color: '#1D4ED8', bg: '#EFF6FF',
    roles: ['Field Executives', 'Network Support Staff', 'Customer Service Representatives', 'Sales & Marketing Teams', 'Technical Installation Support'],
  },
  {
    emoji: '🛡️', label: 'Security & Facility Management', color: '#475569', bg: '#F1F5F9',
    roles: ['Security Guards & Supervisors', 'Facility Management Staff', 'Housekeeping Services', 'Maintenance & Support Teams', 'Corporate Facility Operations'],
  },
  {
    emoji: '🏗️', label: 'Construction & Real Estate', color: '#B45309', bg: '#FFFBEB',
    roles: ['Construction Workforce', 'Site Engineers & Supervisors', 'Project Support Staff', 'Skilled & Unskilled Labor', 'Real Estate Sales & Operations'],
  },
]

export default function Industries({ onNavigate }) {
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
              <span>Industries</span>
            </motion.div>
            <motion.div className="hero-badge" variants={fadeUp} style={{ marginBottom: 20 }}>
              <span className="badge-dot" />
              16 Industries · Customized Workforce Solutions
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Industries<br />
              <span className="h1-gradient">We Serve</span>
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              At Odisha Workforce Solutions (OWS), we provide customized workforce, recruitment, staffing,
              and HR solutions across a wide range of industries. Our industry-focused approach helps
              organizations find skilled talent while supporting professionals in building successful careers.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp}>
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>
                Find Your Industry
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>
              <motion.button className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('services')}>
                View All Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Browse by Industry</div>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              We understand the unique workforce requirements of different sectors and deliver reliable,
              efficient, and scalable hiring solutions tailored to industry needs.
            </p>
          </motion.div>

          <motion.div className="indx-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {INDUSTRIES.map((ind) => (
              <motion.div key={ind.label} className="indx-card" variants={staggerItem} whileHover={{ y: -8 }}
                style={{ '--ind-color': ind.color, '--ind-bg': ind.bg }}>
                <span className="indx-accent" />
                <div className="indx-head">
                  <span className="indx-icon">{ind.emoji}</span>
                  <h3 className="indx-title">{ind.label}</h3>
                </div>
                <ul className="indx-roles">
                  {ind.roles.map((r) => (
                    <li key={r} className="indx-role">
                      <span className="indx-bullet" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Excellence band */}
      <section className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="indx-excellence" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="indx-excellence-icon">🏆</div>
            <h2 className="indx-excellence-title">Delivering Workforce Excellence Across Industries</h2>
            <p className="indx-excellence-text">
              With a strong employer network and industry expertise, Odisha Workforce Solutions is committed
              to delivering the right talent, at the right time, for the right opportunity. We continue to
              support businesses, institutions, and professionals with reliable recruitment and workforce
              solutions across Odisha, India, and beyond.
            </p>
            <div className="indx-excellence-tags">
              {['Right Talent', 'Right Time', 'Right Opportunity', 'Odisha · India · Beyond'].map((t) => (
                <span key={t} className="indx-excellence-tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-banner">
        <div className="about-cta-bg" />
        <div className="container">
          <motion.div className="about-cta-inner" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            <motion.h2 className="about-cta-title" variants={fadeUp}>Don't See Your Industry?</motion.h2>
            <motion.p className="about-cta-sub" variants={fadeUp}>We work across all sectors. Contact us and we'll find the right opportunity for you.</motion.p>
            <motion.div className="about-cta-actions" variants={fadeUp}>
              <motion.button className="btn btn-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>Contact Our Team</motion.button>
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
