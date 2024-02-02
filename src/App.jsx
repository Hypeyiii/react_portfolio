'use client';
import './App.css'
import './index.css'
import avatar from './assets/avatar.jpg'
import ButtonCompany from './Components/Button'
import { RiMenuUnfoldFill, RiMenuFoldLine  } from "react-icons/ri";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { TbLanguageOff, TbLanguage } from "react-icons/tb";
import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight} from 'react-icons/hi';
import { IoMdSchool } from "react-icons/io";
import { useState, useEffect } from 'react'

function App() {
  const [isMenu, setIsMenu] = useState(false)

  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const [languageMode, setLanguageMode] = useState(false)

  const handleLanguage = () => {
    setLanguageMode(!languageMode);
  }

  const [isMobile, setisMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleSize = () => {
      setisMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  const handleMenuModal = () => {
    setIsMenu(!isMenu);
    document.querySelector('.menu').classList.toggle('hidden');
  }

  return (
    <>
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full ">
      {darkMode ?
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-50 to-gray-900"></div>     
        :
        <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-600 via-gray-950 to-gray-600"></div></div>
      }
      
      </div>
    </div>
    <div className={`z-50 fixed top-0 md:right-0 md:left-0 mx-auto w-[350px] sm:w-[500px] md:w-[700px]
                   ${isMobile ? 'mt-0': 'mt-5'}`}>
      <div className='mx-auto  flex items-start md:items-center justify-start md:justify-center
         font-medium'>
        {isMobile ?
        <>
          <button className={`absolute z-40 transition-all duration-300 
                  ${isMobile ? "p-4" : "p-0"} ${isMenu ? "" : " bg-black/30 bg-opacity-50"} ${darkMode ? "text-black bg-white/30" : "text-white/85 bg-black/30"}`}
                   onClick={handleMenuModal}>
            {isMenu ? <RiMenuFoldLine className='size-6'/> : <RiMenuUnfoldFill className='size-6'/>}
          </button> 
            <div className='entrance menu h-screen w-screen hidden fixed'
              onClick={handleMenuModal}>
                <div className="fixed inset-0 bg-black opacity-70 h-screen"></div>
                  <ul className={`flex flex-col gap-y-4 text-lg items-center justify-center absolute top-0 right-0 bottom-0 left-0 text-white/85`}>
                    <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                    active:scale-105 active:duration-0'>
                      {languageMode ? "Home" : "Inicio"}
                      </li></a>
                    <a href="#education"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                      active:scale-105 active:duration-75'>
                        {languageMode ? "Education" : "Educación"}
                      </li></a>
                    <a href="#technologies"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                      active:scale-105 active:duration-75'>
                          {languageMode ? "Technologies" : "Tecnologias"}
                        </li></a>
                    <a href="#projects"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                    active:scale-105 active:duration-75'>
                        {languageMode ? "Projects" : "Proyectos"}
                      </li></a>
                    <a href="#darkmode">
                      <li className='md:hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
                        active:duration-75' onClick={handleDarkMode}>
                          {darkMode ? 
                          <MdDarkMode className='size-6'/> : <MdOutlineDarkMode className='size-6'/>
                          }
                      </li>
                    </a>
                    <a href="#language">
                      <li className='md:hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
                      active:duration-75' onClick={handleLanguage} id='language'>
                        {languageMode ?
                        <TbLanguage className='size-6'/>
                        :
                        <TbLanguageOff className='size-6'/>
                        }
                      </li>
                    </a>
                  </ul>
              </div>
    </>
        :
        <ul className={`backdrop-blur-sm bg-black/30 rounded-full px-2 flex flex-row gap-x-2 md:gap-x-4 text-xs md:text-base items-center justify-center 
                      ${darkMode ? "text-white" : "text-white/85"}`}>
          <a href="#"><li className={`hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
          active:scale-105 active:duration-300`}>
            {languageMode ? "Home" : "Inicio"}
            </li></a>
          <a href="#education"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
            active:scale-105 active:duration-75'>
              {languageMode ? "Education" : "Educación"}
            </li></a>
          <a href="#technologies"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
            active:scale-105 active:duration-75'>
                {languageMode ? "Technologies" : "Tecnologias"}
              </li></a>
          <a href="#projects"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
           active:scale-105 active:duration-75'>
              {languageMode ? "Projects" : "Proyectos"}
            </li></a>
          <a href="#darkmode">
            <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
              active:duration-75' onClick={handleDarkMode}>
                {darkMode ?
                 <MdDarkMode className='size-6'/>
                 :
                 <MdOutlineDarkMode  className='size-6'/>
                 }
            </li>
          </a>
          <a href="#languages">
            <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
            active:duration-75' onClick={handleLanguage} id='language'>
              {languageMode ? 
              <TbLanguage className='size-6'/>
              :
              <TbLanguageOff className='size-6'/>
              }
            </li>
          </a>
        </ul>}
      </div>
    </div>
      <div className='mt-32 flex w-[350px] sm:w-[500px] md:w-[700px] mx-auto flex-col px-2'>
          <img src={avatar} alt="Avatar Logo" className='size-[100px] rounded-full shadow-2xl shadow-white/10'/>
        <div className='text-white mt-5 flex flex-row gap-x-5 md:gap-x-8 items-center justify-start'>
          <h1 className='title font-semibold text-2xl md:text-3xl lg:text-5xl' data-translate='title' id='title'>
            {languageMode ? "Hello, I'm Isaac" : "Hola, Soy Isaac"}
          </h1>
          <button className='p-2 border border-white/20 rounded-lg shadow-lg shadow-white/5 bg-black
           text-white text-xs hover:bg-white/5 transition-all duration-300 md:font-semibold
           active:scale-105 active:duration-75 font-semibold text-white/70 hover:text-white'>
              {languageMode ? "Hire me here" : 'Contrátame aquí'}
           </button>
        </div>
        <div className={`${darkMode ? "text-black" : "text-white/90"} mt-5 font-light text-sm md:text-lg xl:text-xl text-wrap`} data-translate='description'>
          <p>
            {languageMode ? 
            "FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications." 
            :"Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web."
            }
          </p>
          <div className='mt-5 grid grid-cols-3 sm:grid-cols-5 gap-y-2 auto-rows-auto items-center justify-center gap-x-2 md:gap-x-3'>
              <a href="#">
                <ButtonCompany
                className='hover:bg-white'
                contactBy="LinkedIn">
                  <FaLinkedin className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
              </a>
                <a href="#">
                <ButtonCompany
                contactBy="GitHub">
                  <FaGithub  className='size-[15px] ' alt="Icon"/>
                </ButtonCompany>
              </a>
              <a href="#">
                <ButtonCompany
                contactBy="Discord">
                  <FaDiscord className='size-[15px] ' alt="Icon"/>
                </ButtonCompany>
              </a>
              <a href="#">
                <ButtonCompany
                contactBy="Gmail">
                  <BiLogoGmail className='size-[15px] ' alt="Icon"/>
                </ButtonCompany>
              </a>
              <a href="#">
                <ButtonCompany
                contactBy="WhatsApp">
                  <FaWhatsapp className='size-[15px] ' alt="Icon"/>
                </ButtonCompany>
              </a>
          </div>
        </div>
      </div>
      <div id='education' className='flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] px-2 mt-32 mb-32'>
        <div className={`flex flex-row gap-x-2 mb-8 items-center justify-center ${darkMode ? "text-black/90" : "text-white/90"}`}>
        <IoMdSchool className='size-8'/>
          <h2 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
            {languageMode ? "Education and Experience" : "Educación y Experiencia"}
          </h2>
        </div>
        <Timeline className='text-black ml-[6px]'>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className={`text-xs md:text-xl ${darkMode ? "text-black/80" : "text-white/80"}`}>
              {languageMode ? "Currently..." : "Actualmente..."}
            </Timeline.Time>
            <Timeline.Title className={`text-base md:text-2xl ${darkMode ? "text-black" : "text-white"}`}>
              {languageMode ? "Developer and Student" : "Desarrollador y Estudiante"}
            </Timeline.Title>
            <Timeline.Body className={`text-sm md:text-lg ${darkMode ? "text-black/70" : "text-white/70"}`}>
              {languageMode ? 
              "Studying the 6th semester in the Systems Administrator Engineer career. Developing websites in a didactic and passionate way."
              :
              "Cursando 6to semestre en la carrera de Ingeniero Administrador de Sistemas (IAS). Desarrollando Web´ s de manera didactica y apasionada."
             }
            </Timeline.Body>
            <button className='flex flex-row gap-x-2 items-center justify-center p-2 bg-black border border-white/20 hover:bg-white/5 rounded-xl
            transition-all duration-300 text-white/60 hover:text-white active:scale-105 active:duration-75 text-xs md:text-sm'>
              {
                languageMode ? "Learn more" : "Saber más"
              }
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className={`text-xs md:text-xl ${darkMode ? "text-black/80" : "text-white/80"}`}>
              {languageMode ? "December, 2021" : "Diciembre, 2021"}
            </Timeline.Time>
            <Timeline.Title className={`text-base md:text-2xl ${darkMode ? "text-black" : "text-white"}`}>
              {languageMode ? "Start of Web Development" : "Inicio del Desarrollo Web"}
            </Timeline.Title>
            <Timeline.Body className={`text-sm md:text-lg ${darkMode ? "text-black/70" : "text-white/70"}`}>
              {languageMode ? 
              "I started to delve into the world of Web Development, taking courses and learning technologies in a didactic manner." 
              : 
              "Empecé a adentrarme en el mundo del Desarrollo Web, cursando materias y aprendiendo Tecnologías didacticamente."}           
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className={`text-xs md:text-xl ${darkMode ? "text-black/80" : "text-white/80"}`}>
              {languageMode ? "August, 2021" : "Agosto, 2021"}
            </Timeline.Time>
            <Timeline.Title className={`text-base md:text-2xl ${darkMode ? "text-black" : "text-white"}`}>
              {languageMode ? "Entry to the University" : "Ingreso a la Universidad"}
            </Timeline.Title>
            <Timeline.Body className={`text-sm md:text-lg ${darkMode ? "text-black/70" : "text-white/70"}`}>
              {languageMode ? 
              "I entered the University to study Systems Engineering, where I learned the basics of programming and computer systems." 
              : 
              "Ingresé a la Universidad para estudiar Ingeniería en Sistemas, donde aprendí las bases de la programación y sistemas computacionales."}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
    </>
  )
}

export default App;
