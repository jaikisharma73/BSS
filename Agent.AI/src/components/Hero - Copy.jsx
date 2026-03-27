import React from 'react'
import assets from '../assets/assets'
import {motion} from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white '>
        <motion.div
        initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.7}}
    viewport={{once:true}}
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-5 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </motion.div>

        <motion.h1 
        initial={{opacity:0,y:40}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.7}}
    viewport={{once:true}}
      className='text-4xl sm:text-5xl md:text-6xl xl:text-[74px] font-medium xl:leading-[95px] max-w-5xl'>Where there is   
<span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'> Security </span>there is peace of mind...
        </motion.h1>

        <motion.p 
        initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:1}}
    viewport={{once:true}}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Your Safety Is Our Priority</motion.p>

        <motion.div
        initial={{opacity:0,scale:0.9}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:0.6,delay:1.5}}
    viewport={{once:true}}
        className='relative'>
            <img src={assets.security} className='w-full max-w-9xl' alt="" />
            <img src={assets.bgImage1} className='absolute -top-0 -right-10 sm-top-600 sm:left-90 -z-1 dark:hidden'  alt="" />
        </motion.div>
    </div>
  )
}

export default Hero