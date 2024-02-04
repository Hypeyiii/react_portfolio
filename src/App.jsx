'use client';
import './App.css'
import avatar from './assets/avatar.jpg'
import Projects from './Components/Project.jsx';
import TechButtons from './Components/TechButton.jsx';
import ViewButton from './Components/ViewButton.jsx';
import Footer from './Footer.jsx';
import ImageModal from './hooks/ImageModal.jsx';
import AboutMeModal from './hooks/AboutMeModal.jsx';
import Menu from './Menu.jsx';
import MenuModal from './hooks/MenuModal.jsx';
import Education from './Education.jsx';
import Tech from './Tech.jsx';
import Introduction from './Introduction.jsx';
import firstProject from './assets/Project-1.png'
import secondProject from './assets/Project-2.png'
import modalavatar from './assets/modalavatar.jpg'
import Java from './assets/java.svg'
import react from './assets/react.svg'
import NeatBeans from './assets/netbeans.svg'
import { RiMenuUnfoldFill, RiMenuFoldLine  } from "react-icons/ri";
import { FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import { TbLanguageOff, TbLanguage } from "react-icons/tb";
import { SiTailwindcss} from "react-icons/si";
import { IoEye } from "react-icons/io5";
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
  return (
    <>
    
        <div className={`absolute w-full h-auto
        ${darkMode ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-50 to-gray-900"
        :
        "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-600 via-black to-gray-600"
        }`}
        >     
    <div className={`z-50 fixed top-0 md:right-0 md:left-0 mx-auto
                   ${isMobile ? 'mt-0': 'mt-1'}`}>
        {isMobile ?
        <>
        <MenuModal
        onClick={handleMenuModal}
        buttonsvg={isMenu ? <RiMenuFoldLine className='size-6'/> : <RiMenuUnfoldFill className='size-6'/>}
        text={isMenu ? "" : "IF"}
        containerClass={`${isMenu ? "bg-transparent" : "backdrop-blur-md"} ${darkMode ? "text-black" : "text-white/85"}`}
        onClose={handleMenuModal}
        home={languageMode ? "Home" : "Inicio"}
        education={languageMode ? "Education" : "Educación"}
        technologies={languageMode ? "Technologies" : "Tecnologias"}
        projects={languageMode ? "Projects" : "Proyectos"}
        handleDarkMode={handleDarkMode}
        handleLanguage={handleLanguage}
        darkmodeLogo={darkMode ? <MdOutlineLightMode className='size-6'/> : <MdDarkMode className='size-6'/>}
        languageLogo={languageMode ? <TbLanguage className='size-6'/> : <TbLanguageOff className='size-6'/>}
        listHover={`${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`}
        />
    </>
        :
        <>
        <Menu
        listDarkMode={`${darkMode ? "text-white" : "text-white/85"}`}
        itemsHover={`${darkMode ? "hover:bg-black/40" : "hover:bg-gray-500/85"}`}
        home={languageMode ? "Home" : "Inicio"}
        education={languageMode ? "Education" : "Educación"}
        technologies={languageMode ? "Technologies" : "Tecnologias"}
        projects={languageMode ? "Projects" : "Proyectos"}
        darkModeLogo={darkMode ? <MdOutlineLightMode className='size-6'/> : <MdDarkMode className='size-6'/>}
        languageLogo={languageMode ? <TbLanguage className='size-6'/> : <TbLanguageOff className='size-6'/>}
        handleDarkMode={handleDarkMode}
        handleLanguage={handleLanguage}/>
      </>
      }
    </div>
    <Introduction
    avatar={
      darkMode ? modalavatar : avatar
    }
      onOpen={openModal}
      modalOpen={modalOpen && (
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
            <img src={darkMode ? modalavatar : avatar} alt="Imagen" className={`rounded-full size-48 md:size-80`}/>
        </ImageModal>
    )}
      nameClass={`${darkMode ? "text-black" : "text-white"}`}
      nameText={languageMode ? "Hello, I'm Isaac" : "Hola, Soy Isaac"}
      hireText={languageMode ? "Hire me here" : 'Contrátame aquí'}
      hireClass={`${darkMode ? "hover:bg-black/70" : "hover:bg-white/5"}`}
      introductionClass={`${darkMode ? "text-black/90" : "text-white/90"}`}
      introductionText={languageMode ? 
        "FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications." 
        :
        "Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web."
      }
      companyButtonClass={`${darkMode ? "text-white/60 hover:text-white bg-black/80" : "text-white/50 hover:text-white bg-black/50"}`}
    />
      <Education
          containerClass={`${darkMode ? "text-black/90" : "text-white/90"}`}
          educationTitle={languageMode ? "Education and Experience" : "Educación y Experiencia"}
          timeClass={`${darkMode ? "text-black/80" : "text-white/80"}`}
          titleClass={`${darkMode ? "text-black" : "text-white"}`}
          descriptionClass={`${darkMode ? "text-black/70" : "text-white/70"}`}
          firstTimeText={languageMode ? "Currently..." : "Actualmente..."}
          firstTitleText={languageMode ? "Developer and Student" : "Desarrollador y Estudiante"}
          firstDescriptionText={languageMode ? 
            "Studying the 6th semester in the Systems Administrator Engineer career. Developing websites in a didactic and passionate way." 
            : 
            "Cursando 6to semestre en la carrera de Ingeniero Administrador de Sistemas (IAS). Desarrollando Web´ s de manera didactica y apasionada."
          }
          learMoreText={languageMode ? "Learn more" : "Saber más"}
          secondTimeText={languageMode ? "December, 2021" : "Diciembre, 2021"}
          secondTitleText={languageMode ? "Start of Web Development" : "Inicio del Desarrollo Web"}
          secondDescriptionText={languageMode ? 
            "I started to delve into the world of Web Development, taking courses and learning technologies in a didactic manner." 
            : 
            "Empecé a adentrarme en el mundo del Desarrollo Web, cursando materias y aprendiendo Tecnologías didacticamente."
          }
          thirdTimeText={languageMode ? "August, 2021" : "Agosto, 2021"}
          thirdTitleText={languageMode ? "Entry to the University" : "Ingreso a la Universidad"}
          thirdDescriptionText={languageMode ? 
            "I entered the University to study Systems Engineering, where I learned the basics of programming and computer systems." 
            : 
            "Ingresé a la Universidad para estudiar Ingeniería en Sistemas, donde aprendí las bases de la programación y sistemas computacionales."
          }
      />
      <Tech
      containerClass={`${darkMode ? "text-black/90" : "text-white/90"}`}
      techTitle={languageMode ? "Technologies" : "Tecnologías"}
      techIntroduction={languageMode ? "The skills, tools and technologies I use to bring your products to life" : 
                                        "Las habilidades, herramientas y tecnologías que utilizo para dar vida a tus productos"}
      introductionClass={`${darkMode ? "text-black/70" : "text-white/70"}`}
      cardClass={`${darkMode ? "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white" : 
                              "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}`}
      currentlyTitle={languageMode ? "Currently working on:" : 'Actualmente trabajando en:'}
      currentlyText={languageMode ? "I am currently working on a project with React, NodeJS and MySQL, developing a web application for a small business." : 
                                    "Actualmente estoy trabajando en un proyecto con React, NodeJS y MySQL, desarrollando una aplicación web para un pequeño negocio."}
      currentlyTitleClass={`${darkMode ? "text-black" : "text-white"}`}
      currentlyTextClass={`${darkMode ? "text-black/60" : "text-white/60"}`}
      />
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
            className={`text-white/90 bg-[#000000] ${darkMode ? "border-black/20" : "border-white/20"}`} 
            buttonText={"React.Js"}>
            <img src={react} alt="NeatBeans Icon" className='size-5 animate-spin-slow' />
          </TechButtons> 
          <TechButtons
            className={`bg-[#000000] text-white/90 ${darkMode ? "border-black/50" : "border-white/20"}`} 
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
        bgClass={`${darkMode ? "opacity-95 bg-gradient-to-tr from-slate-600 via-black to-slate-600" : 
        "opacity-80 bg-gradient-to-br from-slate-900 via-white to-slate-900"}`}
  >
        <img src={
          darkMode ? avatar : modalavatar
        } alt ="Imagen" className={`rounded-full size-40 md:size-48 float-right`}/>
    </AboutMeModal>
  )}
  </div>
    </>
  )
} 

export default App;