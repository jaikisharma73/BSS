import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"


const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showScan, setShowScan] = useState(true)

  // Hide scan line after animation completes
  useEffect(() => {
    const timer = setTimeout(() => setShowScan(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <>
      {/* Fixed Call Now button - always visible at top center on mobile */}
      <motion.button
        onClick={() => window.location.href = "tel:+919450221034"}
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-30 sm:hidden flex items-center gap-2 px-5 py-2 rounded-lg border shadow-lg text-sm font-semibold ${
          theme === 'dark'
            ? 'bg-black text-white border-gray-600'
            : 'bg-white text-gray-800 border-gray-300'
        }`}
        whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(174,28,28,0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        📞 Call Now
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-1 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-transparent dark:backdrop-blur-sm overflow-hidden'>

        {/* Scan line on page load */}
        {showScan && (
          <div className="absolute inset-0 pointer-events-none z-30">
            <div className="h-full w-20 bg-gradient-to-r from-transparent via-red-500/30 to-transparent absolute animate-scan-across" />
          </div>
        )}

        <img src={theme === 'dark' ? assets.logos : assets.logos} className=' h-15 w-auto sm:h-20' alt='' />

        {/* Desktop nav links */}
        <div className='hidden sm:flex items-center gap-5 text-gray-700 dark:text-white text-sm'>
          <a href="/" className='nav-glow-hover sm:hover:border-b-0'>Home</a>
          <a href="/#services" className='nav-glow-hover sm:hover:border-b-0'>Services</a>
          <a href="/gallery" className='nav-glow-hover sm:hover:border-b-0'>Gallery</a>
          <a href="/#careers" className='nav-glow-hover sm:hover:border-b-0'>Careers</a>
          <a href="/#network" className='nav-glow-hover sm:hover:border-b-0'>Network</a>
          <a href="/#contact-us" className='nav-glow-hover sm:hover:border-b-0'>Contact</a>
          <motion.button
            onClick={() => window.location.href = "tel:+919450221034"}
            className="flex items-center gap-2 text-black dark:text-white border border-gray-400 px-5 py-2 rounded-lg bg-white dark:bg-black"
            whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(174,28,28,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Call Now
          </motion.button>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* Hamburger icon - mobile only */}
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt="Open menu"
            onClick={() => setSidebarOpen(true)}
            className='w-8 sm:hidden cursor-pointer'
          />

          <motion.a
            href="https://api.whatsapp.com/send?phone=+919450221034&text=Hey there! I want to book security"
            target="_blank"
            className='text-sm max-sm:hidden flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(174,28,28,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Connect <img src={assets.arrow_icon} width={14} alt="" />
          </motion.a>
        </div>
      </motion.div>

      {/* ===== Mobile Sidebar (rendered OUTSIDE the navbar to avoid overflow-hidden clipping) ===== */}

      {/* Backdrop overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 sm:hidden flex flex-col pt-20 pl-8 pr-6 gap-5 text-lg font-medium shadow-2xl transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          theme === 'dark'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-800'
        }`}
        style={{ width: '260px' }}
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className={`absolute right-4 top-4 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            theme === 'dark'
              ? 'hover:bg-gray-700 text-white'
              : 'hover:bg-gray-200 text-gray-800'
          }`}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <a onClick={() => setSidebarOpen(false)} href="/" className='nav-glow-hover'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="/#services" className='nav-glow-hover'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="/gallery" className='nav-glow-hover'>Gallery</a>
        <a onClick={() => setSidebarOpen(false)} href="/#careers" className='nav-glow-hover'>Careers</a>
        <a onClick={() => setSidebarOpen(false)} href="/#network" className='nav-glow-hover'>Network</a>
        <a onClick={() => setSidebarOpen(false)} href="/#contact-us" className='nav-glow-hover'>Contact</a>

        {/* Call Now button inside sidebar */}
        <motion.button
          onClick={() => { setSidebarOpen(false); window.location.href = "tel:+919450221034"; }}
          className={`flex items-center gap-2 border px-5 py-2 rounded-lg mt-4 ${
            theme === 'dark'
              ? 'text-white border-gray-600 bg-black'
              : 'text-gray-800 border-gray-400 bg-gray-50'
          }`}
          whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(174,28,28,0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          📞 Call Now
        </motion.button>

        {/* WhatsApp Connect button inside sidebar */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=+919450221034&text=Hey there! I want to book security"
          target="_blank"
          onClick={() => setSidebarOpen(false)}
          className='flex items-center gap-2 bg-red-700 text-white px-5 py-2 rounded-full cursor-pointer text-sm mt-2 justify-center'
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(174,28,28,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </motion.a>
      </div>
    </>
  )
}

export default Navbar