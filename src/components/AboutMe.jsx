import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { RiCodeSSlashFill } from "react-icons/ri";
import { PiDownloadSimpleLight } from "react-icons/pi";

const AboutMe = ({ theme }) => {
  return (
    <div
      id="about_me"
      className="flex flex-col items-center center w-full pb-30 text-gray-700 dark:text-white
                        px-4 sm:px-12 lg:px-24 xl:px-40 pt-30"
    >
      <Title title="About me" />
      <div className="flex flex-col justify-evenly gap-15 mt-8 lg:flex-row">
        <div className=" relative py-4  flex justify-center">
          <img
            src={theme === "dark" ? assets.avatar : assets.avatar_bg_white}
            className=" max-h-100  max-w-xs
                    sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-transparent"
          />
        </div>
        <div className=" py-6 ">
          {/* <p className=' text-justify'>I am a frontend developer with hands-on experience building modern web interfaces using
                        HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on clean UI, reusable components,
                        and performance-friendly code. I am actively seeking an entry-level frontend
                        role where I can contribute to real-world projects and grow with a team.
                    </p>
                    <div className='mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row'>
                        <div className='w-full sm:min-w-45 h-43  p-5 flex flex-col flex-1 gap-3 border border-gray-500 dark:border-gray-500 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl'>
                            <img src={theme=== "dark"? assets.code_icon_dark:assets.code_icon} alt="" 
                            className='w-6 h-6 '/>
                            <h1 className='font-bold text-black  dark:text-white'><b>Languages</b></h1>
                            <p className='text-sm opacity-90 text-gray-700 dark:text-white' >HTML, CSS, JS, React.Js, Bootstrap, Tailwind CSS</p>
                        </div>
                        <div className='w-full sm:min-w-45 h-43  p-5 flex flex-col flex-1 gap-3 border border-gray-500 dark:border-gray-500 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl'>
                            <img src={theme=== "dark"? assets.edu_icon_dark:assets.edu_icon} alt="" 
                            className='w-6 h-6'/>
                            <h1 className='font-bold text-black  dark:text-white'><b>Education</b></h1>
                            <p className='text-sm opacity-90 text-gray-700 dark:text-white' >BSC In Computer Science <br />CGPA : 8.23</p>
                        </div>
                        <div className='w-full sm:min-w-45 h-43  p-5 flex flex-col flex-1 gap-3 border border-gray-500 dark:border-gray-500 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl'>
                            <img src={theme=== "dark"? assets.projects_icon_dark:assets.projects_icon} alt="" 
                            className='w-6 h-6'/>
                            <h1 className='font-bold text-black  dark:text-white'><b>Projects</b></h1>
                            <p className='text-sm opacity-90 text-gray-700 dark:text-white' >Built more than 3 projects</p>
                        </div>
                    </div> */}
          <p className="text-justify">
            I am a frontend developer with experience building production-ready,
            data-driven web applications using Next.js, React, and TypeScript. I
            specialize in developing scalable dashboards, translating Figma
            designs into pixel-perfect UI, and creating responsive,
            high-performance interfaces. I have worked on real-world projects in
            a live environment and continuously focus on improving user
            experience and product quality.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <div className="w-full sm:min-w-45 h-50 p-5 flex flex-col flex-1 gap-3 border border-gray-500 dark:border-gray-500 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl">
              <img
                src={
                  theme === "dark" ? assets.code_icon_dark : assets.code_icon
                }
                alt=""
                className="w-6 h-6 "
              />
              <h1 className="font-bold text-black dark:text-white">
                Languages & Tech
              </h1>
              <p className="text-sm opacity-90 text-gray-700 dark:text-white">
                JavaScript (ES6+), TypeScript, React.js, Next.js, HTML5, CSS3,
                Tailwind CSS
              </p>
            </div>

            <div className="w-full sm:min-w-45 h-50 p-5 flex flex-col flex-1 gap-3 border border-gray-500 dark:border-gray-500 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl">
              <img
                src={theme === "dark" ? assets.edu_icon_dark : assets.edu_icon}
                alt=""
                className="w-6 h-6"
              />
              <h1 className="font-bold text-black dark:text-white">
                Education
              </h1>
              <p className="text-sm opacity-90 text-gray-700 dark:text-white">
                BSc Computer Science <br /> CGPA: 8.21
              </p>
            </div>

            <div className="w-full sm:min-w-45 h-50 p-5 flex flex-col flex-1 gap-3 border border-gray-500 dark:border-gray-500 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl">
              <img
                src={
                  theme === "dark"
                    ? assets.projects_icon_dark
                    : assets.projects_icon
                }
                alt=""
                className="w-6 h-6"
              />
              <h1 className="font-bold text-black dark:text-white">Key Work</h1>
              <p className="text-sm opacity-90 text-gray-700 dark:text-white">
                Built finance dashboard, analytics systems, and interactive UI
                with real-world workflows
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-7 mt-10">
            <a
              href="#contact-us"
              className="text-sm  flex items-center gap-2 bg-primary text-white py-3 px-5 rounded-full cursor-pointer hover:scale-103 transition-all"
            >
              Connect <img src={assets.arrow_icon} width={14} alt="" />
            </a>
            <a
              href="/public/Abhishek Rewale resume.pdf"
              download
              className="text-sm  flex items-center gap-2  text-black dark:text-white  border border-black dark:border-gray-400 py-3 px-4 rounded-full cursor-pointer hover:scale-103 transition-all"
            >
              my resume <PiDownloadSimpleLight className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
