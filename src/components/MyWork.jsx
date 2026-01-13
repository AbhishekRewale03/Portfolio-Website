import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const MyWork = () => {

    const workData = [
        {
            title: 'Zentry – Animated Gaming Website',
            description: 'Interactive gaming website with animations built using React.js and Tailwind CSS.',
            image: assets.zentry,
            link: 'https://zentry-animated-gaming-website.vercel.app/'
        },
        {
            title: 'Tomato – Food Delivery Website',
            description: 'Responsive food delivery frontend app with dynamic menus using React.js.',
            image: assets.tomato,
            link: 'https://tomato-food-delivery-sigma.vercel.app/'
        },
        // {
        //     title: 'Portfolio Website',
        //     description: 'We help you create a marketing strategy that drives results.',
        //     image: assets.work_fitness_app
        // },
    ]

  return (
    <motion.div 
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    id='my-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='My latest work' desc='A collection of thoughtfully crafted projects that highlight my frontend skills and focus on user experience.'/>

    <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=>(
                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                       <img src={work.image} className='w-full border-2 border-gray-300 rounded-xl hover:scale-105 duration-500 transition-all cursor-pointer' alt={work.title} />
                    </a>
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </motion.div>
            ))
        }
    </div>

    </motion.div>
  )
}

export default MyWork
