import React from 'react'
import { motion } from "motion/react"
import Title from './Title'
import sec1 from '../assets/sec1.jpeg'
import sec2 from '../assets/sec2.jpeg'
import sec3 from '../assets/sec3.jpeg'
import sec4 from '../assets/sec4.jpeg'

const galleryData = [
  {
    id: 1,
    title: "Event Security",
    description: "Professional security personnel ensuring the safety of large scale events and gatherings.",
    image: sec1
  },
  {
    id: 2,
    title: "Corporate Protection",
    description: "Discrete and effective security solutions for corporate offices and executive protection.",
    image: sec2
  },
  {
    id: 3,
    title: "Surveillance Systems",
    description: "State-of-the-art monitoring and CCTV systems with 24/7 technical support.",
    image: sec3
  },
  {
    id: 4,
    title: "Access Control",
    description: "Advanced biometric and card-based access control systems for secure facilities.",
    image: sec4
  },
  {
    id: 5,
    title: "Mobile Patrol",
    description: "Rapid response mobile units providing neighborhood and perimeter security checks.",
    image: sec1
  },
  {
    id: 6,
    title: "VIP Escort",
    description: "Close protection services ensuring secure transportation and personal safety.",
    image: sec2
  }
];

const Gallery = () => {
  return (
    <div id="gallery" className='py-20 px-4 sm:px-12 lg:px-24 xl:px-40 flex flex-col items-center dark:bg-black dark:text-white transition-colors duration-300'>
      <Title title="Our Gallery" desc="Take a look at our professional security services in action." />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12'>
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className='bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800'
          >
            <div className='relative overflow-hidden group h-80'>
              <motion.img
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110'
              />
              {/* Overlay for Desktop */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 hidden lg:flex flex-col justify-end p-6 transition-opacity duration-300'>
                <h3 className='text-white font-bold text-xl mb-1'>{item.title}</h3>
                <p className='text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100'>{item.description}</p>
              </div>
            </div>

            {/* Always visible on mobile/tablet */}
            <div className='p-6 lg:hidden'>
              <h3 className='font-bold text-xl mb-2 text-gray-900 dark:text-white'>{item.title}</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
