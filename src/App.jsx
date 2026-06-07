import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView as useFramerInView } from 'framer-motion'
import {
  Users, GraduationCap, TrendingUp, Briefcase, UserRound, Building2, School, Landmark,
  HeartHandshake, Target, Globe, ShieldCheck, Award, BadgeCheck, Rocket, MapPin, Phone, Mail,
} from 'lucide-react'
import owsLogo from './assets/t.png'
import owsBadge from './assets/logo-badge.png'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import Industries from './Industries'
import Gallery from './Gallery'
import ContactUs from './ContactUs'
import Franchise from './Franchise'
import './App.css'

/* ── Framer Motion variants ── */
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

/* ── Animated counter ── */
function Counter({ end, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useFramerInView(ref, { once: true, margin: '-60px' })
  useEffect(() => {
    if (!inView) return
    let t0 = null
    const tick = (ts) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / 2200, 1)
      setVal(Math.floor((1 - (1 - p) ** 3) * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, end])
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

/* ══════════════════════════════════════════
   THEMES
══════════════════════════════════════════ */
const THEMES = [
  {
    id: 'aurora',
    name: 'Aurora Emerald',
    feel: 'Premium · Futuristic SaaS',
    dark: false,
    preview: ['#10B981', '#14B8A6', '#F4FBF8'],
    vars: {
      '--primary': '#10B981', '--primary-dark': '#059669', '--primary-mid': '#34D399',
      '--accent': '#14B8A6', '--accent2': '#0EA5E9',
      '--dark': '#0F172A', '--dark2': '#1E293B', '--mid': '#334155',
      '--gray': '#5B6B7E', '--gray2': '#8895A7', '--gray3': '#CBD5E1',
      '--light': '#F4FBF8', '--light2': '#E3F8EF', '--white': '#FFFFFF', '--border': '#E6EDEB',
    },
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    feel: 'Professional · Corporate',
    dark: false,
    preview: ['#2563EB', '#38BDF8', '#F8FAFC'],
    vars: {
      '--primary': '#2563EB', '--primary-dark': '#1D4ED8', '--primary-mid': '#3B82F6',
      '--accent': '#38BDF8', '--accent2': '#7C3AED',
      '--dark': '#0F172A', '--dark2': '#1E293B', '--mid': '#334155',
      '--gray': '#5A6A88', '--gray2': '#8895A7', '--gray3': '#CBD5E1',
      '--light': '#F8FAFC', '--light2': '#EFF6FF', '--white': '#FFFFFF', '--border': '#E2E8F0',
    },
  },
  {
    id: 'modern-teal',
    name: 'Modern Teal',
    feel: 'Modern SaaS · Clean',
    dark: false,
    preview: ['#14B8A6', '#2DD4BF', '#F0FDFA'],
    vars: {
      '--primary': '#14B8A6', '--primary-dark': '#0D9488', '--primary-mid': '#2DD4BF',
      '--accent': '#2DD4BF', '--accent2': '#0891B2',
      '--dark': '#0F172A', '--dark2': '#1E293B', '--mid': '#134E4A',
      '--gray': '#5A6A88', '--gray2': '#8895A7', '--gray3': '#CBD5E1',
      '--light': '#F0FDFA', '--light2': '#CCFBF1', '--white': '#FFFFFF', '--border': '#CCFBF1',
    },
  },
  {
    id: 'premium-purple',
    name: 'Premium Purple',
    feel: 'Luxury · High-end Tech',
    dark: false,
    preview: ['#7C3AED', '#A78BFA', '#F5F3FF'],
    vars: {
      '--primary': '#7C3AED', '--primary-dark': '#6D28D9', '--primary-mid': '#8B5CF6',
      '--accent': '#A78BFA', '--accent2': '#EC4899',
      '--dark': '#1E1B4B', '--dark2': '#312E81', '--mid': '#4C1D95',
      '--gray': '#6B7280', '--gray2': '#9CA3AF', '--gray3': '#D1D5DB',
      '--light': '#F5F3FF', '--light2': '#EDE9FE', '--white': '#FFFFFF', '--border': '#DDD6FE',
    },
  },
  {
    id: 'emerald-green',
    name: 'Emerald Green',
    feel: 'Growth · Trust · Business',
    dark: false,
    preview: ['#10B981', '#34D399', '#ECFDF5'],
    vars: {
      '--primary': '#10B981', '--primary-dark': '#059669', '--primary-mid': '#34D399',
      '--accent': '#34D399', '--accent2': '#0891B2',
      '--dark': '#064E3B', '--dark2': '#065F46', '--mid': '#047857',
      '--gray': '#5A6A88', '--gray2': '#8895A7', '--gray3': '#CBD5E1',
      '--light': '#ECFDF5', '--light2': '#D1FAE5', '--white': '#FFFFFF', '--border': '#A7F3D0',
    },
  },
  {
    id: 'executive-gold',
    name: 'Executive Gold',
    feel: 'Luxury Corporate · Executive',
    dark: false,
    preview: ['#D4AF37', '#FBBF24', '#FFFBEB'],
    vars: {
      '--primary': '#D4AF37', '--primary-dark': '#B8952B', '--primary-mid': '#FBBF24',
      '--accent': '#FBBF24', '--accent2': '#F59E0B',
      '--dark': '#111827', '--dark2': '#1F2937', '--mid': '#374151',
      '--gray': '#5A6A88', '--gray2': '#8895A7', '--gray3': '#CBD5E1',
      '--light': '#FFFBEB', '--light2': '#FEF3C7', '--white': '#FFFFFF', '--border': '#FDE68A',
    },
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode',
    feel: 'Modern SaaS Dashboard',
    dark: true,
    preview: ['#22D3EE', '#1E293B', '#0F172A'],
    vars: {
      '--primary': '#22D3EE', '--primary-dark': '#06B6D4', '--primary-mid': '#67E8F9',
      '--accent': '#06B6D4', '--accent2': '#8B5CF6',
      '--dark': '#F8FAFC', '--dark2': '#E2E8F0', '--mid': '#CBD5E1',
      '--gray': '#94A3B8', '--gray2': '#64748B', '--gray3': '#475569',
      '--light': '#111827', '--light2': '#1E293B', '--white': '#0F172A', '--border': '#1E293B',
    },
  },
]

function applyThemeVars(theme) {
  const root = document.documentElement
  document.body.classList.add('theme-transitioning')
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v))
  if (theme.dark) document.body.classList.add('theme-dark')
  else document.body.classList.remove('theme-dark')
  setTimeout(() => document.body.classList.remove('theme-transitioning'), 360)
  localStorage.setItem('ows-theme', theme.id)
}

/* ══════════════════════════════════════════
   FONT PAIRINGS
══════════════════════════════════════════ */
const FONTS = [
  { id: 'sora', name: 'Sora', feel: 'Modern · Default', display: "'Sora', sans-serif", body: "'Inter', sans-serif" },
  { id: 'grotesk', name: 'Space Grotesk', feel: 'Futuristic · Techy', display: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  { id: 'jakarta', name: 'Jakarta', feel: 'Clean · Geometric', display: "'Plus Jakarta Sans', sans-serif", body: "'Plus Jakarta Sans', sans-serif" },
  { id: 'poppins', name: 'Poppins', feel: 'Friendly · Rounded', display: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  { id: 'outfit', name: 'Outfit', feel: 'Minimal · Sleek', display: "'Outfit', sans-serif", body: "'Outfit', sans-serif" },
  { id: 'playfair', name: 'Playfair', feel: 'Luxury · Editorial', display: "'Playfair Display', serif", body: "'Inter', sans-serif" },
]

function applyFont(font) {
  const root = document.documentElement
  document.body.classList.add('theme-transitioning')
  root.style.setProperty('--font-display', `${font.display}`)
  root.style.setProperty('--font-body', `${font.body}`)
  setTimeout(() => document.body.classList.remove('theme-transitioning'), 360)
  localStorage.setItem('ows-font', font.id)
}

/* ── Data ── */
const NAV_LINKS = ['Home', 'About Us', 'Our Services', 'Industries', 'Gallery', 'Contact Us', 'Franchise']

const TRUSTED_COMPANIES = [
  'Job Seekers', 'Students', 'Employers', 'Educational Institutions', 'Corporate Organizations',
]

const OVERVIEW_METRICS = [
  { label: 'Open Positions', value: '248', trend: '+12%', color: '#3B82F6' },
  { label: 'Registered', value: '5,430', trend: '+8%', color: '#10B981' },
  { label: 'Interviews', value: '312', trend: '+24%', color: '#8B5CF6' },
  { label: 'Placed', value: '86', trend: '+18%', color: '#F59E0B' },
]
const PIPELINE = [
  { label: 'Applied', value: 5430, pct: 100, color: '#3B82F6' },
  { label: 'Screening', value: 2140, pct: 39, color: '#8B5CF6' },
  { label: 'Interview', value: 312, pct: 6, color: '#10B981' },
  { label: 'Selected', value: 86, pct: 2, color: '#F59E0B' },
]
const INDUSTRY_BARS = [
  { name: 'IT & Technology', pct: 68, color: '#3B82F6' },
  { name: 'Manufacturing', pct: 52, color: '#10B981' },
  { name: 'Healthcare', pct: 43, color: '#8B5CF6' },
  { name: 'BFSI', pct: 38, color: '#F59E0B' },
]

const JOB_CATEGORIES = [
  { emoji: '💻', label: 'IT & Software', count: '1,240+', color: '#2563EB', bg: '#EFF6FF' },
  { emoji: '🏥', label: 'Healthcare', count: '892+', color: '#059669', bg: '#F0FDF4' },
  { emoji: '🏦', label: 'Banking & BFSI', count: '654+', color: '#D97706', bg: '#FFFBEB' },
  { emoji: '🏭', label: 'Manufacturing', count: '1,100+', color: '#DC2626', bg: '#FEF2F2' },
  { emoji: '📚', label: 'Education', count: '430+', color: '#7C3AED', bg: '#F5F3FF' },
  { emoji: '⚙️', label: 'Engineering', count: '760+', color: '#EA580C', bg: '#FFF7ED' },
  { emoji: '✈️', label: 'International', count: '240+', color: '#0891B2', bg: '#ECFEFF' },
  { emoji: '🏨', label: 'Hospitality', count: '380+', color: '#BE185D', bg: '#FDF2F8' },
]

const FEATURED_JOBS = [
  { title: 'Software Developer', sector: 'IT & Software', location: 'Odisha & India', type: 'Full Time', initials: 'IT', color: '#2563EB' },
  { title: 'HR Manager', sector: 'HR & Admin', location: 'Odisha', type: 'Full Time', initials: 'HR', color: '#059669' },
  { title: 'Branch Manager', sector: 'Banking & BFSI', location: 'Odisha', type: 'Full Time', initials: 'BF', color: '#D97706' },
  { title: 'Registered Nurse', sector: 'Healthcare', location: 'Odisha & India', type: 'Full Time', initials: 'HC', color: '#DC2626' },
  { title: 'QA / Software Tester', sector: 'IT & Software', location: 'Remote / India', type: 'Hybrid', initials: 'QA', color: '#7C3AED' },
  { title: 'Sales Executive', sector: 'Retail & Sales', location: 'Odisha', type: 'Full Time', initials: 'SL', color: '#BE185D' },
]

const SERVICES_SEEKERS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
    title: 'Career Counselling & Placement',
    desc: 'One-on-one guidance with industry experts to map your ideal career path and connect you with the right opportunities.',
    tag: 'Career',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Skill Development & Training',
    desc: 'Industry-oriented training programs designed to make you job-ready with practical, market-relevant skills.',
    tag: 'Training',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    title: 'Education Consultancy',
    desc: 'Expert guidance for higher education admissions in India and abroad — from college selection to visa support.',
    tag: 'Education',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Resume & Interview Prep',
    desc: 'Professional resume writing, LinkedIn optimisation, and mock interview coaching to help you stand out.',
    tag: 'Coaching',
  },
]

const SERVICES_EMPLOYERS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Recruitment & Staffing Solutions',
    desc: 'End-to-end permanent and contract hiring across industries — from sourcing and screening to onboarding.',
    tag: 'Recruitment',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"/></svg>,
    title: 'HR Consulting & Workforce Planning',
    desc: 'Strategic HR solutions and workforce planning to align your talent strategy with your business growth goals.',
    tag: 'HR Strategy',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Campus Recruitment Drives',
    desc: 'Organized campus drives at top colleges to connect you with bright, job-ready fresh graduates.',
    tag: 'Campus',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    title: 'Mega Job Fairs & Bulk Hiring',
    desc: 'Large-scale job fairs and bulk hiring events for companies looking to scale their teams quickly.',
    tag: 'Bulk Hiring',
  },
]

