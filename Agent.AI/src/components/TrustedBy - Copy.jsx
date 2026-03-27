import React from 'react'
import { company_logos } from '../assets/assets'
import {motion} from "motion/react"

const TrustedBy = () => {
  return (
    <motion.div 
    initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8}}
    viewport={{once:true}}
    className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-5 text-gray-700 dark:text-white/80'>
        <motion.h3
         initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5}}
    viewport={{once:true}}
     className='font-semibold'>Trusted by Leading Companies</motion.h3>
        <motion.div
        initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.15}}
    viewport={{once:true}}
        className='flex items-center justify-center flex-wrap gap-15 m-4'>
            {company_logos.map((logo, index)=>(
                <motion.img
                variants={{
                    hidden:{opacity:0,y:10},
                    visible:{opacity:1,y:0},
                }}
                transition={{duration:0.5}}
                key={index} src={logo} alt="" className='max-h-4 sm:max-h-5 dark:drop-shadow-xl'/>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default TrustedBy