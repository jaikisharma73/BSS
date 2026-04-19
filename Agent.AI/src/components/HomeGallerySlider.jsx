import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'
import Title from './Title'

const sliderImages = [
    "https://images.unsplash.com/photo-1541888031535-715ac9ebf16a?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621252179027-94459d278660?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800&auto=format&fit=crop&q=80",
];

const HomeGallerySlider = () => {
    // We duplicate images to make the loop seamless
    const duplicatedImages = [...sliderImages, ...sliderImages];

    return (
        <div className="py-20 flex flex-col items-center dark:bg-black dark:text-white overflow-hidden relative mb-9">
            <div className="mb-12">
                <Title title={<>See our work and <span className="bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent">Gallery</span></>} desc="A glimpse into how we secure your world." />
            </div>

            <div className="w-full mt-12 overflow-hidden flex relative group">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 h-full w-12 sm:w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-12 sm:w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-4 sm:gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                    {duplicatedImages.map((img, i) => (
                        <div key={i} className="w-[260px] sm:w-[400px] h-[200px] sm:h-[250px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                            <img src={img} alt="Security gallery slide" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-12 z-20">
                <Link to="/gallery">
                    <motion.button
                        className="bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg text-sm sm:text-base flex items-center gap-2"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(174,28,28,0.4)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See our work and gallery <span>→</span>
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export default HomeGallerySlider
