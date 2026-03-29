import React from 'react'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import { motion } from "motion/react"
import { ShieldBadge, FloatingSecurityIcons, ScanLine } from './SecurityAnimations'

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ab4d4b2a-dfef-449e-9c3f-35f3e8004057");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Thank You For Your Submission!')
        event.target.reset();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='contact-us'
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <FloatingSecurityIcons count={6} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='flex items-center gap-3'
      >
        <ShieldBadge size={44} />
        <h1 className='text-3xl sm:text-5xl font-medium'>
          Get In <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>Touch</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className='text-sm text-gray-500 dark:text-gray-400 text-center max-w-lg -mt-3'
      >
        Whether you're hiring our guards, looking for a job, or just have a question — we're here to help.
      </motion.p>

      {/* Quick contact info with hover effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center gap-4 w-full max-w-2xl'
      >
        {[
          {
            href: 'tel:+918840390443',
            icon: '📞',
            label: 'Call Us',
            value: '+91 88403 90443',
            hoverColor: 'hover:border-red-500 hover:shadow-red-500/20',
          },
          {
            href: 'https://api.whatsapp.com/send?phone=+918840390443&text=Hey there!',
            target: '_blank',
            icon: '💬',
            label: 'WhatsApp',
            value: 'Message Us',
            hoverColor: 'hover:border-green-500 hover:shadow-green-500/20',
          },
          {
            href: 'mailto:bss4.secure@gmail.com',
            icon: '📧',
            label: 'Email',
            value: 'bss4.secure@gmail.com',
            hoverColor: 'hover:border-blue-500 hover:shadow-blue-500/20',
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target={item.target}
            className={`flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 transition-all bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg ${item.hoverColor} group relative overflow-hidden`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Lock opening animation on hover */}
            <motion.span
              className='text-xl'
              whileHover={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.4 }}
            >
              {item.icon}
            </motion.span>
            <div>
              <p className='text-xs text-gray-400 dark:text-gray-500'>{item.label}</p>
              <p className='text-sm font-semibold text-gray-800 dark:text-white'>{item.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <ScanLine />

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >
        {[
          { label: 'Your Name', type: 'text', name: 'name', placeholder: 'Enter Your Name', icon: <img src={assets.person_icon} alt='' /> },
          { label: 'Contact Number', type: 'tel', name: 'number', placeholder: 'Enter Your Number', icon: <span className='self-center text-gray-500 text-sm'>📞</span> },
          { label: 'Email ID', type: 'email', name: 'email', placeholder: 'Enter Your Email', icon: <img src={assets.email_icon} alt='' /> },
        ].map((field, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <p className='mb-2 text-sm font-medium'>{field.label}</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus-within:border-red-500 dark:focus-within:border-red-500 transition-colors'>
              {field.icon}
              <input type={field.type} name={field.name} placeholder={field.placeholder} className='w-full p-3 text-sm outline-none bg-transparent' required />
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className='mb-2 text-sm font-medium'>Purpose</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus-within:border-red-500 dark:focus-within:border-red-500 transition-colors'>
            <span className='self-center text-gray-500 text-sm'>🎯</span>
            <select name='purpose' className='w-full p-3 text-sm outline-none bg-transparent text-gray-700 dark:text-white' required>
              <option value=''>Select purpose...</option>
              <option value='Hiring Guards'>Hire Security Guards</option>
              <option value='Event Security'>Event / Bouncer Booking</option>
              <option value='Apply for Job'>Apply for a Job</option>
              <option value='General Inquiry'>General Inquiry</option>
            </select>
          </div>
        </motion.div>
        <motion.div
          className='sm:col-span-2'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className='mb-2 text-sm font-medium'>Message / Requirements</p>
          <textarea rows={5} name='message' placeholder='Describe your security requirements or career interest…' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 resize-none focus:border-red-500 dark:focus:border-red-500 transition-colors' />
        </motion.div>
        <motion.button
          type='submit'
          className='w-max flex gap-2 bg-gradient-to-r from-red-700 to-[#4D8CEE] text-white text-sm px-10 py-3 rounded-full cursor-pointer animate-cta-pulse'
          whileHover={{ scale: 1.08, boxShadow: '0 0 25px rgba(174,28,28,0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Submit <img src={assets.arrow_icon} alt='' className='w-3' />
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs