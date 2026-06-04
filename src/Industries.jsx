import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const INDUSTRIES = [
  {
    emoji: '💻', label: 'IT & Software', count: '1,240+', color: '#2563EB', bg: '#EFF6FF',
    desc: 'Software developers, data engineers, DevOps, QA, product managers, and more across leading tech companies.',
    roles: ['Software Engineer', 'Data Scientist', 'DevOps Engineer', 'Product Manager', 'QA Analyst'],
    hiring: 'High Demand',
  },
  {
    emoji: '🏥', label: 'Healthcare & Pharma', count: '892+', color: '#059669', bg: '#F0FDF4',
    desc: 'Doctors, nurses, paramedics, pharmacists, and administrative staff for hospitals and clinics.',
    roles: ['Staff Nurse', 'Lab Technician', 'Pharmacist', 'Medical Officer', 'Hospital Admin'],
    hiring: 'High Demand',
  },
  {
    emoji: '🏦', label: 'Banking & BFSI', count: '654+', color: '#D97706', bg: '#FFFBEB',
    desc: 'Banking operations, insurance, financial advisory, and fintech roles across leading institutions.',
    roles: ['Branch Manager', 'Relationship Manager', 'Credit Analyst', 'Insurance Advisor', 'Fintech Dev'],
    hiring: 'Steady',
  },
  {
    emoji: '🏭', label: 'Manufacturing', count: '1,100+', color: '#DC2626', bg: '#FEF2F2',
    desc: `Production, quality control, maintenance, and supply chain roles across Odisha's industrial belt.`,
    roles: ['Production Supervisor', 'QC Inspector', 'Maintenance Technician', 'Warehouse Manager', 'Safety Officer'],
    hiring: 'High Demand',
  },
  {
    emoji: '📚', label: 'Education', count: '430+', color: '#7C3AED', bg: '#F5F3FF',
    desc: 'Teaching, training, administration, and edtech roles from schools to universities and coaching centres.',
    roles: ['School Teacher', 'College Lecturer', 'Academic Coordinator', 'Trainer', 'EdTech Developer'],
    hiring: 'Steady',
  },
  {
    emoji: '⚙️', label: 'Engineering & Core', count: '760+', color: '#EA580C', bg: '#FFF7ED',
    desc: 'Civil, mechanical, electrical, and chemical engineering roles for infrastructure and industrial projects.',
    roles: ['Civil Engineer', 'Mechanical Engineer', 'Site Engineer', 'Project Manager', 'Electrical Supervisor'],
    hiring: 'Growing',
  },
  {
    emoji: '✈️', label: 'International / Overseas', count: '240+', color: '#0891B2', bg: '#ECFEFF',
    desc: 'Overseas placement for skilled workers in Gulf, UK, Canada, Australia and other global markets.',
    roles: ['Skilled Worker', 'Hospitality Staff', 'IT Professional', 'Healthcare Worker', 'Construction Expert'],
    hiring: 'High Demand',
  },
  {
    emoji: '🏨', label: 'Hospitality & Travel', count: '380+', color: '#BE185D', bg: '#FDF2F8',
    desc: 'Hotel management, restaurant, tourism, aviation, and travel agency roles across the region.',
    roles: ['Hotel Manager', 'Front Office Executive', 'Chef', 'Travel Consultant', 'Cabin Crew'],
    hiring: 'Growing',
  },
  {
    emoji: '🛒', label: 'Retail & FMCG', count: '520+', color: '#16A34A', bg: '#F0FDF4',
    desc: 'Sales, store operations, merchandising, and distribution roles for retail and consumer goods companies.',
    roles: ['Sales Executive', 'Store Manager', 'Visual Merchandiser', 'Area Sales Manager', 'Distribution Manager'],
    hiring: 'Steady',
  },
  {
    emoji: '🔋', label: 'Energy & Infrastructure', count: '310+', color: '#B45309', bg: '#FFFBEB',
    desc: 'Power, renewable energy, construction, and infrastructure development roles across Odisha and India.',
    roles: ['Electrical Engineer', 'Solar Technician', 'Project Engineer', 'Safety Officer', 'Procurement Manager'],
    hiring: 'Growing',
  },
  {
    emoji: '📱', label: 'Media & Communications', count: '195+', color: '#6D28D9', bg: '#F5F3FF',
    desc: 'Digital marketing, content creation, journalism, PR, and advertising roles for creative professionals.',
    roles: ['Digital Marketer', 'Content Writer', 'Graphic Designer', 'Social Media Manager', 'PR Executive'],
    hiring: 'Growing',
  },
  {
    emoji: '🚛', label: 'Logistics & Supply Chain', count: '445+', color: '#0369A1', bg: '#F0F9FF',
    desc: 'Warehousing, transportation, procurement, and supply chain management across distribution networks.',
    roles: ['Logistics Coordinator', 'Supply Chain Analyst', 'Procurement Officer', 'Fleet Manager', 'Warehouse Supervisor'],
    hiring: 'Steady',
  },
]

const DEMAND_COLORS = { 'High Demand': '#059669', 'Growing': '#D97706', 'Steady': '#6B7280' }

export default function Industries({ onNavigate }) {
  const [selected, setSelected] = useState(null)
  const active = selected !== null ? INDUSTRIES[selected] : null

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
              12 Industries · 6,160+ Active Positions
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Jobs Across Every<br />
              <span className="h1-gradient">Industry & Sector</span>
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              From IT and healthcare to manufacturing and overseas placements — OWS connects
              talent with opportunity across every major industry in Odisha, India, and beyond.
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
            <h2 className="section-title">Explore All Industries</h2>
            <p className="section-subtitle">Click any industry to see key roles, demand level, and how OWS can help.</p>
          </motion.div>
          <motion.div className="ind-page-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.label} className={`ind-page-card${selected === i ? ' ind-active' : ''}`}
                variants={staggerItem} whileHover={{ y: -6 }}
                onClick={() => setSelected(selected === i ? null : i)}
                style={{ borderColor: selected === i ? ind.color : undefined }}>
                <div className="ind-page-icon" style={{ background: ind.bg, color: ind.color }}>{ind.emoji}</div>
                <div className="ind-page-label">{ind.label}</div>
                <div className="ind-page-count" style={{ color: ind.color }}>{ind.count} jobs</div>
                <div className="ind-page-demand" style={{ color: DEMAND_COLORS[ind.hiring] }}>
                  <span className="ind-demand-dot" style={{ background: DEMAND_COLORS[ind.hiring] }} />
                  {ind.hiring}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expanded detail panel */}
          {active && (
            <motion.div className="ind-detail-panel" key={active.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="ind-detail-header">
                <span style={{ fontSize: '2rem' }}>{active.emoji}</span>
                <div>
                  <h3 className="ind-detail-title">{active.label}</h3>
                  <p className="ind-detail-desc">{active.desc}</p>
                </div>
                <button className="ind-detail-close" onClick={() => setSelected(null)}>✕</button>
              </div>
              <div className="ind-detail-roles">
                <div className="ind-detail-roles-label">Key Roles We Hire For:</div>
                <div className="ind-detail-roles-list">
                  {active.roles.map((r) => (
                    <span key={r} className="ind-detail-role-chip" style={{ background: active.bg, color: active.color }}>{r}</span>
                  ))}
                </div>
              </div>
              <motion.button className="btn btn-primary" style={{ marginTop: 16 }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>
                Apply for {active.label} Roles →
              </motion.button>
            </motion.div>
          )}
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