const PROCESS_STEPS = [
  { n: '01', title: 'Requirement Analysis', desc: 'Understanding your needs and role expectations in detail.' },
  { n: '02', title: 'Talent Sourcing', desc: 'Tapping our extensive network and active sourcing channels.' },
  { n: '03', title: 'Screening & Assessment', desc: 'Rigorous skills assessment and background verification.' },
  { n: '04', title: 'Interview Coordination', desc: 'Coordinating interviews with detailed evaluation reports.' },
  { n: '05', title: 'Offer & Onboarding', desc: 'Smooth onboarding and dedicated post-placement support.' },
]

const MOCK_CANDIDATES = [
  { initials: 'IT', name: 'Software Developer', role: 'IT & Software', stage: 'Interview', score: 92, color: '#3B82F6' },
  { initials: 'MG', name: 'Project Manager', role: 'Management', stage: 'Assessment', score: 87, color: '#8B5CF6' },
  { initials: 'BF', name: 'Accountant', role: 'Finance & BFSI', stage: 'Screening', score: 81, color: '#10B981' },
  { initials: 'HC', name: 'Staff Nurse', role: 'Healthcare', stage: 'Interview', score: 95, color: '#F59E0B' },
]

const STUDY_DESTINATIONS = [
  { flag: '🇬🇧', country: 'United Kingdom', unis: '150+ Universities', students: '2,400+', color: '#2563EB', top: ['Oxford', 'Imperial', 'UCL', 'Edinburgh'] },
  { flag: '🇨🇦', country: 'Canada', unis: '120+ Universities', students: '3,100+', color: '#DC2626', top: ['UofT', 'UBC', 'McGill', 'Waterloo'] },
  { flag: '🇦🇺', country: 'Australia', unis: '100+ Universities', students: '1,800+', color: '#059669', top: ['ANU', 'Melbourne', 'Sydney', 'Monash'] },
  { flag: '🇺🇸', country: 'United States', unis: '200+ Universities', students: '1,200+', color: '#7C3AED', top: ['MIT', 'Stanford', 'Harvard', 'Carnegie'] },
]

