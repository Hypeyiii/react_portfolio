'use client';
import './App.css'
import avatar from './assets/avatar.jpg'
import ButtonCompany from './Components/Button'
import Technologie from './Components/Technologie.jsx';
import Projects from './Components/Project.jsx';
import TechButtons from './Components/TechButton.jsx';
import ViewButton from './Components/ViewButton.jsx';
import Footer from './Footer.jsx';
import ImageModal from './hooks/ImageModal.jsx';
import AboutMeModal from './hooks/AboutMeModal.jsx';
import firstProject from './assets/Project-1.png'
import secondProject from './assets/Project-2.png'
import Java from './assets/java.svg'
import NeatBeans from './assets/netbeans.svg'
import { RiMenuUnfoldFill, RiMenuFoldLine  } from "react-icons/ri";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord, FaHtml5, FaCss3Alt, FaBootstrap, 
         FaReact, FaNode, FaGitAlt, FaJava, FaProjectDiagram, FaAngleRight } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { MdDarkMode, MdOutlineLightMode, MdBiotech} from "react-icons/md";
import { TbLanguageOff, TbLanguage } from "react-icons/tb";
import { SiMysql, SiTailwindcss} from "react-icons/si";
import { IoMdSchool } from "react-icons/io";
import { IoEye, IoLogoJavascript } from "react-icons/io5";
import { Timeline } from 'flowbite-react';
import { useState, useEffect } from 'react'

