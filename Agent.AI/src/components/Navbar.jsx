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

  return (
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

      {/* Mobile sidebar backdrop overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 max-sm:overflow-hidden max-sm:opacity-0' : 'max-sm:w-64 max-sm:pl-10 max-sm:opacity-100'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-white max-sm:dark:bg-gray-900 max-sm:text-gray-800 max-sm:dark:text-white max-sm:pt-20 max-sm:shadow-2xl max-sm:z-50 flex sm:items-center gap-5 transition-all duration-300 text-gray-700 dark:text-white`}>

        {/* Close button - always visible with proper contrast */}
        <button
          onClick={() => setSidebarOpen(false)}
          className='absolute right-4 top-4 sm:hidden cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <a onClick={() => setSidebarOpen(false)} href="#" className='nav-glow-hover sm:hover:border-b-0'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className='nav-glow-hover sm:hover:border-b-0'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#careers" className='nav-glow-hover sm:hover:border-b-0'>Careers</a>
        <a onClick={() => setSidebarOpen(false)} href="#network" className='nav-glow-hover sm:hover:border-b-0'>Network</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='nav-glow-hover sm:hover:border-b-0'>Contact</a>
        <motion.button
          onClick={() => { setSidebarOpen(false); window.location.href = "tel:+918840390443"; }}
          className="flex items-center gap-2 text-gray-800 dark:text-white border border-gray-400 dark:border-gray-600 px-5 py-2 rounded-lg
             max-sm:mt-4
             sm:static bg-white dark:bg-black"
          whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(174,28,28,0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          📞 Call Now
        </motion.button>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden cursor-pointer' />

        <motion.a
          href="https://api.whatsapp.com/send?phone=+918840390443&text=Hey there! I want to book security"
          target="_blank"
          className='text-sm max-sm:hidden flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full cursor-pointer'
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(174,28,28,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </motion.a>
      </div>

    </motion.div>
  )
}

export default Navbar