const WHY_POINTS = [
  'Customized and scalable workforce solutions',
  'Strong local expertise with a global outlook',
  'Wide network of employers, institutions, and partners',
  'Transparent, ethical, and compliance-driven processes',
  'Proven track record of successful placements',
  'ISO 9001:2015 Certified, MSME-registered & GST-compliant',
]

const FRANCHISE_FEATURES = [
  { icon: '💰', title: 'Low Investment, High Returns', desc: 'Start with minimal capital and leverage our proven business model for consistent monthly revenue.' },
  { icon: '📋', title: 'Complete Training & Support', desc: 'Full operational training, marketing material, and dedicated support from our core team.' },
  { icon: '🌐', title: 'Exclusive Territory Rights', desc: 'Operate with exclusive rights in your district with full brand protection.' },
  { icon: '📈', title: 'Proven Business Model', desc: 'Join 15+ successful partners already earning consistent monthly revenue across India.' },
]

const APPROACH = [
  {
    Icon: HeartHandshake, title: 'People-Centric',
    desc: 'Every solution is tailored around the individuals and organizations we serve, creating sustainable career pathways.',
    color: '#2563EB',
  },
  {
    Icon: Target, title: 'Result-Oriented',
    desc: 'We focus on measurable outcomes and long-term success — not just placements, but lasting impact.',
    color: '#7C3AED',
  },
  {
    Icon: Globe, title: 'Local Expertise, Global Outlook',
    desc: 'Strong roots in Odisha with a network and reach that extends across India and internationally.',
    color: '#059669',
  },
  {
    Icon: ShieldCheck, title: 'Transparent & Ethical',
    desc: 'Compliance-driven, ISO 9001:2015 certified processes built on trust and integrity.',
    color: '#D97706',
  },
]

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function Navbar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const PAGE_MAP = {
    'Home': 'home', 'About Us': 'about', 'Our Services': 'services',
    'Industries': 'industries', 'Gallery': 'gallery',
    'Contact Us': 'contact', 'Franchise': 'franchise',
  }

  function handleNavClick(e, label) {
    e.preventDefault()
    const key = PAGE_MAP[label] || 'home'
    onNavigate(key)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleApply() {
    setMenuOpen(false)
    onNavigate('contact')
    setTimeout(() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }), 200)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-logo" style={{ cursor: 'pointer' }} onClick={() => { onNavigate('home'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src={owsBadge} alt="Odisha Workforce Solutions" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="nav-logo-main">Odisha Workforce</span>
            <span className="nav-logo-sub">ISO 9001:2015 Certified</span>
          </div>
        </div>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href="#"
                className={PAGE_MAP[l] === currentPage ? 'nav-link-active' : ''}
                onClick={(e) => handleNavClick(e, l)}
              >{l}</a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <motion.button className="btn-apply" whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }} onClick={handleApply}>
            Apply Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </motion.button>
        </div>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        ><span /><span /><span /></button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="m-backdrop"
              className="nav-mobile-backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="m-panel"
              className="nav-mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="nav-mobile-links">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.04 }}
                  >
                    <a
                      href="#"
                      className={PAGE_MAP[l] === currentPage ? 'nav-mobile-active' : ''}
                      onClick={(e) => handleNavClick(e, l)}
                    >
                      {l}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="btn btn-primary nav-mobile-cta"
                whileTap={{ scale: 0.97 }}
                onClick={handleApply}
              >
                Apply Now
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

