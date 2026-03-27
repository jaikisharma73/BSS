import React, { useState } from 'react'
import assets from '../assets/assets'
import {motion} from "motion/react"

const ServiceCard = ({service , index}) => {
    const [position,setPosition]=useState({x:0,y:0})
  return (
    <motion.div 
    initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.4}}
    viewport={{once:true}}
    className='relative h-auto overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow=gray-100 dark:shadow-white/10'>
        <div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-red-500 to-pink-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70' style={{top:position.y - 150 , left: position.x - 150}}/>
            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-black z-10 relative'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' alt="" />
                </div>
                <motion.div 
                initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.4}}
    viewport={{once:true}}
                className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                    
                    <a href="https://api.whatsapp.com/send?phone=+919450221034&text=Hey there! I want to Book Security" target="_blank" className='text-sm mt-4 w-50 flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
           Book On Whatsapp <img src={assets.arrow_icon} width={8} alt="" />
          </a>
                </motion.div>

            </div>
        </motion.div>
  )
}

export default ServiceCard