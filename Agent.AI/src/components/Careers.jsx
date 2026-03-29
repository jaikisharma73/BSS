import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import assets from '../assets/assets'
import { RadarPulse, ShieldBadge, FloatingSecurityIcons } from './SecurityAnimations'

/* ── Scroll-triggered counting number ── */
const CountUp = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(target)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const jobListings = [
  {
    title: 'Security Guard',
    location: 'Lucknow, Uttar Pradesh',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '₹12,000 – ₹18,000/month',
    description: 'We are looking for disciplined and vigilant security guards to protect our client premises. You will be responsible for monitoring premises, preventing unauthorized access, and ensuring the safety of people and property.',
    requirements: ['Physical fitness and alertness', 'Basic communication skills', 'Willingness to work in shifts', 'No criminal record'],
  },
  {
    title: 'Event Bouncer',
    location: 'Lucknow / On-site Events',
    type: 'Part-time / Contract',
    experience: '1-3 years',
    salary: '₹800 – ₹1,500/day',
    description: 'Join our event security team as a professional bouncer. You will manage crowd control, ensure event safety, handle entry management, and de-escalate situations professionally.',
    requirements: ['Strong physical build and presence', 'Crowd management experience', 'Ability to stay calm under pressure', 'Polite but firm communication'],
  },
  {
    title: 'Corporate Security Officer',
    location: 'Lucknow, Uttar Pradesh',
    type: 'Full-time',
    experience: '2-5 years',
    salary: '₹18,000 – ₹28,000/month',
    description: 'Oversee security operations at corporate offices, manage access control systems, coordinate security teams, and liaise with management to ensure a safe working environment.',
    requirements: ['Experience in corporate security', 'Knowledge of CCTV and access systems', 'Leadership and reporting skills', 'Professional demeanor'],
  },
  {
    title: 'Office Boy / Support Staff',
    location: 'Multiple Locations, UP',
    type: 'Full-time',
    experience: 'Fresher welcome',
    salary: '₹9,000 – ₹13,000/month',
    description: 'Support office operations with daily tasks including document delivery, tea/coffee service, and general office assistance. A reliable and hardworking individual is required.',
    requirements: ['Basic literacy', 'Punctuality and reliability', 'Good interpersonal skills', 'Willingness to learn'],
  },
  {
    title: 'Residential Society Guard',
    location: 'Lucknow & Nearby Areas',
    type: 'Full-time',
    experience: '0-3 years',
    salary: '₹11,000 – ₹16,000/month',
    description: 'Maintain security of gated communities and residential societies. Duties include gate management, visitor logging, patrolling, and emergency response.',
    requirements: ['Alertness and vigilance', 'Ability to manage visitor registers', 'Basic communication skills', 'Shift flexibility'],
  },
]

const JobCard = ({ job, index }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='relative border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow group overflow-hidden'
    >
      {/* Subtle glow on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-700/0 to-[#4D8CEE]/0 group-hover:from-red-700/20 group-hover:to-[#4D8CEE]/20 transition-all duration-500 pointer-events-none" />

      <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative'>
        <div className='flex-1'>
          <div className='flex items-center gap-3 flex-wrap mb-2'>
            {/* Verified stamp animation */}
            <motion.div
              initial={{ scale: 2.5, rotate: -20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
              className="text-green-600 dark:text-green-400 text-xs font-bold"
            >
              ✅
            </motion.div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{job.title}</h3>
            <span className='text-xs px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 font-medium'>{job.type}</span>
          </div>
          <div className='flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500 dark:text-gray-400'>
            <span>📍 {job.location}</span>
            <span>⏱ {job.experience}</span>
            <span>💰 {job.salary}</span>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className='text-sm border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {expanded ? 'Less ▲' : 'Details ▼'}
          </motion.button>
          <motion.a
            href='#contact-us'
            className='text-sm bg-gradient-to-r from-red-700 to-[#4D8CEE] text-white px-5 py-2 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(174,28,28,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden'
          >
            <div className='mt-5 pt-5 border-t border-gray-100 dark:border-gray-700'>
              <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>{job.description}</p>
              <h4 className='text-sm font-semibold text-gray-700 dark:text-white mb-2'>Requirements:</h4>
              <ul className='space-y-1'>
                {job.requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2'
                  >
                    <span className='text-red-600'>✓</span> {req}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Careers = () => {
  return (
    <div id='careers' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <FloatingSecurityIcons count={6} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <ShieldBadge size={42} />
          <h1 className='text-3xl sm:text-5xl font-medium'>
            Join Our <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>Team</span>
          </h1>
        </div>
        <p className='text-sm sm:text-base text-gray-500 dark:text-white/70 max-w-2xl mx-auto'>
          Be part of a professional security force committed to safety and excellence. We're actively hiring across multiple roles in Uttar Pradesh.
        </p>
      </motion.div>

      {/* Stats row with radar accent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className='relative flex flex-wrap justify-center gap-8 py-6'
      >
        {/* Radar accent behind stats */}
        <RadarPulse size={200} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

        {[
          { target: 500, suffix: '+', label: 'Deployed Personnel' },
          { target: 50,  suffix: '+', label: 'Client Sites' },
          { target: 5,   suffix: '+', label: 'Years of Service' },
          { target: 100, suffix: '%', label: 'Background Verified' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className='text-center relative z-10'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className='text-3xl font-bold bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>
              <CountUp target={stat.target} suffix={stat.suffix} duration={1800} />
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Job listings */}
      <div className='w-full flex flex-col gap-4'>
        {jobListings.map((job, index) => (
          <JobCard key={index} job={job} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='mt-6 text-center bg-gradient-to-r from-red-700/10 to-[#4D8CEE]/10 border border-red-200 dark:border-red-900 rounded-2xl p-8 w-full relative overflow-hidden'
      >
        {/* Shield animation in CTA */}
        <div className="absolute right-6 top-4 opacity-20">
          <ShieldBadge size={64} />
        </div>
        <h3 className='text-xl font-semibold mb-2'>Don't see a perfect fit?</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400 mb-5'>Send us your details and we'll reach out when a suitable opportunity opens up.</p>
        <motion.a
          href='#contact-us'
          className='inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-[#4D8CEE] text-white px-8 py-3 rounded-full text-sm font-medium animate-cta-pulse'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us <img src={assets.arrow_icon} width={12} alt='' />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Careers
