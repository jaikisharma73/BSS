import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import { motion, AnimatePresence } from "motion/react"
import { FloatingSecurityIcons, RadarPulse, ScanLine, GuardSilhouette } from './SecurityAnimations'

const slides = [
  {
    badge: 'Trusted by 10k+ people',
    heading: (
      <>
        Where there is{' '}
        <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>
          Security{' '}
        </span>
        there is peace of mind...
      </>
    ),
    sub: 'Your Safety Is Our Priority',
    cta: { label: '📞 Call Now', href: 'tel:+919450221034', internal: false },
    cta2: { label: '💬 WhatsApp Us', href: 'https://api.whatsapp.com/send?phone=+919450221034&text=Hey! I need security services', internal: false },
  },
  {
    badge: '500+ Deployed Personnel',
    heading: (
      <>
        Professional{' '}
        <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>
          Security Guards{' '}
        </span>
        For Every Need
      </>
    ),
    sub: 'Residential • Corporate • Industrial • Events',
    cta: { label: 'Our Services', href: '#services', internal: true },
    cta2: { label: 'Join Our Team', href: '#careers', internal: true },
  },
  {
    badge: 'Events covered across UP',
    heading: (
      <>
        Trusted{' '}
        <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>
          Event Bouncers{' '}
        </span>
        & Crowd Management
      </>
    ),
    sub: `From small gatherings to large events — we've got you covered`,
    cta: { label: 'Book Now', href: '#contact-us', internal: true },
    cta2: { label: 'View Network', href: '#network', internal: true },
  },
  {
    badge: 'Background Verified Staff',
    heading: (
      <>
        Reliable{' '}
        <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>
          Manpower{' '}
        </span>
        Services You Can Count On
      </>
    ),
    sub: 'Office Boys, Support Staff and more — deployed quickly with full verification',
    cta: { label: 'Get a Quote', href: '#contact-us', internal: true },
    cta2: { label: 'Learn More', href: '#about', internal: true },
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div id='hero' className='relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

      {/* Floating security icons in background */}
      <FloatingSecurityIcons count={14} />

      {/* Guard silhouettes on sides — hidden on mobile */}
      <GuardSilhouette size={100} className="absolute left-4 top-1/3 hidden lg:block" />
      <GuardSilhouette size={80} className="absolute right-8 top-1/4 hidden lg:block" style={{ transform: 'scaleX(-1)' }} />

      {/* Slide content */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center gap-5'
        >
          {/* Badge with shimmer */}
          <motion.div
            className='relative inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-5 rounded-full overflow-hidden'
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 animate-shimmer rounded-full" />
            <img className='w-20' src={assets.group_profile} alt='' />
            <p className='text-xs font-medium relative z-10'>{slide.badge}</p>
          </motion.div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[74px] font-medium xl:leading-[95px] max-w-5xl'>
            {slide.heading}
          </h1>

          {/* Subtext */}
          <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg'>
            {slide.sub}
          </p>

          {/* CTAs with pulse */}
          <div className='flex flex-wrap justify-center gap-3 pb-3'>
            <motion.a
              href={slide.cta.href}
              target={slide.cta.internal ? undefined : '_blank'}
              className='flex items-center gap-2 bg-gradient-to-r from-red-700 to-[#4D8CEE] text-white px-6 py-3 rounded-full text-sm font-medium animate-cta-pulse'
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {slide.cta.label}
            </motion.a>
            <motion.a
              href={slide.cta2.href}
              target={slide.cta2.internal ? undefined : '_blank'}
              className='flex items-center gap-2 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-white px-6 py-3 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all'
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {slide.cta2.label}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Scan line between slides and image */}
      <ScanLine />

      {/* Dot indicators */}
      <div className='flex gap-2'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-400 ${i === current ? 'w-8 bg-red-700' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
          />
        ))}
      </div>

      {/* Hero image with radar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='relative'
      >
        {/* Radar behind image */}
        <RadarPulse size={350} className="-top-10 -right-10 opacity-60" />

        <img src={assets.security} className='w-full max-w-9xl relative z-10' alt='' />
        <img src={assets.bgImage1} className='absolute -top-0 -right-10 sm-top-600 sm:left-90 -z-1 dark:hidden' alt='' />
      </motion.div>
    </div>
  )
}

export default Hero