import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const Footer = ({theme}) => {
  return (
    <motion.div className='mt-20 px-4 sm:px-12 lg:px-24 xl:px-24'>

      <hr className='border-gray-300 dark:border-gray-600  my-6'/>

      {/* footer bottom */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className='pb-6 text-sm text-gray-500 flex justify-center '>
        <p>Copyright 2025 © Abhishek - All Right Reserved.</p>
        {/* <div className='flex items-center justify-between gap-4'>
            
            <img src={assets.linkedin_icon} alt="" />
        </div> */}
      </motion.div>
    </motion.div>
  )
}

export default Footer
