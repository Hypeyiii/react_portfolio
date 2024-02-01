'use client';
import './App.css'
import avatar from './assets/avatar.jpg'
import ButtonCompany from './Components/Button'
import menu from './assets/menu.svg'
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { TbLanguageOff, TbLanguage } from "react-icons/tb";
import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight} from 'react-icons/hi';
import { useState, useEffect } from 'react'

function App() {
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
    document.querySelector('.menu').classList.toggle('hidden');
  }

  return (
    <>
    <div className={`z-50 fixed top-0 md:right-0 md:left-0 mx-auto w-[350px] sm:w-[500px] md:w-[700px]
                   ${isMobile ? 'mt-0': 'mt-5'}`}>
      <div className='mx-auto text-white/85 flex items-start md:items-center justify-start md:justify-center
         font-medium'>
        {isMobile ?
        <>
          <button className={`absolute z-40 hover:bg-white/20 p-2 transition-all duration-300 
                  ${isMobile ? "p-5" : "p-0"} `} onClick={handleMenuModal}>
            <img src={menu} alt="Menu Icon" className='size-7'/>
          </button> 
            <div className='entrance menu h-screen w-screen hidden fixed'
              onClick={handleMenuModal}>
                <div className="fixed inset-0 bg-black opacity-70 h-screen"></div>
              <ul className='flex flex-col gap-y-4 text-lg items-center justify-center absolute top-0 right-0 bottom-0 left-0'>
                <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                active:scale-105 active:duration-0'>
                  {languageMode ? "Home" : "Inicio"}
                  </li></a>
                <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                  active:scale-105 active:duration-75'>
                    {languageMode ? "Education" : "Educación"}
                  </li></a>
                <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                  active:scale-105 active:duration-75'>
                      {languageMode ? "Technologies" : "Tecnologias"}
                    </li></a>
                <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                active:scale-105 active:duration-75'>
                    {languageMode ? "Projects" : "Proyectos"}
                  </li></a>
                <a href="#">
                  <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
                    active:duration-75' onClick={handleDarkMode}>
                      {darkMode ? 
                      <MdDarkMode className='size-6'/>
                      :
                      <MdOutlineDarkMode className='size-6'/>
                       }
                  </li>
                </a>
                <a href="#">
                  <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
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
        <ul className='backdrop-blur-sm bg-black/30 rounded-full px-2 flex flex-row gap-x-2 md:gap-x-4 text-xs md:text-base items-center justify-center'>
          <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
          active:scale-105 active:duration-0'>
            {languageMode ? "Home" : "Inicio"}
            </li></a>
          <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
            active:scale-105 active:duration-75'>
              {languageMode ? "Education" : "Educación"}
            </li></a>
          <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
            active:scale-105 active:duration-75'>
                {languageMode ? "Technologies" : "Tecnologias"}
              </li></a>
          <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
           active:scale-105 active:duration-75'>
              {languageMode ? "Projects" : "Proyectos"}
            </li></a>
          <a href="#">
            <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
              active:duration-75' onClick={handleDarkMode}>
                {darkMode ?
                 <MdDarkMode className='size-6'/>
                 :
                 <MdOutlineDarkMode  className='size-6'/>
                 }
            </li>
          </a>
          <a href="#">
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
        <div className='text-white/90 mt-5 font-light text-sm md:text-lg xl:text-xl text-wrap' data-translate='description'>
          <p>
            {languageMode ? 
            "FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications." 
            :"Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web."
            }
          </p>
          <div className='mt-5 grid grid-cols-3 sm:grid-cols-5 gap-y-2 auto-rows-auto items-center justify-center gap-x-2 md:gap-x-3'>
              <a href="#">
                <ButtonCompany
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
      <div className='flex items-center justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] px-4 mt-32 mb-32'>
        <Timeline className='text-white z-10'>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className='text-xs md:text-xl text-white/80'>Actualmente...</Timeline.Time>
            <Timeline.Title className='text-base md:text-2xl text-white'>Desarrollador y Estudiante</Timeline.Title>
            <Timeline.Body className='text-sm md:text-lg text-white/70'>
            Cursando 6to semestre en la carrera de Ingeniero Administrador de Sistemas (IAS). Desarrollando Web´ s de manera didactica y apasionada.
            </Timeline.Body>
            <button className='flex flex-row gap-x-2 items-center justify-center p-2 bg-black border border-white/20 hover:bg-white/5 rounded-xl
            transition-all duration-300 text-white/60 hover:text-white active:scale-105 active:duration-75 text-xs md:text-sm'>
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className='text-xs md:text-xl text-white/80'>Diciembre, 2021</Timeline.Time>
            <Timeline.Title className='text-base md:text-2xl text-white'>Entrando en el mundo del desarrollo</Timeline.Title>
            <Timeline.Body className='text-sm md:text-lg text-white/70'>
              Empecé a adentrarme en el mundo del Desarrollo Web, cursando materias y aprendiendo Tecnologías didacticamente.           
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className='text-xs md:text-xl text-white/80'>Agosto, 2021</Timeline.Time>
            <Timeline.Title className='text-base md:text-2xl text-white'>Ingreso al Estudio Superior</Timeline.Title>
            <Timeline.Body className='text-sm md:text-lg text-white/70'>
             Ingreso a la Faculdad de Ingeniería Mecácnica y Eléctrica (FIME) en la carrera de Ingeniero Administrador de Sistemas (IAS).
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
    </>
  )
}

export default App;