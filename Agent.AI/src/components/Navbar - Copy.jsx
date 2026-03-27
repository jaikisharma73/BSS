import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import {motion} from "motion/react"


const Navbar = ({theme,setTheme}) => {

  const [sidebarOpen,setSidebarOpen] = useState(false)
  return (
    <motion.div
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.8,ease:'easeOut'}}
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-1 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-transparent dark:backdrop-blur-sm'>
        <img src={assets.logos} className=' h-15 w-auto sm:h-20' alt='Company Logo' />

        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col bg-white dark:bg-black sm:bg-transparent dark:sm:bg-transparent max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <img src={assets.close_icon} alt="Close Menu" className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer dark:invert' onClick={()=>setSidebarOpen(false)} />

          <a onClick={()=>setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
          <a onClick={()=>setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
          <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Hiring</a>
  <button
  onClick={() => window.location.href = "tel:+919450221034"}
  className="flex items-center gap-2 text-black dark:text-white border border-gray-400 px-5 py-2 rounded-lg
             sm:static bg-white dark:bg-black"
>
  📞 Call Now
</button>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>

          <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

          <img src={theme ==='dark'? assets.menu_icon_dark : assets.menu_icon} alt="Open Menu" onClick={()=>setSidebarOpen(true)} className='w-8 sm:hidden cursor-pointer' />

          <a href="https://api.whatsapp.com/send?phone=+919450221034&text=Hey there! I want to book security" target="_blank" className='text-sm flex items-center gap-2 bg-[#ae1c1c] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
          </a>
        </div>

    </motion.div>
  )
}

export default Navbar