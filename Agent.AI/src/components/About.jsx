import React from 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'
import Title from './Title'
import { ShieldBadge, FloatingSecurityIcons } from './SecurityAnimations'

const About = () => {
  return (
     <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />

        {/* Floating security icons */}
        <FloatingSecurityIcons count={8} />

         <motion.div
           initial={{opacity:0,y:30}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.8}}
           viewport={{once:true}}
           className="flex items-center gap-3"
         >
           <ShieldBadge size={44} />
           <h1 className='text-3xl -mt-17 -mb-5 sm:text-5xl font-medium'>
             About<span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'> Us</span>
           </h1>
           <ShieldBadge size={44} />
         </motion.div>

         {/* Staggered paragraph reveal */}
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={{
             hidden: {},
             visible: { transition: { staggerChildren: 0.15 } }
           }}
           className="w-full px-4 sm:px-8 lg:px-16"
         >
           {[
             <><strong>BSS 4 Security and Manpower Service</strong> is a trusted and professional security solutions provider committed to safeguarding people, property, and businesses with integrity and excellence. We specialize in delivering highly trained security personnel and reliable manpower services tailored to meet the unique needs of residential, commercial, industrial, and institutional clients.</>,
             <>With a strong focus on discipline, vigilance, and rapid response, our team is carefully selected and professionally trained to handle diverse security challenges. From on-site guarding and event security to facility management and manpower deployment, we ensure dependable services that create safe and secure environments for our clients.</>,
             <>At BSS 4 Security and Manpower Service, we believe that safety is not just a service — it is a responsibility. Our commitment to quality, professionalism, and customer satisfaction drives us to maintain the highest standards in the security industry.</>,
           ].map((text, i) => (
             <motion.p
               key={i}
               variants={{
                 hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                 visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
               }}
               transition={{ duration: 0.6 }}
               className="text-sm sm:text-base lg:text-lg font-medium text-gray-600 dark:text-white/80 pb-4 leading-relaxed"
             >
               {text}
             </motion.p>
           ))}

           {/* Mission, Vision, Values with animated reveal */}
           {[
             { title: '🎯 Our Mission', text: 'To provide reliable, efficient, and cost-effective security and manpower solutions that ensure safety, peace of mind, and operational excellence for every client.' },
             { title: '🔭 Our Vision', text: 'To become a leading security and manpower service provider recognized for professionalism, trust, and service excellence.' },
           ].map((item, i) => (
             <motion.div
               key={i}
               variants={{
                 hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
                 visible: { opacity: 1, x: 0 }
               }}
               transition={{ duration: 0.6 }}
               className="mb-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
             >
               <h3 className="font-bold text-base mb-1">{item.title}</h3>
               <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed">{item.text}</p>
             </motion.div>
           ))}

           <motion.div
             variants={{
               hidden: { opacity: 0, scale: 0.95 },
               visible: { opacity: 1, scale: 1 }
             }}
             transition={{ duration: 0.6 }}
             className="mb-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
           >
             <h3 className="font-bold text-base mb-2">🛡️ Our Core Values</h3>
             <div className="flex flex-wrap gap-2">
               {['Integrity and Trust', 'Professional Excellence', 'Client Satisfaction', 'Quick Response & Reliability', 'Continuous Training & Development'].map((val, i) => (
                 <motion.span
                   key={i}
                   variants={{
                     hidden: { opacity: 0, scale: 0 },
                     visible: { opacity: 1, scale: 1 }
                   }}
                   transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                   className="text-xs px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium"
                 >
                   ✓ {val}
                 </motion.span>
               ))}
             </div>
           </motion.div>

           <motion.p
             variants={{
               hidden: { opacity: 0, y: 10 },
               visible: { opacity: 1, y: 0 }
             }}
             transition={{ duration: 0.5 }}
             className="text-sm sm:text-base lg:text-lg font-bold text-gray-700 dark:text-white pb-6"
           >
             Your Safety is Our Priority. 🛡️
           </motion.p>
         </motion.div>
    </div>
  )
}

export default About