/* ══════════════════════════════════════════
   OVERVIEW CARD
══════════════════════════════════════════ */
function HeroAnimation() {
  const services = [
    { Icon: Users, label: 'Recruitment' },
    { Icon: GraduationCap, label: 'Education' },
    { Icon: TrendingUp, label: 'Skill Dev' },
    { Icon: Briefcase, label: 'HR Services' },
  ]
  return (
    <div className="hero-anim" style={{ position: 'relative', width: '100%', maxWidth: '420px', aspectRatio: '1 / 1', margin: '0 auto' }}>
      {/* pulsing glow */}
      <motion.div
        style={{ position: 'absolute', inset: '12%', borderRadius: '50%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', filter: 'blur(24px)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* concentric slowly-rotating rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', inset: `${6 + i * 13}%`, border: '1.5px dashed var(--primary)', borderRadius: '50%', opacity: 0.28 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 55 - i * 12, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {/* orbiting service chips */}
      <motion.div
        style={{ position: 'absolute', inset: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      >
        {services.map((s, i) => {
          const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2
          const x = 50 + 41 * Math.cos(angle)
          const y = 50 + 41 * Math.sin(angle)
          return (
            <motion.div
              key={s.label}
              style={{
                position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)',
                display: 'flex', alignItems: 'center', gap: '7px', padding: '9px 14px', borderRadius: '999px',
                background: 'var(--white)', boxShadow: '0 12px 28px -12px rgba(15,23,42,.3)', border: '1px solid var(--border)',
                whiteSpace: 'nowrap', fontSize: '.82rem', fontWeight: 600, color: 'var(--dark)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            >
              <s.Icon size={17} strokeWidth={2} color="var(--primary)" />{s.label}
            </motion.div>
          )
        })}
      </motion.div>
      {/* center badge */}
      <motion.div
        style={{
          position: 'absolute', top: '50%', left: '50%', width: '42%', height: '42%',
          transform: 'translate(-50%, -50%)', borderRadius: '50%', background: 'var(--white)',
          boxShadow: '0 26px 60px -18px rgba(15,23,42,.38)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '13%',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={owsBadge} alt="Odisha Workforce Solutions" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </motion.div>
    </div>
  )
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function Hero({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="container">
        <div className="hero-inner">
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}>
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="badge-dot" />
              ISO 9001:2015 · MSME Registered · GST Compliant
            </motion.div>
            <motion.h1 className="hero-heading" variants={fadeUp}>
              Hire Top Talent.
              <br />
              <span className="h1-gradient">Build Stronger</span>
              <br />
              Workforces.
            </motion.h1>
            <motion.p className="hero-sub" variants={fadeUp}>
              Odisha's premier recruitment &amp; HR solutions company — bridging talent and opportunity across Bhubaneswar, Odisha, and beyond.
            </motion.p>
            <motion.div className="hero-pills" variants={fadeUp}>
              {['Recruitment', 'Training', 'Job Fair', 'Campus Drive', 'Study Abroad'].map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </motion.div>
            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('services')}>
                Find Opportunities
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>
              <motion.button className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('contact')}>
                Hire Talent
              </motion.button>
            </motion.div>
            <motion.div className="hero-trust" variants={fadeUp}>
              <div className="trust-avatars">
                {[['RP','#003B8E'],['SM','#0056D2'],['AK','#10B981'],['PD','#7B2FBE']].map(([i, c]) => (
                  <div key={i} className="trust-av" style={{ background: c }}>{i}</div>
                ))}
              </div>
              <span>Trusted by job seekers &amp; employers across India</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 52, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="floating-card top-card" animate={{ y: [0, -9, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="fc-icon"><BadgeCheck size={20} strokeWidth={2} color="var(--primary)" /></span>
              <div>
                <div className="fc-title">Trusted Employer Network</div>
                <div className="fc-sub">Across Odisha &amp; India</div>
              </div>
            </motion.div>
            <HeroAnimation />
            <motion.div className="floating-card bottom-card" animate={{ y: [0, -9, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}>
              <span className="fc-icon"><Rocket size={20} strokeWidth={2} color="var(--primary)" /></span>
              <div>
                <div className="fc-title">Pan India &amp; International</div>
                <div className="fc-sub">Placement network</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   TRUSTED BY
══════════════════════════════════════════ */
const LOGO_COLORS = ['#10B981', '#0EA5E9', '#8B5CF6', '#F59E0B', '#EC4899', '#14B8A6', '#6366F1', '#EF4444', '#0891B2', '#059669']

function TrustedBy() {
  const items = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES]
  return (
    <div className="trusted-section">
      <div className="trusted-label-wrap">
        <span className="trusted-line" />
        <p className="trusted-label">A trusted partner for job seekers, students, employers &amp; institutions across India and beyond</p>
        <span className="trusted-line" />
      </div>
      <div className="trusted-marquee-wrap">
        <div className="trusted-marquee">
          {items.map((name, i) => {
            const c = LOGO_COLORS[i % TRUSTED_COMPANIES.length]
            return (
              <div key={i} className="trusted-logo">
                <div className="trusted-logo-icon" style={{ background: `linear-gradient(135deg, ${c}, ${c}cc)`, boxShadow: `0 5px 12px -4px ${c}` }}>{name.charAt(0)}</div>
                <span>{name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   STATS
══════════════════════════════════════════ */
function AboutIntro() {
  const pillars = [
    { Icon: Users,         label: 'Recruitment & Staffing', color: '#2563EB' },
    { Icon: GraduationCap, label: 'Education Consultancy',   color: '#059669' },
    { Icon: TrendingUp,    label: 'Skill Development',       color: '#D97706' },
    { Icon: Briefcase,     label: 'HR & Workforce Services', color: '#7C3AED' },
  ]
  return (
    <section className="stats-section">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">Welcome to OWS</div>
          <h2 className="section-title">Empowering People.<br />Enabling Progress.</h2>
          <p className="section-subtitle">
            At Odisha Workforce Solutions (OWS), we specialize in bridging the gap between talent and opportunity — empowering individuals and enabling organizations to thrive in today's dynamic and competitive world.
          </p>
          <p className="section-subtitle" style={{ marginTop: '14px' }}>
            Headquartered in Bhubaneswar, we are an ISO 9001:2015 Certified, MSME-registered, and GST-compliant organization offering end-to-end solutions in:
          </p>
        </motion.div>
        <motion.div className="stats-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {pillars.map((s) => (
            <motion.div key={s.label} className="stat-card-premium" variants={staggerItem} whileHover={{ y: -6 }}>
              <div className="stat-icon-wrap" style={{ background: `${s.color}18`, color: s.color }}><s.Icon size={26} strokeWidth={1.9} /></div>
              <div className="stat-label-big">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p className="lead-note" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          We proudly serve clients, institutions, job seekers, and students across India and internationally.
        </motion.p>
      </div>
    </section>
  )
}

function WhoWeAre() {
  const partners = [
    { Icon: UserRound,     label: 'Job Seekers' },
    { Icon: GraduationCap, label: 'Students' },
    { Icon: Building2,     label: 'Employers' },
    { Icon: School,        label: 'Educational Institutions' },
    { Icon: Landmark,      label: 'Corporate Organizations' },
  ]
  return (
    <section className="categories-section">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title">A Trusted Partner<br />for Your Growth</h2>
          <p className="section-subtitle">
            Our mission is to create sustainable career pathways and support workforce growth through innovative and people-focused solutions. We work as a trusted partner for:
          </p>
        </motion.div>
        <motion.div className="who-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {partners.map((p) => (
            <motion.div key={p.label} className="who-card" variants={staggerItem}>
              <div className="who-icon"><p.Icon size={28} strokeWidth={1.8} /></div>
              <div className="who-label">{p.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p className="lead-note" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          Our approach is <strong>people-centric, result-oriented, and impact-driven</strong>, ensuring every solution is tailored to achieve long-term success and measurable results.
        </motion.p>
      </div>
    </section>
  )
}

function BasedInOdisha() {
  const points = [
    'Searching for the right career opportunity',
    'Planning to study abroad',
    'Hiring skilled professionals',
    'Building a future-ready workforce',
  ]
  return (
    <section className="why-section">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">Based in Odisha</div>
          <h2 className="section-title">Based in Odisha.<br />Serving India &amp; Beyond.</h2>
          <p className="section-subtitle">Whether you are:</p>
        </motion.div>
        <motion.ul
          className="why-list"
          style={{ maxWidth: '560px', margin: '0 auto' }}
          variants={stagger} initial="hidden" whileInView="visible" viewport={VP}
        >
          {points.map((item) => (
            <motion.li key={item} className="why-item" variants={staggerItem}>
              <div className="why-check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          style={{ textAlign: 'center', maxWidth: '640px', margin: '30px auto 0', color: 'var(--dark)', fontWeight: 600, fontSize: '1.08rem' }}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}
        >
          Odisha Workforce Solutions (OWS) is your trusted partner every step of the way.
        </motion.p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   CATEGORIES
══════════════════════════════════════════ */
function Categories({ onNavigate }) {
  return (
    <section className="categories-section">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">Browse By Industry</div>
          <h2 className="section-title">Explore Jobs Across<br />Every Sector</h2>
          <p className="section-subtitle">From IT and healthcare to manufacturing and international placements — we cover every sector.</p>
        </motion.div>
        <motion.div className="categories-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {JOB_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.label}
              className="category-card"
              style={{ '--c': cat.color }}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              onClick={() => onNavigate('industries')}
            >
              <div className="cat-icon">{cat.emoji}</div>
              <div className="cat-body">
                <div className="cat-label">{cat.label}</div>
                <div className="cat-count">View opportunities</div>
              </div>
              <span className="cat-arrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   SERVICES
══════════════════════════════════════════ */
function Services({ onNavigate }) {
  const [tab, setTab] = useState('seekers')
  const cards = tab === 'seekers' ? SERVICES_SEEKERS : SERVICES_EMPLOYERS
  return (
    <section className="services-section" id="our-services">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">Comprehensive Solutions<br />Tailored to Your Needs</h2>
          <p className="section-subtitle">Whether you are a job seeker, student, employer, or institution — we have the right solution for you.</p>
          <div className="tab-switcher">
            <motion.button className={`tab-btn${tab === 'seekers' ? ' active' : ''}`} onClick={() => setTab('seekers')} whileTap={{ scale: 0.97 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              For Job Seekers &amp; Students
            </motion.button>
            <motion.button className={`tab-btn${tab === 'employers' ? ' active' : ''}`} onClick={() => setTab('employers')} whileTap={{ scale: 0.97 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"/></svg>
              For Employers &amp; Institutions
            </motion.button>
          </div>
        </motion.div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={tab} className="services-grid" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.32 }}>
            {cards.map((s, i) => (
              <motion.div
                key={s.title}
                className="service-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="service-icon-wrap">{s.icon}</div>
                <span className="service-tag-label">{s.tag}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <button className="service-link" onClick={() => onNavigate('services')}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   FEATURED JOBS
══════════════════════════════════════════ */
function FeaturedJobs({ onNavigate }) {
  return (
    <section className="jobs-section">
      <div className="container">
        <motion.div className="jobs-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div>
            <div className="section-tag">Roles We Recruit For</div>
            <h2 className="section-title">Opportunities Across<br />Every Sector</h2>
          </div>
          <motion.button className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('contact')}>Get in Touch →</motion.button>
        </motion.div>
        <motion.div className="jobs-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {FEATURED_JOBS.map((job) => (
            <motion.div key={job.title} className="job-card" variants={staggerItem} whileHover={{ y: -5 }}>
              <div className="job-card-top">
                <div className="job-logo" style={{ background: `${job.color}18`, color: job.color }}>{job.initials}</div>
              </div>
              <h4 className="job-title">{job.title}</h4>
              <p className="job-company">{job.sector}</p>
              <div className="job-meta">
                <span className="job-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {job.location}
                </span>
              </div>
              <div className="job-footer">
                <span className="job-type-badge">{job.type}</span>
                <button className="job-apply-btn" style={{ borderColor: job.color, color: job.color }} onClick={() => onNavigate('contact')}>Apply Now</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   PROCESS
══════════════════════════════════════════ */
function Process() {
  return (
    <section className="process-section" id="how-it-works">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">A Proven Process That<br />Delivers Results</h2>
          <p className="section-subtitle">A streamlined, people-first approach that ensures the right outcome every time.</p>
        </motion.div>
        <motion.div className="process-flow" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {PROCESS_STEPS.map((s, i) => (
            <motion.div key={s.n} className="process-step" variants={staggerItem} whileHover={{ scale: 1.04 }}>
              <div className="ps-top">
                <div className="ps-circle">{s.n}</div>
                {i < PROCESS_STEPS.length - 1 && <div className="ps-line" />}
              </div>
              <h4 className="ps-title">{s.title}</h4>
              <p className="ps-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   PLATFORM PREVIEW
══════════════════════════════════════════ */
function Platform({ onNavigate }) {
  return (
    <section className="platform-section">
      <div className="container">
        <motion.div
          className="platform-inner"
          initial="hidden" whileInView="visible" viewport={VP}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.div className="platform-card" variants={fadeLeft}>
            <div className="platform-card-header">
              <h4>Candidate Management</h4>
              <button className="btn-sm-primary">+ Add Candidate</button>
            </div>
            <div className="platform-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8895A7" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <span>Search candidates...</span>
            </div>
            {MOCK_CANDIDATES.map((c) => (
              <div key={c.name} className="candidate-row">
                <div className="cand-left">
                  <div className="cand-av" style={{ background: c.color }}>{c.initials}</div>
                  <div>
                    <div className="cand-name">{c.name}</div>
                    <div className="cand-role">{c.role}</div>
                  </div>
                </div>
                <div className="cand-right">
                  <span className={`stage-badge stage-${c.stage.toLowerCase()}`}>{c.stage}</span>
                  <div className="score-wrap">
                    <div className="score-bar"><div className="score-fill" style={{ width: `${c.score}%`, background: c.color }} /></div>
                    <span className="score-num" style={{ color: c.color }}>{c.score}%</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div className="platform-content" variants={fadeRight}>
            <div className="section-tag">Smart Hiring Platform</div>
            <h2 className="section-title">Manage Your Entire<br />Hiring Effortlessly</h2>
            <p className="section-subtitle">Our intelligent platform helps you track candidates, collaborate with your team, and make data-driven hiring decisions.</p>
            <div className="platform-features">
              {[
                { icon: '📊', title: 'Real-time Pipeline Tracking', desc: 'Track every candidate from application to placement in one view.' },
                { icon: '🤝', title: 'Collaborative Hiring', desc: 'Loop in your entire hiring team for faster, better decisions.' },
                { icon: '📈', title: 'Advanced Analytics', desc: 'Data-driven insights on hiring speed, source quality, and more.' },
                { icon: '⚡', title: 'Automated Workflows', desc: 'Automate scheduling, reminders, and follow-ups effortlessly.' },
              ].map((f) => (
                <div key={f.title} className="platform-feature">
                  <div className="pf-icon">{f.icon}</div>
                  <div>
                    <div className="pf-title">{f.title}</div>
                    <div className="pf-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <motion.button className="btn btn-primary" style={{ marginTop: '32px' }} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('services')}>
              How It Works →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   STUDY ABROAD
══════════════════════════════════════════ */
function StudyAbroad() {
  return (
    <section className="study-section">
      <div className="study-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag study-tag">Study Abroad</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Your Global Education<br />Journey Starts Here</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,.7)', maxWidth: '520px', margin: '0 auto' }}>Expert guidance for international admissions — visa support, university selection, scholarship, and more.</p>
        </motion.div>
        <motion.div className="study-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {STUDY_DESTINATIONS.map((d) => (
            <motion.div key={d.country} className="study-card" variants={staggerItem} whileHover={{ y: -8, borderColor: d.color }}>
              <div className="study-flag">{d.flag}</div>
              <h3 className="study-country">{d.country}</h3>
              <div className="study-unis">
                {d.top.map((u) => <span key={u} className="study-uni-tag">{u}</span>)}
              </div>
              <button className="study-btn">Explore →</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   WHY CHOOSE
══════════════════════════════════════════ */
function WhyChoose({ onNavigate }) {
  return (
    <section className="why-section">
      <div className="container">
        <motion.div
          className="why-inner"
          initial="hidden" whileInView="visible" viewport={VP}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.div className="why-left" variants={fadeLeft}>
            <div className="why-big-card">
              <div className="wbc-glow" />
              <div className="wbc-icon"><Award size={38} strokeWidth={1.7} /></div>
              <h3>Why Businesses Trust Us</h3>
              <p>From startups to large enterprises, we deliver consistent, quality workforce solutions across Odisha and beyond.</p>
              <div className="wbc-badges">
                {['ISO 9001:2015', 'MSME Registered', 'GST Compliant'].map((b) => (
                  <span key={b} className="wbc-badge">{b}</span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="why-right" variants={fadeRight}>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">Why Choose Odisha<br />Workforce Solutions?</h2>
            <p className="section-subtitle">We combine local expertise with a global outlook to deliver workforce solutions that truly make a difference.</p>
            <motion.ul className="why-list" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
              {WHY_POINTS.map((item) => (
                <motion.li key={item} className="why-item" variants={staggerItem}>
                  <div className="why-check">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <div className="why-actions">
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('contact')}>Partner With Us</motion.button>
              <motion.button className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('about')}>Learn More</motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════ */
function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="container">
        <motion.div className="section-header centered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="section-tag">Our Approach</div>
          <h2 className="section-title">What Sets Odisha Workforce<br />Solutions Apart</h2>
          <p className="section-subtitle">People-centric, result-oriented, and impact-driven — tailored solutions built for long-term, measurable success.</p>
        </motion.div>
        <motion.div className="testi-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={VP}>
          {APPROACH.map((t) => (
            <motion.div key={t.title} className="testi-card" variants={staggerItem} whileHover={{ y: -8 }}>
              <div className="testi-av" style={{ background: t.color }}><t.Icon size={26} strokeWidth={1.9} color="#fff" /></div>
              <h4 className="testi-name" style={{ marginTop: '16px' }}>{t.title}</h4>
              <p style={{ color: 'var(--gray)', marginTop: '8px', lineHeight: 1.6 }}>{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   FRANCHISE
══════════════════════════════════════════ */
function FranchiseSection() {
  return (
    <section className="franchise-section" id="franchise">
      <div className="container">
        <motion.div
          className="franchise-inner"
          initial="hidden" whileInView="visible" viewport={VP}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}
        >
          <motion.div className="franchise-content" variants={fadeLeft}>
            <div className="section-tag franchise-tag">Franchise Opportunity</div>
            <h2 className="section-title">Own Your OWS<br />Franchise Center</h2>
            <p className="section-subtitle">Join the fastest-growing recruitment consultancy network in Odisha. Low investment, high returns, proven model.</p>
            <div className="franchise-numbers">
              {[{ n: '15+', l: 'Active Franchises' }, { n: '₹2–5L', l: 'Investment Range' }, { n: '6 Mo', l: 'Break-even Period' }].map((s) => (
                <div key={s.l} className="franchise-num">
                  <span className="franchise-num-n">{s.n}</span>
                  <span className="franchise-num-l">{s.l}</span>
                </div>
              ))}
            </div>
            <div className="franchise-actions">
              <motion.a href="https://wa.me/919090117679" className="btn btn-primary" target="_blank" rel="noreferrer" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Apply for Franchise
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
              <motion.button className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>Download Brochure</motion.button>
            </div>
          </motion.div>
          <motion.div className="franchise-features" variants={stagger}>
            {FRANCHISE_FEATURES.map((f) => (
              <motion.div key={f.title} className="franchise-feature-card" variants={staggerItem} whileHover={{ y: -4 }}>
                <div className="ff-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   CTA
══════════════════════════════════════════ */
function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div className="cta-inner" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="cta-blob cta-blob-1" />
          <div className="cta-blob cta-blob-2" />
          <div className="cta-content">
            <h2>Ready to Build Your Dream<br />Workforce?</h2>
            <p>Let's discuss how OWS can help you find, hire, and retain the best talent — or empower your career journey.</p>
            <div className="cta-actions">
              <motion.a href="https://wa.me/919090117679" className="btn btn-white" target="_blank" rel="noreferrer" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>Schedule a Consultation →</motion.a>
              <motion.a href="mailto:info@odishaworkforce.com" className="btn btn-ghost" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>Email Us</motion.a>
            </div>
          </div>
          <div className="cta-contact-card">
            <h4>Contact Odisha Workforce Solutions</h4>
            {[
              { Icon: MapPin, text: 'Plot No-10, Baidyanathapur, Near Hiteech Square, Satya Vihar, BBSR – 751017' },
              { Icon: Phone, text: '+91 9090117679 (OP) · +91 9090117678 (Calling)' },
              { Icon: Mail, text: 'info@odishaworkforce.com' },
              { Icon: Globe, text: 'odishaworkforce.com' },
            ].map((c) => (
              <div key={c.text} className="cta-contact-row">
                <span className="cta-ci"><c.Icon size={18} strokeWidth={2} /></span><span>{c.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-chip">
                <img src={owsBadge} alt="OWS" className="footer-logo-img" />
              </span>
              <div>
                <span className="footer-logo-main">Odisha Workforce Solutions</span>
                <span className="footer-logo-sub">ISO 9001:2015 · MSME · GST</span>
              </div>
            </div>
            <p>An ISO 9001:2015 certified, MSME-registered organisation empowering people and enabling progress across India and internationally.</p>
            <div className="footer-contact-list">
              <a href="tel:+919090117679">📞 +91 9090117679 / 9090117678</a>
              <a href="mailto:info@odishaworkforce.com">✉️ info@odishaworkforce.com</a>
              <span>📍 Satya Vihar, Bhubaneswar – 751017</span>
            </div>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.name}
                  className="social-btn"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{ '--sc': s.grad || s.color }}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="footer-links-grid">
            {[
              { h: 'For Job Seekers', links: ['Career Counselling', 'Skill Development', 'Resume Building', 'Interview Prep', 'Study Abroad'] },
              { h: 'For Employers', links: ['Recruitment Services', 'HR Consulting', 'Campus Drives', 'Job Fairs', 'Bulk Hiring'] },
              { h: 'Company', links: ['About Us', 'Our Services', 'Industries', 'Gallery', 'Franchise', 'Contact Us'] },
              { h: 'Resources', links: ['Career Blog', 'Job Tips', 'Salary Guide', 'Industry Reports', 'FAQs'] },
            ].map((col) => (
              <div key={col.h} className="footer-col">
                <h4>{col.h}</h4>
                <ul>{col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Odisha Workforce Solutions Pvt. Ltd. · ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  )
}

/* ══════════════════════════════════════════
   THEME SWITCHER
══════════════════════════════════════════ */
const SOCIALS = [
  {
    name: 'Facebook', href: 'https://facebook.com', color: '#1877F2',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 21.5v-8.01H5.6V9.5h3.6V7.49c0-3.57 1.73-5.24 4.7-5.24 1.42 0 2.18.1 2.54.15v3.5h-2.04c-1.26 0-1.7.66-1.7 2v1.6h3.7l-.5 3.99H12.7V21.5H9.2Z"/></svg>,
  },
  {
    name: 'Instagram', href: 'https://instagram.com', color: '#E4405F',
    grad: 'linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg>,
  },
  {
    name: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/></svg>,
  },
  {
    name: 'Twitter', href: 'https://twitter.com', color: '#1DA1F2',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.64 11.64 0 0 1 3.39 4.6a4.1 4.1 0 0 0 1.27 5.47A4.07 4.07 0 0 1 2.8 9.6v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.28a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67l-.01-.53A8.3 8.3 0 0 0 22 5.92Z"/></svg>,
  },
  {
    name: 'YouTube', href: 'https://youtube.com', color: '#FF0000',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.57V8.43L15.82 12 9.6 15.57z"/></svg>,
  },
]

function WhatsAppFab() {
  return (
    <motion.a
      className="whatsapp-fab"
      href="https://wa.me/919090117679"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3.2c-7.1 0-12.86 5.76-12.86 12.86 0 2.27.6 4.49 1.73 6.45L3.1 28.8l6.46-1.69a12.8 12.8 0 0 0 6.48 1.76h.01c7.1 0 12.86-5.76 12.86-12.86 0-3.44-1.34-6.67-3.77-9.1a12.78 12.78 0 0 0-9.1-3.71zm0 23.5h-.01a10.66 10.66 0 0 1-5.43-1.49l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.63 10.63 0 0 1-1.63-5.65c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.54 1.11 7.56 3.13a10.63 10.63 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.7 10.7zm5.87-8.01c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55l-.62-.01c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/>
      </svg>
    </motion.a>
  )
}

function SocialRail() {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`social-rail${open ? ' open' : ''}`}
      aria-label="Social media links"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="social-rail-list">
        {SOCIALS.map((s, i) => (
          <a
            key={s.name}
            className="social-rail-link"
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            tabIndex={open ? 0 : -1}
            style={{ '--sc': s.grad || s.color, '--d': `${i * 0.045}s` }}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <button
        className="social-rail-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Follow us on social media"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>
        </svg>
      </button>
    </div>
  )
}

function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(
    () => localStorage.getItem('ows-theme') || 'aurora'
  )
  const [activeFont, setActiveFont] = useState(
    () => localStorage.getItem('ows-font') || 'sora'
  )

  useEffect(() => {
    const saved = THEMES.find((t) => t.id === (localStorage.getItem('ows-theme') || 'aurora')) || THEMES[0]
    applyThemeVars(saved)
    setActiveId(saved.id)
    const savedFont = FONTS.find((f) => f.id === (localStorage.getItem('ows-font') || 'sora')) || FONTS[0]
    applyFont(savedFont)
    setActiveFont(savedFont.id)
  }, [])

  const select = (theme) => {
    applyThemeVars(theme)
    setActiveId(theme.id)
  }

  const selectFont = (font) => {
    applyFont(font)
    setActiveFont(font.id)
  }

  return (
    <>
      {/* Floating action button */}
      <motion.button
        className="theme-fab"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        title="Change Theme"
        aria-label="Open theme switcher"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
          </svg>
        </motion.span>
      </motion.button>

      <AnimatePresence mode="sync">
        {open && (
            <motion.div
              key="backdrop"
              className="theme-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
            />
        )}
        {open && (
            <motion.div
              key="panel"
              className="theme-panel"
              initial={{ x: '105%' }}
              animate={{ x: 0 }}
              exit={{ x: '105%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            >
              <div className="theme-panel-header">
                <div className="theme-panel-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <circle cx="13.5" cy="6.5" r=".5" fill="var(--primary)"/>
                    <circle cx="17.5" cy="10.5" r=".5" fill="var(--primary)"/>
                    <circle cx="8.5" cy="7.5" r=".5" fill="var(--primary)"/>
                    <circle cx="6.5" cy="12.5" r=".5" fill="var(--primary)"/>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                  </svg>
                  <h3>Theme Studio</h3>
                </div>
                <motion.button className="theme-close-btn" onClick={() => setOpen(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </motion.button>
              </div>

              <p className="theme-panel-sub">Personalize your colors and typography. Changes apply instantly.</p>

              <div className="theme-scroll">
                <div className="theme-section-label">🎨 Color Theme</div>
                <div className="theme-list">
                  {THEMES.map((t) => (
                    <motion.button
                      key={t.id}
                      className={`theme-item${activeId === t.id ? ' active' : ''}`}
                      onClick={() => select(t)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="theme-previews">
                        {t.preview.map((c, i) => (
                          <div
                            key={i}
                            className="theme-circle"
                            style={{ background: c, marginLeft: i > 0 ? '-8px' : 0, zIndex: 3 - i }}
                          />
                        ))}
                      </div>
                      <div className="theme-info">
                        <span className="theme-name">{t.name}</span>
                        <span className="theme-feel">{t.feel}</span>
                      </div>
                      {activeId === t.id && (
                        <motion.div
                          className="theme-check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 16, stiffness: 300 }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="theme-section-label">🔤 Font Style</div>
                <div className="font-grid">
                  {FONTS.map((f) => (
                    <motion.button
                      key={f.id}
                      className={`font-item${activeFont === f.id ? ' active' : ''}`}
                      onClick={() => selectFont(f)}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="font-glyph" style={{ fontFamily: f.display }}>Ag</span>
                      <span className="font-item-info">
                        <span className="font-name" style={{ fontFamily: f.display }}>{f.name}</span>
                        <span className="font-feel">{f.feel}</span>
                      </span>
                      {activeFont === f.id && (
                        <span className="font-check">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="theme-panel-footer">
                <span>🎨 OWS Studio</span>
                <span>{THEMES.length} themes · {FONTS.length} fonts</span>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
}

export default function App() {
  const [page, setPage] = useState('home')

  // Auto theme: Emerald Green by default, Dark Mode if the browser/OS prefers dark.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const applyPreferred = () => {
      const id = mq.matches ? 'dark-mode' : 'emerald-green'
      const theme = THEMES.find((t) => t.id === id) || THEMES[0]
      applyThemeVars(theme)
    }
    applyPreferred()
    applyFont(FONTS[0])
    mq.addEventListener?.('change', applyPreferred)
    return () => mq.removeEventListener?.('change', applyPreferred)
  }, [])

  function navigate(key) {
    setPage(key)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onNavigate={navigate} currentPage={page} />
      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div key="home" {...PAGE_TRANSITION}>
            <Hero onNavigate={navigate} />
            <AboutIntro />
            <WhoWeAre />
            <Services onNavigate={navigate} />
            <WhyChoose onNavigate={navigate} />
            <Testimonials />
            <BasedInOdisha />
            <CTA />
          </motion.div>
        )}
        {page === 'about' && (
          <motion.div key="about" {...PAGE_TRANSITION}>
            <AboutUs onNavigate={navigate} />
          </motion.div>
        )}
        {page === 'services' && (
          <motion.div key="services" {...PAGE_TRANSITION}>
            <OurServices onNavigate={navigate} />
          </motion.div>
        )}
        {page === 'industries' && (
          <motion.div key="industries" {...PAGE_TRANSITION}>
            <Industries onNavigate={navigate} />
          </motion.div>
        )}
        {page === 'gallery' && (
          <motion.div key="gallery" {...PAGE_TRANSITION}>
            <Gallery onNavigate={navigate} />
          </motion.div>
        )}
        {page === 'contact' && (
          <motion.div key="contact" {...PAGE_TRANSITION}>
            <ContactUs onNavigate={navigate} />
          </motion.div>
        )}
        {page === 'franchise' && (
          <motion.div key="franchise" {...PAGE_TRANSITION}>
            <Franchise onNavigate={navigate} />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
      <WhatsAppFab />
      <SocialRail />
    </>
  )
}
