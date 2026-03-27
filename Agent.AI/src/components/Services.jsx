import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from "motion/react"

const Services = () => {
    const servicesData =[
        {
            title:'Security Guards',
            description:'Security guards protect people and property by monitoring premises and preventing unauthorized activities.',
            icon:assets.ads_icon
        },
        {
            title:'Event Bouncers',
            description:'Event bouncers control crowds and maintain safety by managing entry and preventing disturbances.',
            icon:assets.marketing_icon
        },
        {
            title:'Corporate Security',
            description:'Corporate security protects offices and businesses through controlled access and safe environments.',
            icon:assets.ads_icon
        },
        {
            title:'Office Security',
            description:'Office security ensures workplace safety through surveillance, access control, guards.',
            icon:assets.marketing_icon
        },
        {
            title:'Residential/Society Security',
            description:'Residential security protects communities through guards, surveillance, access control.',
            icon:assets.ads_icon
        },
        {
            title:'Industrial Security & Office Boy',
            description:'Industrial security and office boy services ensure workplace safety, support.',
            icon:assets.marketing_icon
        },
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
        {/* <Title title='How can we help ?'  desc='Share your event size, location, and security requirements — our team will arrange trusted security personnel to protect and manage your event smoothly.'/>  */}
         <motion.h1 
        initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.8}}
    viewport={{once:true}}
        className='text-3xl sm:text-5xl font-medium'>How can we<span className='bg-gradient-to-r from-[#ae1c1c] to-[#4D8CEE] bg-clip-text text-transparent'> Help ? </span></motion.h1>
        <Title desc='Share your event size, location, and security requirements — our team will arrange trusted security personnel to protect and manage your event smoothly.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service ,index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>

    </div>
  )
}

export default Services