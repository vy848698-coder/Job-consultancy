import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }
const VP = { once: true, margin: '-60px' }

// Load all images from the industries folder and order them 1 → 12
const modules = import.meta.glob('./assets/industries/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
const IMAGES = Object.entries(modules)
  .sort((a, b) => {
    const na = parseInt(a[0].match(/(\d+)\.\w+$/)?.[1] ?? '0', 10)
    const nb = parseInt(b[0].match(/(\d+)\.\w+$/)?.[1] ?? '0', 10)
    return na - nb
  })
  .map(([, src]) => src)

export default function Gallery({ onNavigate }) {
  const [active, setActive] = useState(null)

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
              Moments · Events · Drives
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp}>
              Our <span className="h1-gradient">Gallery</span>
            </motion.h1>
            <motion.p className="page-hero-sub" variants={fadeUp}>
              A glimpse into our journey — job fairs, campus recruitment drives, training sessions,
              and the people, partnerships, and milestones behind Odisha Workforce Solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image grid */}
      <section className="section-pad">
        <div className="container">
          <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
            <div className="section-tag">Gallery</div>
            <h2 className="section-title">Captured Moments</h2>
            <p className="section-subtitle">
              Snapshots from our recruitment drives, events, and everyday work empowering people across Odisha and beyond.
            </p>
          </motion.div>
          <motion.div className="gphoto-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
            {IMAGES.map((src, i) => (
              <motion.button
                key={i}
                className="gphoto-item"
                variants={staggerItem}
                whileHover={{ y: -4 }}
                onClick={() => setActive(i)}
              >
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="gphoto-lightbox"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActive(null)}
          >
            <button className="gphoto-close" onClick={() => setActive(null)} aria-label="Close">✕</button>
            <button
              className="gphoto-nav gphoto-prev"
              onClick={(e) => { e.stopPropagation(); setActive((active - 1 + IMAGES.length) % IMAGES.length) }}
              aria-label="Previous"
            >‹</button>
            <motion.img
              key={active}
              src={IMAGES[active]}
              alt={`Gallery ${active + 1}`}
              className="gphoto-lightbox-img"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="gphoto-nav gphoto-next"
              onClick={(e) => { e.stopPropagation(); setActive((active + 1) % IMAGES.length) }}
              aria-label="Next"
            >›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
