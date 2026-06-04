import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-80px' }

const EVENTS = [
  { id: 1, cat: 'Job Fair', emoji: '🎪', title: 'Mega Job Fair – Bhubaneswar 2024', date: 'Mar 15, 2024', location: 'IDCO Exhibition Ground, Bhubaneswar', attendees: '2,400+', companies: '85+', color: '#2563EB', bg: '#EFF6FF', highlight: true },
  { id: 2, cat: 'Campus Drive', emoji: '🎓', title: 'Campus Recruitment – KIIT University', date: 'Feb 10, 2024', location: 'KIIT University, Bhubaneswar', attendees: '600+', companies: '22+', color: '#059669', bg: '#F0FDF4', highlight: false },
  { id: 3, cat: 'Training', emoji: '📈', title: 'Skill Development Workshop – IT Sector', date: 'Jan 22, 2024', location: 'OWS Training Centre, Bhubaneswar', attendees: '180+', companies: '—', color: '#7C3AED', bg: '#F5F3FF', highlight: false },
  { id: 4, cat: 'Job Fair', emoji: '🤝', title: 'Healthcare Hiring Expo 2024', date: 'Jan 08, 2024', location: 'Capital Hospital Campus, Bhubaneswar', attendees: '900+', companies: '34+', color: '#DC2626', bg: '#FEF2F2', highlight: false },
  { id: 5, cat: 'Campus Drive', emoji: '🏫', title: 'Campus Drive – Silicon Institute', date: 'Dec 12, 2023', location: 'Silicon Institute of Technology, BBSR', attendees: '450+', companies: '18+', color: '#D97706', bg: '#FFFBEB', highlight: false },
  { id: 6, cat: 'Training', emoji: '💼', title: 'Interview & Resume Masterclass', date: 'Nov 25, 2023', location: 'Online + Bhubaneswar Centre', attendees: '320+', companies: '—', color: '#0891B2', bg: '#ECFEFF', highlight: false },
  { id: 7, cat: 'Job Fair', emoji: '🏭', title: 'Manufacturing & Engineering Job Fair', date: 'Oct 20, 2023', location: 'Kalinga Stadium, Bhubaneswar', attendees: '1,800+', companies: '62+', color: '#EA580C', bg: '#FFF7ED', highlight: true },
  { id: 8, cat: 'Award', emoji: '🏆', title: 'Best Recruitment Agency Award 2023', date: 'Sep 14, 2023', location: 'Mayfair Convention Centre, Bhubaneswar', attendees: '—', companies: '—', color: '#D97706', bg: '#FFFBEB', highlight: false },
  { id: 9, cat: 'Training', emoji: '🌐', title: 'Study Abroad Seminar – Canada & UK', date: 'Aug 05, 2023', location: 'Hotel Swosti Premium, Bhubaneswar', attendees: '250+', companies: '12 Universities', color: '#6D28D9', bg: '#F5F3FF', highlight: false },
  { id: 10, cat: 'Campus Drive', emoji: '🎓', title: 'Mass Campus Hiring – CET Odisha', date: 'Jul 18, 2023', location: 'CET Bhubaneswar', attendees: '800+', companies: '30+', color: '#16A34A', bg: '#F0FDF4', highlight: false },
  { id: 11, cat: 'Job Fair', emoji: '💻', title: 'IT & Startup Job Expo 2023', date: 'Jun 10, 2023', location: 'Infocity, Bhubaneswar', attendees: '1,200+', companies: '48+', color: '#2563EB', bg: '#EFF6FF', highlight: false },
  { id: 12, cat: 'Award', emoji: '🌟', title: 'ISO 9001:2015 Certification Ceremony', date: 'May 01, 2023', location: 'OWS Head Office, Bhubaneswar', attendees: '—', companies: '—', color: '#059669', bg: '#F0FDF4', highlight: false },
]

const CATS = ['All', 'Job Fair', 'Campus Drive', 'Training', 'Award']

export default function Gallery({ onNavigate }) {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? EVENTS : EVENTS.filter((e) => e.cat === filter)

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
              <span>Gallery</span>
            </motion.div>
            <motion.div className="hero-badge" variants={fadeUp} style={{ marginBottom: 20 }}>
              <span className="badge-dot" />
              Events · Achievements · Milestones
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Our Events &<br />
              <span className="h1-gradient">Achievements Gallery</span>
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              A glimpse into the job fairs, campus drives, training programs, and milestones that
              define Odisha Workforce Solutions' journey of impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <div className="page-stats-strip">
        <div className="container">
          <div className="page-stats-row">
            {[['50+','Events Conducted'],['25,000+','Total Attendees'],['400+','Companies Participated'],['5000+','Candidates Placed']].map(([v,l]) => (
              <div key={l} className="page-strip-stat">
                <span className="page-strip-val">{v}</span>
                <span className="page-strip-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Photo Gallery</div>
            <h2 className="section-title">Events & Highlights</h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div className="gallery-filters" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            {CATS.map((c) => (
              <button key={c} className={`gallery-filter-btn${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div className="gallery-grid" key={filter}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {filtered.map((ev, i) => (
                <motion.div key={ev.id} className={`gallery-card${ev.highlight ? ' gallery-card-highlight' : ''}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,.12)' }}>
                  <div className="gallery-card-visual" style={{ background: `linear-gradient(135deg, ${ev.bg} 0%, ${ev.color}18 100%)` }}>
                    <span className="gallery-card-emoji">{ev.emoji}</span>
                    {ev.highlight && <span className="gallery-highlight-badge">⭐ Featured</span>}
                    <span className="gallery-cat-badge" style={{ background: ev.bg, color: ev.color }}>{ev.cat}</span>
                  </div>
                  <div className="gallery-card-body">
                    <h4 className="gallery-card-title">{ev.title}</h4>
                    <div className="gallery-card-meta">
                      <span className="gallery-meta-item">📅 {ev.date}</span>
                      <span className="gallery-meta-item">📍 {ev.location}</span>
                    </div>
                    {(ev.attendees !== '—' || ev.companies !== '—') && (
                      <div className="gallery-card-stats">
                        {ev.attendees !== '—' && <div className="gallery-stat"><span className="gallery-stat-val" style={{ color: ev.color }}>{ev.attendees}</span><span className="gallery-stat-lbl">Attendees</span></div>}
                        {ev.companies !== '—' && <div className="gallery-stat"><span className="gallery-stat-val" style={{ color: ev.color }}>{ev.companies}</span><span className="gallery-stat-lbl">{ev.cat === 'Training' ? 'Enrolled' : 'Companies'}</span></div>}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-banner">
        <div className="about-cta-bg" />
        <div className="container">
          <motion.div className="about-cta-inner" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            <motion.h2 className="about-cta-title" variants={fadeUp}>Want to Be Part of Our Next Event?</motion.h2>
            <motion.p className="about-cta-sub" variants={fadeUp}>Register as a job seeker or employer for our upcoming job fair in Bhubaneswar.</motion.p>
            <motion.div className="about-cta-actions" variants={fadeUp}>
              <motion.button className="btn btn-white" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}>Register Now</motion.button>
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
