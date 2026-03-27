import React from 'react'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import {motion} from "motion/react"

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
    if(data.success){
    toast.success('Thank You For Your Submission!')
    event.target.reset();
    }else{
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
    transition={{staggerChildren:0.2}}
    viewport={{once:true}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <motion.h1 
        initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5}}
    viewport={{once:true}}
        className='text-3xl sm:text-5xl font-medium'>Fill out the form to get <span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'> Hired </span></motion.h1>

        <motion.form 
        initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.4}}
    viewport={{once:true}}
        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" name='name' placeholder='Enter Your Name'  className='w-full p-3 text-sm outline-none' required />
                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Your Contact Number</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <input type="number" name='number' placeholder='Enter Your Number'  className='w-full p-3 text-sm outline-none' required />
                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email" name='email' placeholder='Enter Your Email'  className='w-full p-3 text-sm outline-none' required />
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium' name="message">Your Role</p>
                <textarea rows={8}  name='message' placeholder='Enter Your Role' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/>
            </div>
            <button type='submit' className='w-max flex gap-2 bg-red-700 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit <img src={assets.arrow_icon} alt="" className='w-3' />
            </button>
        </motion.form>

    </motion.div>
  )
}

export default ContactUs