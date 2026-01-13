import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'

const Services = () => {

    const servicesData = [
        
        {
          title: 'UI Implementation',
          description: 'Converting Figma and design systems into pixel-perfect, production-ready web interfaces.',
          icon: assets.marketing_icon
        },
        {
            title: 'API Integration',
            description: 'Integrating REST APIs, handling async data, loading states, and error handling for real-world applications.',
            icon: assets.content_icon,
        },
        {
            title: 'Performance & UX',
            description: 'Optimizing performance, improving UX, and ensuring smooth interactions across all devices.',
            icon: assets.social_icon,
        },
        {
          title: 'Deployment',
          description: 'Deploying applications using Vercel and Netlify with environment configuration.',
          icon: assets.ads_icon
        },
        
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title title='How I add value?' desc= ' From design to code, I build interactive and responsive web experiences.'/>

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>

    </motion.div>
  )
}

export default Services
