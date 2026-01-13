import React from 'react'
import { techs } from '../assets/assets'
import { motion } from "motion/react"
import Title from './Title'

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-5   text-gray-700 dark:text-white'>
      <Title title={'Tech Stack'}/>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className='flex items-center justify-center flex-wrap gap-10 m-4'>
        {techs.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-3 rounded-2xl shadow-md border border-gray-200"
          >
            <Icon className={`${color} text-4xl sm:text-5xl`} />
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
  )
}

export default TechStack