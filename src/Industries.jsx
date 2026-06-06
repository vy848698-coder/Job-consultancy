import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 44 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }
const staggerItem = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-60px' }

const S = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' }

const INDUSTRIES = [
  {
    tag: 'Technology', label: 'Information Technology (IT)', color: '#2563EB', bg: '#EFF6FF',
    icon: <svg {...S}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    roles: ['Software Development', 'Web & Mobile Applications', 'IT Support & Networking', 'Data Entry & Back Office Operations', 'Digital Marketing & Technical Support'],
  },
  {
    tag: 'Industrial', label: 'Manufacturing & Production', color: '#DC2626', bg: '#FEF2F2',
    icon: <svg {...S}><path d="M2 20h20M4 20V11l5 3V11l5 3V11l5 3v6"/><path d="M9 20v-4M15 20v-4"/></svg>,
    roles: ['Factory & Plant Workforce', 'Machine Operators', 'Production Supervisors', 'Quality Control Staff', 'Technical & Skilled Workers'],
  },
  {
    tag: 'Medical', label: 'Healthcare & Pharmaceuticals', color: '#059669', bg: '#F0FDF4',
    icon: <svg {...S}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    roles: ['Hospitals & Clinics', 'Nursing & Healthcare Staff', 'Medical Representatives', 'Laboratory Technicians', 'Healthcare Administration'],
  },
  {
    tag: 'Retail', label: 'Retail & FMCG', color: '#16A34A', bg: '#F0FDF4',
    icon: <svg {...S}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    roles: ['Retail Sales Executives', 'Store Management', 'Customer Service Staff', 'Supply Chain & Distribution', 'FMCG Sales & Marketing'],
  },
  {
    tag: 'Finance', label: 'Banking & Financial Services', color: '#D97706', bg: '#FFFBEB',
    icon: <svg {...S}><path d="M3 21h18M4 21V10M20 21V10M3 10l9-6 9 6M8 21v-7M12 21v-7M16 21v-7"/></svg>,
    roles: ['Banking Operations', 'Insurance & Financial Advisors', 'Customer Relationship Executives', 'Sales & Business Development', 'Back Office Support'],
  },
  {
    tag: 'Academic', label: 'Education & Training', color: '#7C3AED', bg: '#F5F3FF',
    icon: <svg {...S}><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg>,
    roles: ['Schools & Colleges', 'Faculty & Trainers', 'Academic Coordinators', 'Career Counsellors', 'Administrative Staff'],
  },
  {
    tag: 'Hospitality', label: 'Hospitality & Tourism', color: '#DB2777', bg: '#FDF2F8',
    icon: <svg {...S}><path d="M2 20V8M2 12h16a3 3 0 0 1 3 3v5M2 16h19M6 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"/></svg>,
    roles: ['Hotels & Resorts', 'Front Office Executives', 'Food & Beverage Services', 'Housekeeping Staff', 'Travel & Tourism Support'],
  },
  {
    tag: 'Supply Chain', label: 'Logistics & Supply Chain', color: '#0891B2', bg: '#ECFEFF',
    icon: <svg {...S}><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    roles: ['Warehouse Management', 'Delivery & Distribution Staff', 'Inventory Management', 'Transportation Coordination', 'Supply Chain Operations'],
  },
  {
    tag: 'Support', label: 'BPO & Customer Support', color: '#4F46E5', bg: '#EEF2FF',
    icon: <svg {...S}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
    roles: ['Voice & Non-Voice Process', 'Customer Care Executives', 'Technical Support Teams', 'Telecalling & Sales Support', 'International & Domestic Process Hiring'],
  },
  {
    tag: 'Engineering', label: 'Engineering & Infrastructure', color: '#EA580C', bg: '#FFF7ED',
    icon: <svg {...S}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    roles: ['Civil Engineering', 'Mechanical & Electrical Workforce', 'Construction Site Staff', 'Project Coordination', 'Technical Supervisors'],
  },
  {
    tag: 'Automotive', label: 'Automobile Industry', color: '#0EA5E9', bg: '#F0F9FF',
    icon: <svg {...S}><path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 12h14"/></svg>,
    roles: ['Automobile Technicians', 'Service Advisors', 'Sales & Showroom Staff', 'Spare Parts Management', 'Production & Assembly Line Workforce'],
  },
  {
    tag: 'Aviation', label: 'Aviation & Airport Services', color: '#0284C7', bg: '#F0F9FF',
    icon: <svg {...S}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
    roles: ['Ground Staff Recruitment', 'Customer Service Executives', 'Airport Operations Support', 'Ticketing & Reservation Staff', 'Hospitality & Passenger Assistance'],
  },
  {
    tag: 'E-Commerce', label: 'E-Commerce & Online Services', color: '#9333EA', bg: '#FAF5FF',
    icon: <svg {...S}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
    roles: ['Delivery & Fulfillment Staff', 'Warehouse Executives', 'Customer Support Teams', 'Operations Management', 'Inventory & Logistics Support'],
  },
  {
    tag: 'Telecom', label: 'Telecom & Communication', color: '#1D4ED8', bg: '#EFF6FF',
    icon: <svg {...S}><path d="M5 12.55a11 11 0 0 1 14 0M8.5 16.11a6 6 0 0 1 7 0M2 8.82a15 15 0 0 1 20 0"/><circle cx="12" cy="20" r="1"/></svg>,
    roles: ['Field Executives', 'Network Support Staff', 'Customer Service Representatives', 'Sales & Marketing Teams', 'Technical Installation Support'],
  },
  {
    tag: 'Facility', label: 'Security & Facility Management', color: '#475569', bg: '#F1F5F9',
    icon: <svg {...S}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    roles: ['Security Guards & Supervisors', 'Facility Management Staff', 'Housekeeping Services', 'Maintenance & Support Teams', 'Corporate Facility Operations'],
  },
  {
    tag: 'Real Estate', label: 'Construction & Real Estate', color: '#B45309', bg: '#FFFBEB',
    icon: <svg {...S}><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>,
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
          <div className="page-hero-inner with-visual">
            <motion.div className="page-hero-content" initial="hidden" animate="visible"
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

            <motion.div className="page-hero-visual" initial="hidden" animate="visible" variants={fadeRight}>
              <motion.div className="indx-hero-mosaic"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                {INDUSTRIES.slice(0, 9).map((ind) => (
                  <div key={ind.label} className="indx-hero-tile"
                    style={{ background: ind.bg, color: ind.color, borderColor: `${ind.color}33` }}
                    title={ind.label}>
                    {ind.icon}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
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
              <motion.div key={ind.label} className="indx-card" variants={staggerItem} whileHover={{ y: -6 }}
                style={{ '--ind-color': ind.color, '--ind-bg': ind.bg }}>
                <span className="indx-accent" />
                <div className="indx-icon">{ind.icon}</div>
                <span className="indx-tag">{ind.tag}</span>
                <h3 className="indx-title">{ind.label}</h3>
                <ul className="indx-roles">
                  {ind.roles.map((r) => (
                    <li key={r} className="indx-role">
                      <span className="indx-bullet" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <button className="indx-link" onClick={() => onNavigate('contact')}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Excellence band */}
      <section className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.div className="indx-excellence" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="indx-excellence-icon"><Award size={34} strokeWidth={1.8} /></div>
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
