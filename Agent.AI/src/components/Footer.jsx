import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"
import { SecurityParticles } from './SecurityAnimations'

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className='relative bg-slate-49 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 overflow-hidden'>

      {/* Floating security particles */}
      <SecurityParticles count={25} />

      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10 relative z-10'>
        <div className='space-y-5 h-auto w-auto text-sm text-gray-700 dark:text-gray-400'>
          <motion.img
            src={theme === 'dark' ? assets.logos : assets.logos}
            className='h-15 w-auto sm:h-25'
            alt=""
            whileHover={{ scale: 1.05 }}
          />
          <p className='max-w-md'>Need security for an event? We help you hire verified guards and professional bouncers quickly and easily</p>
          <ul className='flex flex-wrap gap-4 sm:gap-6'>
            <li><a className='footer-link-sweep hover:text-red-700' href="#hero">Home</a></li>
            <li><a className='footer-link-sweep hover:text-red-700' href="#services">Services</a></li>
            <li><a className='footer-link-sweep hover:text-red-700' href="#careers">Careers</a></li>
            <li><a className='footer-link-sweep hover:text-red-700' href="#network">Network</a></li>
            <li><a className='footer-link-sweep hover:text-red-700' href="#contact-us">Contact</a></li>
          </ul>
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          <h3 className='font-semibold'>Get in Touch with BSS-4</h3>
          <p className='text-sm mt-2 mb-6'>We're available for security bookings, manpower requests, and job applications.</p>
          <div className='flex gap-2 text-sm'>
            <h3 className='font-semibold w-50 p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent '>bss4.secure@gmail.com</h3>
            <motion.a
              href="mailto:bss4.secure@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(174,28,28,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <button className='bg-red-700 text-white rounded px-6 h-full'>Mail</button>
            </motion.a>
          </div>

        </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap relative z-10'>
        <p>Copyright 2026 © BSS 4 Security & Manpower Service - All Rights Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          <motion.a
            href="https://www.instagram.com/bss4.secure?igsh=MTZjYWcwNTk0bzR1dw=="
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={assets.instagram_icon} alt="" />
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={assets.facebook_icon} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer