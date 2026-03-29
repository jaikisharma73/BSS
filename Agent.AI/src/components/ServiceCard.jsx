import React, { useState } from 'react'
import assets from '../assets/assets'
import {motion} from "motion/react"

const ServiceCard = ({service , index}) => {
    const [position,setPosition]=useState({x:0,y:0})
    const [hovered, setHovered] = useState(false)

  return (
    <motion.div 
    initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.15 * index}}
    viewport={{once:true}}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className='relative h-auto overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow=gray-100 dark:shadow-white/10 group'>
        {/* Glowing border sweep on hover */}
        <motion.div
          className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-red-700 via-[#4D8CEE] to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundSize: '200% 100%' }}
          animate={hovered ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Glow blob */}
        <div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-red-500 to-pink-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70' style={{top:position.y - 150 , left: position.x - 150}}/>
            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-black z-10 relative'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full relative'>
                    {/* Icon with pulse on scroll */}
                    <motion.img
                      src={service.icon}
                      className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'
                      alt=""
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                    {/* Shield outline on hover */}
                    <motion.svg
                      viewBox="0 0 40 44"
                      className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hovered ? 0.3 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        d="M20 2 L38 10 V22 C38 34 20 42 20 42 C20 42 2 34 2 22 V10 Z"
                        fill="none"
                        stroke="url(#shieldGrad)"
                        strokeWidth="1.5"
                      />
                    </motion.svg>
                </div>
                <motion.div 
                initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.4}}
    viewport={{once:true}}
                className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                    
                    <motion.a
                      href="https://api.whatsapp.com/send?phone=+918840390443&text=Hey there! I want to Book Security"
                      target="_blank"
                      className='text-sm mt-4 w-50 flex items-center gap-2 bg-red-700 text-white px-6 py-2 rounded-full cursor-pointer transition-all'
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(174,28,28,0.4)' }}
                      whileTap={{ scale: 0.95 }}
                    >
           Book On Whatsapp <img src={assets.arrow_icon} width={8} alt="" />
          </motion.a>
                </motion.div>

            </div>
        </motion.div>
  )
}

export default ServiceCard