import React from 'react'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import { motion } from "motion/react"

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
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-5xl font-medium'
      >
        Get In <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'>Touch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className='text-sm text-gray-500 dark:text-gray-400 text-center max-w-lg -mt-3'
      >
        Whether you're hiring our guards, looking for a job, or just have a question — we're here to help.
      </motion.p>

      {/* Quick contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center gap-4 w-full max-w-2xl'
      >
        <a href='tel:+918840390443' className='flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 hover:border-red-500 transition-colors bg-white dark:bg-gray-900 shadow-sm hover:shadow-md'>
          <span className='text-xl'>📞</span>
          <div>
            <p className='text-xs text-gray-400 dark:text-gray-500'>Call Us</p>
            <p className='text-sm font-semibold text-gray-800 dark:text-white'>+91 88403 90443</p>
          </div>
        </a>
        <a href='https://api.whatsapp.com/send?phone=+918840390443&text=Hey there!' target='_blank' className='flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 hover:border-green-500 transition-colors bg-white dark:bg-gray-900 shadow-sm hover:shadow-md'>
          <span className='text-xl'>💬</span>
          <div>
            <p className='text-xs text-gray-400 dark:text-gray-500'>WhatsApp</p>
            <p className='text-sm font-semibold text-gray-800 dark:text-white'>Message Us</p>
          </div>
        </a>
        <a href='mailto:bss4.secure@gmail.com' className='flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 hover:border-blue-500 transition-colors bg-white dark:bg-gray-900 shadow-sm hover:shadow-md'>
          <span className='text-xl'>📧</span>
          <div>
            <p className='text-xs text-gray-400 dark:text-gray-500'>Email</p>
            <p className='text-sm font-semibold text-gray-800 dark:text-white'>bss4.secure@gmail.com</p>
          </div>
        </a>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
            <img src={assets.person_icon} alt='' />
            <input type='text' name='name' placeholder='Enter Your Name' className='w-full p-3 text-sm outline-none bg-transparent' required />
          </div>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium'>Contact Number</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
            <span className='self-center text-gray-500 text-sm'>📞</span>
            <input type='tel' name='number' placeholder='Enter Your Number' className='w-full p-3 text-sm outline-none bg-transparent' required />
          </div>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium'>Email ID</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
            <img src={assets.email_icon} alt='' />
            <input type='email' name='email' placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none bg-transparent' required />
          </div>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium'>Purpose</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
            <span className='self-center text-gray-500 text-sm'>🎯</span>
            <select name='purpose' className='w-full p-3 text-sm outline-none bg-transparent text-gray-700 dark:text-white' required>
              <option value=''>Select purpose...</option>
              <option value='Hiring Guards'>Hire Security Guards</option>
              <option value='Event Security'>Event / Bouncer Booking</option>
              <option value='Apply for Job'>Apply for a Job</option>
              <option value='General Inquiry'>General Inquiry</option>
            </select>
          </div>
        </div>
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message / Requirements</p>
          <textarea rows={5} name='message' placeholder='Describe your security requirements or career interest…' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 resize-none' />
        </div>
        <button type='submit' className='w-max flex gap-2 bg-gradient-to-r from-red-700 to-[#4D8CEE] text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
          Submit <img src={assets.arrow_icon} alt='' className='w-3' />
        </button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs