import React from 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'
import Title from './Title'

const About = () => {
  return (
     <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
         <motion.h1 
        initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8}}
    viewport={{once:true}}
        className='text-3xl -mt-17 -mb-5 sm:text-5xl font-medium' >About<span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'> Us</span></motion.h1>
        <motion.p 
  initial={{opacity:0,y:30}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.5,delay:1}}
  viewport={{once:true}}
  className="w-full px-4 sm:px-8 lg:px-16 text-sm sm:text-base lg:text-lg font-medium text-gray-600 dark:text-white/80 pb-6 leading-relaxed"
>
  <strong>BSS 4 Security and Manpower Service</strong> is a trusted and professional security solutions provider committed to safeguarding people, property, and businesses with integrity and excellence. We specialize in delivering highly trained security personnel and reliable manpower services tailored to meet the unique needs of residential, commercial, industrial, and institutional clients.

  <br /><br />

  With a strong focus on discipline, vigilance, and rapid response, our team is carefully selected and professionally trained to handle diverse security challenges. From on-site guarding and event security to facility management and manpower deployment, we ensure dependable services that create safe and secure environments for our clients.

  <br /><br />

  At BSS 4 Security and Manpower Service, we believe that safety is not just a service — it is a responsibility. Our commitment to quality, professionalism, and customer satisfaction drives us to maintain the highest standards in the security industry.

  <br /><br />

  <strong>Our Mission</strong><br />
  To provide reliable, efficient, and cost-effective security and manpower solutions that ensure safety, peace of mind, and operational excellence for every client.

  <br /><br />

  <strong>Our Vision</strong><br />
  To become a leading security and manpower service provider recognized for professionalism, trust, and service excellence.

  <br /><br />

  <strong>Our Core Values</strong><br />
  • Integrity and Trust<br />
  • Professional Excellence<br />
  • Client Satisfaction<br />
  • Quick Response & Reliability<br />
  • Continuous Training & Development

  <br /><br />

  <strong>Your Safety is Our Priority.</strong>
</motion.p>


    </div>
  )
}

export default About