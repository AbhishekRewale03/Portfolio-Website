import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div
    initial={{opacity: 0, y: -50}}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      
        {/* <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 md:w-40' alt=''/> */}
        <img src={theme === 'dark' ? assets.logo_golden : assets.logo_blue} className='w-15 h-9' alt=''/>

        <div className={`text-gray-700 dark:text-white md:text-sm ${!sidebarOpen ? 'max-md:w-0 overflow-hidden' : 'max-md:w-60 max-md:pl-10'}
                         max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-primary max-md:text-white 
                         max-md:pt-20 flex md:items-center gap-10 transition-all`}>

            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 md:hidden' onClick={()=> setSidebarOpen(false)}/>

            <a onClick={()=>setSidebarOpen(false)} href="#" className='md:hover:border-b'>Home</a>
            <a onClick={()=>setSidebarOpen(false)} href="#about_me" className='md:hover:border-b'>About me</a>
            <a onClick={()=>setSidebarOpen(false)} href="#services" className='md:hover:border-b'>Services</a>
            <a onClick={()=>setSidebarOpen(false)} href="#my-work" className='md:hover:border-b'>Projects</a>
            
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>

            <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setSidebarOpen(true)} className='w-8 md:hidden'/>

            <a href="#contact-us" className='text-sm max-md:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Connect <img src={assets.arrow_icon} width={14} alt="" />
            </a>
        </div>

    </motion.div>
  )
}

export default Navbar