function App() {

  const [isAboutMeModal, setIsAboutMeModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  };
  const openAboutMeModal = () => {
      setIsAboutMeModal(true);
      setModalOpen(false);
  }
  const closeAboutMeModal = () => {
    setIsAboutMeModal(false);
  }


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
  const closeMenuModal = () => {
    setIsMenu(false);
  }
  return (
    <>
    <div className="fixed left-0 top-0 -z-10 h-screen w-screen">
    {darkMode ?
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
         from-gray-900 via-gray-50 to-gray-900"></div>     
        :
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
        from-gray-700 via-black to-gray-700"></div>
      }
    </div>
    <div className={`z-50 fixed top-0 md:right-0 md:left-0 mx-auto
                   ${isMobile ? 'mt-0': 'mt-1'}`}>
        {isMobile ?
        <>
          <div className={`fixed w-full h-[56px] flex flex-row justify-between items-center px-6
         ${isMenu ? "bg-transparent" : "backdrop-blur-md"} ${darkMode ? "text-black" : "text-white/85"}`}>
          <button className={`relative`}
                   onClick={handleMenuModal}>
            {isMenu ? <RiMenuFoldLine className='size-6'/> : <RiMenuUnfoldFill className='size-6'/>}
          </button>
          <h1 className='text-2xl font-bold animate-pulse'>
            {isMenu ? "" : "IF"}
          </h1>
          </div>
            <div className='entrance menu h-screen w-screen hidden fixed'
              onClick={handleMenuModal} onScroll={closeMenuModal}>
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
                          <MdOutlineLightMode className='size-6'/>
                          :
                          <MdDarkMode className='size-6'/> 
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
        <div className='mx-auto flex items-start md:items-center justify-start md:justify-center
         font-medium'>
        <ul className={`backdrop-blur-sm bg-black/30 rounded-full flex flex-row gap-x-2 md:gap-x-4 text-xs md:text-sm items-center justify-center 
                      ${darkMode ? "text-white" : "text-white/85"}`}>
          <a href="#"><li className={`p-3 rounded-full transition-all duration-300 
                      ${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`}>
            {languageMode ? "Home" : "Inicio"}
            </li></a>
          <a href="#education"><li className={`p-3 rounded-full transition-all duration-300 
                      ${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`}>
              {languageMode ? "Education" : "Educación"}
            </li></a>
          <a href="#technologies"><li className={`p-3 rounded-full transition-all duration-300 
                      ${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`}>
                {languageMode ? "Technologies" : "Tecnologias"}
              </li></a>
          <a href="#projects"><li className={`p-3 rounded-full transition-all duration-300 
                      ${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`}>
              {languageMode ? "Projects" : "Proyectos"}
            </li></a>
          <a href="#darkmode">
            <li className={`p-3 rounded-full transition-all duration-300 
                      ${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`} onClick={handleDarkMode}>
                {darkMode ?
                <MdOutlineLightMode className='size-5'/>
                 :
                 <MdDarkMode className='size-5'/>
                 }
            </li>
          </a>
          <a href='#language'>
            <li className={`p-3 rounded-full transition-all duration-300 
          active:scale-105 active:duration-300 ${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`} onClick={handleLanguage} id='language'>
              {languageMode ? 
              <TbLanguage className='size-5'/>
              :
              <TbLanguageOff className='size-5'/>
              }
            </li>
          </a>
        </ul>
      </div>}
    </div>
      <div className='mt-32 flex w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto flex-col px-2'>
        <div className='relative flex cursor-pointer size-[100px] md:size-[125px] rounded-full shadow-2xl shadow-white/10 motion-reduce:animate-pulse'>
          <img src={avatar} alt="Avatar Logo" className='rounded-full' onClick={openModal}/>
        </div>
        {modalOpen && (
          <ImageModal
            animationModal={`modal ${modalOpen ? "modalIn" : "modalOut"}`}
            onClose={closeModal}
            img={avatar}
            buttonText={
              languageMode ? "More about me" : "Más sobre mí"
            
            }
            buttonClass={`${darkMode ? "hover:bg-black" : "hover:bg-white/5"}`}
            onClick={openAboutMeModal}
            closeButtonText={languageMode ? "Close" : "Cerrar"}
            >
              <img src={avatar} alt="Imagen" className={`rounded-full size-48 md:size-80`}/>
          </ImageModal>
        )}
        <div className='text-white mt-5 flex flex-row gap-x-5 md:gap-x-8 items-center justify-start'>
          <h1 className={`font-bold text-2xl md:text-3xl lg:text-5xl ${darkMode ? "text-black" : "text-white"}`}>
            {languageMode ? "Hello, I'm Isaac" : "Hola, Soy Isaac"}
          </h1>
            <a href="https://www.linkedin.com/in/isaac-frias-56002428a/" target="_blank" rel="noopener noreferrer"
             className={`p-2 border rounded-lg shadow-lg shadow-white/5 bg-black border-white/20 text-white text-xs 
                        transition-all duration-300 md:font-semibold active:scale-105 active:duration-75 font-semibold text-white/70
                        hover:text-white ${darkMode ? "hover:bg-black/70" : "hover:bg-white/5"}`}>
                {languageMode ? "Hire me here" : 'Contrátame aquí'}
            </a >
        </div>
        <div className={`${darkMode ? "text-black" : "text-white/90"} mt-5 font-light text-sm md:text-lg xl:text-xl text-wrap`} data-translate='description'>
          <p>
            {languageMode ? 
            "FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications." 
            :"Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web."
            }
          </p>
          <div className='mt-5 grid grid-cols-3 sm:grid-cols-5 gap-y-2 auto-rows-auto items-center justify-center gap-x-2 md:gap-x-3'>
                <ButtonCompany
                  className={`${darkMode ? " text-white/60 hover:text-white bg-black/80" : "text-white/50 hover:text-white bg-black/50"}`}
                  href={"https://www.linkedin.com/in/isaac-frias-56002428a/"}
                  contactBy="LinkedIn">
                  <FaLinkedin className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"https://github.com/Hypeyiii"}
                  className={`${darkMode ? " text-white/60 hover:text-white bg-black/80" : "text-white/50 hover:text-white bg-black/50"}`}
                  contactBy="GitHub">
                  <FaGithub className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"https://discord.com/users/IsaacFrias#0001"}
                  className={`${darkMode ? " text-white/60 hover:text-white bg-black/80" : "text-white/50 hover:text-white bg-black/50"}`}
                  contactBy="Discord">
                  <FaDiscord className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"mailto:isaacfrias868@gmail.com"}
                  className={`${darkMode ? " text-white/60 hover:text-white bg-black/80" : "text-white/50 hover:text-white bg-black/50"}`}
                  contactBy="Gmail">
                  <BiLogoGmail className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"https://wa.me/8129394069"}
                  className={`${darkMode ? " text-white/60 hover:text-white bg-black/80" : "text-white/50 hover:text-white bg-black/50"}`}
                  contactBy="WhatsApp">
                  <FaWhatsapp className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
          </div>
        </div>
      </div>
      <div id='education' className='flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32 mb-24'>
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
            <a href='https://www.uanl.mx/oferta/ingeniero-administrador-de-sistemas/' target='_blank' rel='noopener noreferrer' 
              className={`flex flex-row gap-x-1 items-center justify-center p-2 bg-black border border-white/20 rounded-xl
              transition-all duration-300 text-white/60 hover:text-white active:scale-105 active:duration-75 text-xs md:text-sm`}>
              {
                languageMode ? "Learn more" : "Saber más"
              }
              <FaAngleRight/>
            </a>
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
    <div id='technologies' className='flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mb-24 md:mt-32'>
      <div className={`flex flex-row gap-x-2 mb-4 items-center justify-center ${darkMode ? "text-black/90" : "text-white/90"}`}>
        <MdBiotech className='size-8'/>
          <h1 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
            {languageMode ? "Technologies" : "Tecnologías"}
          </h1>
      </div>
      <p className={`mb-4 text-xs md:text-base ${darkMode ? "text-black/70" : "text-white/70"}`}>
            {
              languageMode ? "The skills, tools and technologies I use to bring your products to life" 
              : 
              "Las habilidades, herramientas y tecnologías que utilizo para dar vida a tus productos"
            }
          </p>
      <div className='grid grid-cols-4 md:grid-cols-5 auto-rows-auto gap-x-4 w-full gap-y-4 mb-4'>
          <Technologie className={`p-2 rounded-xl border bg-transparent
               ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
                : "text-white/70 hover:text-white border-white/30 hover:border-white/50 hover:bg-black"}`}
            techName={"HTML"}>
            <FaHtml5 className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"CSS"}>
            <FaCss3Alt className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"JavaScript"}>
            <IoLogoJavascript className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"Tailwind"}>
            <SiTailwindcss className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"Bootstrap"}>
            <FaBootstrap className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"React"}>
            <FaReact className='size-6 md:size-12 animate-spin-slow'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"NodeJS"}>
            <FaNode className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"MySQL"}>
            <SiMysql className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"Git"}>
            <FaGitAlt className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white"
            : "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
            techName={"Java"}>
            <FaJava className='size-6 md:size-12'/>
          </Technologie>
      </div>
        <div className='flex flex-col gap-y-2'>
        <h1 className={`font-bold text-base md:text-2xl ${darkMode ? "text-black" : "text-white"}`}>
              {languageMode ? "Currently working on:" : 'Actualmente trabajando en:'}
        </h1>
        <p className={`text-xs md:text-sm ${darkMode ? "text-black/60" : "text-white/60"}`}>
          {languageMode ? 
          "I am currently working on a project with React, NodeJS and MySQL, developing a web application for a small business."
          :
          "Actualmente estoy trabajando en un proyecto con React, NodeJS y MySQL, desarrollando una aplicación web para un pequeño negocio."
          }
        </p>
        </div>
  </div>
  
  <div id='projects' className='flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mb-24'>
      <div className={`flex flex-row gap-x-2 mb-4 items-center justify-center ${darkMode ? "text-black/90" : "text-white/90"}`}>
      <FaProjectDiagram className='size-6'/>
      <h1 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
            {languageMode ? "Projects" : "Proyectos"}
          </h1>
      </div>
      <p className={`mb-6 text-xs md:text-base ${darkMode ? "text-black/70" : "text-white/70"}`}>
        {languageMode ? 
        "Some of the projects I have developed and collaborated on" 
        :
        "Algunos de los proyectos que he desarrollado y colaborado"
        }
      </p>
      <Projects
        projectImg={firstProject}
        techTitleClass={`${darkMode ? "text-black/90" : "text-white/90"}`}
        projectName={
          languageMode ? "Mariana´ s Accesories - E-commerce Website" : "Mariana Accesorios - Sitio Web E-commerce"
        }
        techDescriptionClass={`${darkMode ? "text-black/60" : "text-white/70"}`}
        projectDescription={
          languageMode ? 
          "E-commerce website developed with React, TailwindCSS and Firebase, where you can buy jewellry accessories (still in process)" :
          "Sitio web E-commerce desarrollado con React, TailwindCSS y Firebase, donde puedes comprar accesorios de joyeria (aún en proceso)"
        }
        ViewButtons={
          <div className='grid grid-cols-3 gap-x-4'>
            <div className='col-span-1'>
              <ViewButton 
                href={"https://github.com/Hypeyiii/Mariana-Accesorios"}
                viewButtonClass={
                  darkMode ? "text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black" 
                  : 
                  "text-white/40 hover:text-white bg-black/60 hover:bg-black border-black/40"
                }
                textViewButton={
                  languageMode ? "Code" : "Código"
                }>
                <FaGithub className='size-5'/>
              </ViewButton>
            </div>
            <div className='col-span-1 flex'>
              <ViewButton 
                href={"https://mariana-accesorios.vercel.app/"}
                viewButtonClass={
                  darkMode ? "text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black" 
                  : 
                  "text-white/40 hover:text-white bg-black/60 hover:bg-black border-black/40"
                }
                textViewButton={
                  languageMode ? "View" : "Ver"
                }>
                <IoEye className='size-5'/>
              </ViewButton>
            </div>
      </div>
        }>
          <TechButtons
            className={`text-white/90 bg-[#183d5d] ${darkMode ? "border-black/50" : "border-white/20"}`} 
            buttonText={"React.Js"}>
            <FaReact className='size-5 animate-spin-slow text-blue-600'/>
          </TechButtons> 
          <TechButtons
            className={`bg-[#1c496e] text-white/90 ${darkMode ? "border-black/50" : "border-white/20"}`} 
            buttonText={"Tailwind"}>
            <SiTailwindcss className='size-5 text-[#2298BD]'/>
          </TechButtons>
      </Projects> 

      <Projects
        projectClass={`mt-10`}
        projectImg={secondProject}
        techTitleClass={`${darkMode ? "text-black/90" : "text-white/90"}`}
        projectName="Asteroid Game"
        techDescriptionClass={`${darkMode ? "text-black/60" : "text-white/70"}`}
        projectDescription={
          languageMode ? 
          "Project Asteroids game for college, in the subject of object-oriented programming" :
          "Juego de Asteroides de proyecto para la universidad, en la materia de programación orientada a objetos"
        }
        ViewButtons={
          <div className='grid grid-cols-3 gap-x-4'>
            <div className='col-span-1'>
              <ViewButton 
                href={"https://github.com/Hypeyiii/asteroid-game"}
                viewButtonClass={
                  darkMode ? "text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black" 
                  : 
                  "text-white/40 hover:text-white bg-black/60 hover:bg-black border-black/40"
                }
                textViewButton={
                  languageMode ? "Code" : "Código"
                }>
                <FaGithub className='size-5'/>
              </ViewButton>
            </div>
      </div>
        }>
          <TechButtons
            className={`text-white/90 bg-[#000000] ${darkMode ? "border-black/50" : "border-white/20"}`} 
            buttonText={"Java"}>
            <img src={Java} alt="Java Icon" className='size-5' />
          </TechButtons> 
          <TechButtons
            className={`bg-[#000000] text-white/90 ${darkMode ? "border-black/50" : "border-white/20"}`} 
            buttonText={"Netbeans"}>
            <img src={NeatBeans} alt="NeatBeans Icon" className='size-5' />
          </TechButtons>
      </Projects>
  </div>
  <Footer
      className={darkMode ? "text-black/70" : "text-white/70"}
      footerText={languageMode ? "© 2024 Isaac Frias. All the Rights Reserved" : "© 2024 Isaac Frias. Derechos Reservados "}
      aboutRef={"#inicio"}
      contactRef={"mailto:isaacfrias868@gmal.com"}
      about={languageMode ? "Know more about me" : "Cónoceme más"}
      meModal={openAboutMeModal}
      contact={languageMode ? "Contact" : "Contacto"}
      aboutClass={`hover:underline ${darkMode ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
  />
  {isAboutMeModal && (
    <AboutMeModal
      onClose={closeAboutMeModal}
      img={avatar}
      presentationClass={`font-bold ${darkMode ? "text-white" : "text-black"}`}
      aboutMeClass={`fade-in`}
      presentationText={languageMode ? "Hello, my name is Isaac Frias " : "Hola, mi nombre es Isaac Frias "}
      aboutMeText=
        {languageMode ? "I am currently 19 years old, I was born in Monterrey, Nuevo León on August 31, 2004, and I am a student of engineering passionate about web development and programming. Today I am learning new and mastering technologies and tools for the development of web applications."
      :
        "Actualmente tengo 19 años, nací en Monterrey, Nuevo León un 31 de agosto del 2004, y soy un estudiante de ingeniería apasionado por el desarrollo web y la programación. A día de hoy me encuentro aprendiendo y perfeccionando nuevas tecnologías y herramientas para el desarrollo de aplicaciones web."}
        aboutMeModalClass={`font-light ${darkMode ? "text-white/80" : "text-black/90"}`}
        bgClass={`${darkMode ? "backdrop-blur-sm bg-black/80" : "backdrop-blur-sm bg-white/35"}`}
        >
        <img src={avatar} alt ="Imagen" className={`rounded-full size-40 md:size-48 float-right`}
        />
    </AboutMeModal>
  )}
    </>
  )
} 

export default App;