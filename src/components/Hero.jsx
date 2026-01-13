import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"
import { PiDownloadSimpleLight } from 'react-icons/pi'

const Hero = ({theme}) => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6  py-10 px-4 sm:px-12 lg:px-24 xl:px-24 text-center w-full  overflow-hidden text-gray-700 dark:text-white'>

      

        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        // className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='text-purple-500'>User Experiences</span></motion.h1>
        className='text-4xl mt-10 sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Hi ! I'm Abhishek <br /><span className='text-purple-500'>A Frontend Developer</span></motion.h1>

       

        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1}}
        viewport={{ once: true }}
        
        className='relative mt-6 p-4'>
            <img src={theme === "dark" ? assets.avatar2 : assets.avatar6} alt="" className='w-full max-h-100  max-w-xs
             sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-transparent '/>
            {/* <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/> */}
        </motion.div>

        
      
    </div>
  )
  
}

export default Hero
