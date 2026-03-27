import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"


const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-1 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-transparent dark:backdrop-blur-sm'>
      <img src={theme === 'dark' ? assets.logos : assets.logos} className=' h-15 w-auto sm:h-20' alt='' />

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-black max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer' onClick={() => setSidebarOpen(false)} />

        <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#careers" className='sm:hover:border-b'>Careers</a>
        <a onClick={() => setSidebarOpen(false)} href="#network" className='sm:hover:border-b'>Network</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact</a>
        <button
          onClick={() => window.location.href = "tel:+919450221034"}
          className="flex items-center gap-2 text-black dark:text-white border border-gray-400 px-5 py-2 rounded-lg
             max-sm:fixed max-sm:top-3 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:z-30
             sm:static bg-white dark:bg-black"
        >
          📞 Call Now
        </button>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden cursor-pointer' />

        <a href="https://api.whatsapp.com/send?phone=+919450221034&text=Hey there! I want to book security" target="_blank" className='text-sm max-sm:hidden flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>

    </motion.div>
  )
}

export default Navbar