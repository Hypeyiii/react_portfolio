'use client';
import './App.css'
import Projects from './Components/Project.jsx';
import TechButtons from './Components/TechButton.jsx';
import ViewButton from './Components/ViewButton.jsx';
import Footer from './Footer.jsx';
import ImageModal from './hooks/ImageModal.jsx';
import AboutMeModal from './hooks/AboutMeModal.jsx';
import Education from './Education.jsx';
import Tech from './Tech.jsx';
import Introduction from './Introduction.jsx';
import LanguageModal from './hooks/LanguageModal.jsx';
import DarkModeModal from './hooks/DarkModeModal.jsx';
import firstProject from './assets/Projects-1.png'
import secondProject from './assets/Project-2.png'
import Java from './assets/java.svg'
import react from './assets/react.svg'
import NeatBeans from './assets/netbeans.svg'
import tailwind from './assets/tailwindcss(1).svg'
import { FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { MdComputer, MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { useState, useEffect } from 'react'

function App() {

  const [isAboutMeModal, setIsAboutMeModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
      document.querySelector("body").classList.add("overflow-hidden")
  }
  const closeModal = () => {
    setModalOpen(false);
    document.querySelector("body").classList.remove("overflow-hidden")
  };
  const openAboutMeModal = () => {
      setIsAboutMeModal(true);
      setModalOpen(false);
  }
  const closeAboutMeModal = () => {
    setIsAboutMeModal(false);
    document.querySelector("body").classList.remove("overflow-hidden")
  }

  useEffect(() => {
      const handleScroll = () => {
        var sections = document.querySelectorAll('.section');
        var navItems = document.querySelectorAll('.item');
        sections.forEach(function(section, index) {
          var top = section.offsetTop;
          var bottom = top + section.offsetHeight;
          if (window.scrollY + 128 >= top && window.scrollY < bottom) {
              navItems.forEach(function(item) {
              item.classList.remove('lightMode');
            });
            if (isDarkMode || isSystemMode || isLightMode) {
              navItems[index].classList.add('lightMode');
            }
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  });

  const [languageModal, setLanguageModal] = useState(false)

  const closeLanguageModal = () => {
    setLanguageModal(false)
  }

  const openLanguageModal = () => {
    setLanguageModal(true)
    document.querySelector("#fadeLanguage").classList.remove('fadeLanguage')
      closeDarkModal()
  }

  const [isSpanish, setIsSpanish] = useState(true)

  const onSpanish = () => {
    setIsSpanish(true)
    document.querySelector("#fadeLanguage").classList.add('fadeLanguage')
    if(isEnglish) {
      setIsEnglish(false)
    }
  }
  
  const [isEnglish, setIsEnglish] = useState(false)

  const onEnglish = () => {
    setIsEnglish(true)
    document.querySelector("#fadeLanguage").classList.add('fadeLanguage')
    if(isSpanish) {
      setIsSpanish(false)
    }
  }

  const [isDarkModal, setIsDarkModal] = useState(false)

  const openDarkModal = () => {
    setIsDarkModal(true)
    document.querySelector("#fade").classList.remove('fade')
    closeLanguageModal()
  }

  const closeDarkModal = () => {
    setIsDarkModal(false)
    document.querySelector(".fadeModal").classList.add('fadeModalOut')
  }

  const onCloseModals=() => {
    if (languageModal) {
      closeLanguageModal();
    }
    if (isDarkModal) {
      closeDarkModal();
    }
  }

  const [isDarkMode, setIsDarkMode] = useState(false)
  const onDarkMode = () => {
    document.querySelector("#fade").classList.add('fade')
    setIsDarkMode(true)
    document.querySelector("body").classList.add('dark')  
    setIsLightMode(false)
    setIsSystemMode(false)
    
  }

  const [isLightMode, setIsLightMode] = useState(false)
  const onLightMode = () => {
    document.querySelector("#fade").classList.add('fade')
    setIsLightMode(true)
    document.querySelector("body").classList.remove('dark')  
    setIsDarkMode(false)
    setIsSystemMode(false)
    
  }

  const [isSystemMode, setIsSystemMode] = useState(true);

  const onSystemMode = () => {
    document.querySelector("#fade").classList.add('fade');
    setIsSystemMode(true);
    setIsDarkMode(false);
    setIsLightMode(false);
  }

useEffect(() => {
  if (isSystemMode) {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      document.querySelector("body").classList.add('dark');
    } else {
      document.querySelector("body").classList.remove('dark');
    }
  }
}, [isSystemMode]);

  return (
    <>
    <div className="absolute w-full h-auto -z-10
    dark:from-gray-600 dark:via-black dark:to-gray-600 
      bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-50 to-gray-900"
      onClick={onCloseModals}>     
      <div className={`z-50 fixed md:right-0 md:left-0 mx-auto mt-1`}>
        <div className='section flex items-center justify-center mx-auto w-screen mt-1 md:mt-0'>
            <ul className={`backdrop-blur-md bg-black/30 rounded-full flex flex-row gap-x-3 md:gap-x-4 text-[10px] md:text-sm items-center 
                justify-center px-2 text-white dark:text-white/85`}>
              <a href="#"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}>
                {[isSpanish && "Inicio" , isEnglish && "Home"]}
                </li></a>
              <a href="#education"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}>
                  {[isSpanish && "Educación" , isEnglish && "Education"]}
                </li></a>
              <a href="#technologies"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}>
                    {[isSpanish && "Tecnologías" , isEnglish && "Technologies"]}
                  </li></a>
              <a href="#projects"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}>
                  {[isSpanish && "Proyectos" , isEnglish && "Projects"]}
                </li></a>
              <a>
                <li id='fade' className={`px-1 py-2 md:p-3 rounded-full transition md:hover:scale-125 cursor-pointer`} onMouseEnter={openDarkModal} 
                onClick={openDarkModal}>
                  <MdComputer className={`size-4 md:size-6 ${isDarkMode && "hidden"} ${isSystemMode && "hidden"} ${isLightMode && "hidden"}`}/>
                  {isDarkMode && <MdDarkMode className={`size-4 md:size-6`}/>}
                  {isLightMode && <MdOutlineLightMode className={`size-4 md:size-6`}/>}
                  {isSystemMode && <MdComputer className={`size-4 md:size-6`}/>}
                </li>
              </a>
              <a>
                <li id='fadeLanguage' className={`cursor-pointer px-1 py-2 md:p-3 rounded-full transition md:hover:scale-125 text-sm md:text-lg font-bold`}
                    onClick={openLanguageModal} onMouseEnter={openLanguageModal}>
                  {isSpanish && <p>Es</p> }
                  {isEnglish && <p>En</p> }
                </li>
                {languageModal && (
                  <LanguageModal
                  closeLanguageModal={closeLanguageModal}
                    onSpanish={onSpanish}
                    onEnglish={onEnglish}
                  />
                )}
                {isDarkModal && (
                  <DarkModeModal
                    closeDarkModal={closeDarkModal}
                    onDarkMode={onDarkMode}
                    onLightMode={onLightMode}
                    onSystemMode={onSystemMode}
                    darkText={[isSpanish && "Oscuro" , isEnglish && "Dark"]}
                    lightText={[isSpanish && "Claro" , isEnglish && "Light"]}
                    systemText={[isSpanish && "Sistema" , isEnglish && "System"]}
                  />
                )}
              </a>
            </ul>
          </div>
      </div>
      <Introduction
        onOpen={openModal}
        modalOpen={modalOpen && 
          <ImageModal
            animationModal={`modal ${modalOpen ? "modalIn" : "modalOut"}`}
            onClose={closeModal}
            buttonText={[isSpanish && "Más sobre mí", isEnglish && "More about me"]}
            onClick={openAboutMeModal}
            closeButtonText={[isSpanish && "Cerrar", isEnglish && "Close"]}
            />
      }
        nameText={[isSpanish && "Hola, soy Isaac", isEnglish && "Hello, I'm Isaac"]}
        hireText={[isSpanish && "Contrátame aquí", isEnglish && "Hire me here"]}  
        introductionText= {[isSpanish && <h1>
          Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web.
        </h1>
      , isEnglish && 
          <h1>FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications.</h1>]} 
        companyButtonClass= {"text-white/50 hover:text-white bg-black/80 dark:hover:text-white dark:hover:border-white/50 dark:bg-black/80"}
      />
        <Education
            educationTitle={[isSpanish && "Educación y Experiencia", isEnglish && "Education and Experience"]}
            firstTimeText={[isSpanish && "...Actualmente", isEnglish && "...Currently"]}
            firstTitleText={[isSpanish && "Desarrollador y Estudiante" , isEnglish && "Developer and Student"]}
            firstDescriptionText={[isSpanish &&
            <p>Cursando 6to semestre en la carrera de Ingeniero Administrador de Sistemas (IAS). Desarrollando Web´ s de manera didactica y apasionada.</p>
            , isEnglish && 
            <p>Studying the 6th semester in the Systems Administrator Engineer career. Developing websites in a didactic and passionate way.</p>]}
            learMoreText={[isSpanish && "Saber más", isEnglish && "Learn more"]}
            secondTimeText={[isSpanish && "Diciembre, 2021" , isEnglish && "December, 2021"]}
            secondTitleText={[isSpanish && "Iniciando en el Desarrollo Web" , isEnglish && "Starting in Web Development"]}
            secondDescriptionText={[isSpanish &&
            <p>Empecé a adentrarme en el mundo del Desarrollo Web, cursando materias y aprendiendo tecnologías didacticamente.</p>
            , isEnglish &&
            <p>I started to delve into the world of Web Development, taking courses and learning technologies in a didactic way.</p>]}

            thirdTimeText={[isSpanish && "Agosto, 2021" , isEnglish && "August, 2021"]}
            thirdTitleText={[isSpanish && "Ingresando a la Universidad" , isEnglish && "Entering the University"]}
            thirdDescriptionText=
            {[isSpanish &&
              <p>Ingresé a la Universidad para estudiar Ingeniería en Sistemas, donde aprendí las bases de la programación y sistemas computacionales.</p>
              , isEnglish &&
              <p>I entered the University to study Systems Engineering, where I learned the basics of programming and computer systems.</p>
            ]}
        />
        <Tech
          techTitle={[isSpanish && "Tecnologías y Herramientas", isEnglish && "Technologies and Tools"]}
          techIntroduction={[isSpanish &&
          <p>Las habilidades, herramientas y tecnologías que utilizo para dar vida a tus productos</p>
          , isEnglish &&
          <p>The skills, tools and technologies I use to bring your products to life</p>
        ]}
          cardClass="dark:text-white/60 dark:hover:text-white dark:hover:border-white/65 dark:border dark:border-white/30
                    text-black/70 hover:text-black border-black/50 hover:border-black 
                    animate-background-shine-slow dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[linear-gradient(110deg,#dadada,45%,#FFFFFF,55%,#dadada)] bg-[length:200%_100%]"
          currentlyTitle={[isSpanish && "Actualmente trabajando en:" , isEnglish && "Currently working on:"]}
          currentlyText={[isSpanish && 
          <p>Desarrollo de un sitio web E-commerce con React, TailwindCSS y Firebase, donde puedes comprar accesorios de joyería (aún en proceso)</p>
          , isEnglish &&
          <p>Development of an E-commerce website with React, TailwindCSS and Firebase, where you can buy jewelry accessories (still in process)</p>]}
        />

    <div id='projects' className='section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32'>
        <div className={`flex flex-row gap-x-2 mb-4 items-center justify-center text-black/80 dark:text-white/80`}>
        <FaProjectDiagram className='size-6'/>
          <h1 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
            {[isSpanish && "Proyectos" , isEnglish && "Projects"]}
          </h1>
        </div>
        <p className={`mb-6 text-xs md:text-base text-black/70 dark:text-white/70`}>
            {[isSpanish && "Algunos de los proyectos que he desarrollado y contribuido" , 
              isEnglish && "Some of the projects I have developed and contributed"]}
        </p>
        <Projects
          projectImg={firstProject}
          projectName={[isSpanish && "Mariana Accesorios - Sitio Web E-commerce" , isEnglish && "Mariana Accesorios - E-commerce Website"]}
          projectDescription={[isSpanish && 
          <p>Sitio web E-commerce desarrollado con React, TailwindCSS y Firebase, donde puedes comprar accesorios de joyeria (aún en proceso)</p>
          , isEnglish &&
          <p>E-commerce website developed with React, TailwindCSS and Firebase, where you can buy jewelry accessories (still in process)</p>]}
          viewButtons={
            <div className='grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>
                <ViewButton 
                  href={"https://github.com/Hypeyiii/Mariana-Accesorios"}
                  textViewButton={[isSpanish && "Código" , isEnglish && "Code"]}>
                  <FaGithub className='size-5'/>
                </ViewButton>
              </div>
                <div className='col-span-1 flex'>
                  <ViewButton 
                    href={"https://mariana-accesorios.vercel.app/"}
                    textViewButton={[isSpanish && "Ver" , isEnglish && "View"]}>
                    <IoEye className='size-5'/>
                  </ViewButton>
                </div>
            </div>
          }>
            <TechButtons
              buttonText={"React.Js"}>
              <img src={react} alt="Tailwind Icon" className='size-5 animate-spin-slow'/>
            </TechButtons> 
            <TechButtons
              buttonText={"Tailwind"}>
              <img src={tailwind} alt="NeatBeans Icon" className='size-5'/>
            </TechButtons>
        </Projects> 

      <Projects
          projectClass={`mt-10`}
          projectImg={secondProject}
          projectName="Asteroid Game"
          projectDescription={[isSpanish && "Juego de Asteroides de proyecto para la universidad, en la materia de programación orientada a objetos en Java"
            , isEnglish && "Asteroid Game project for the university, in the object-oriented programming subject in Java"]}
            viewButtons={
            <div className='grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>
                <ViewButton 
                  href={"https://github.com/Hypeyiii/asteroid-game"}
                  textViewButton={[isSpanish && "Código" , isEnglish && "Code"]}>
                  <FaGithub className='size-5'/>
                </ViewButton>
              </div>
            </div>
          }>
            <TechButtons
              buttonText={"Java"}>
              <img src={Java} alt="Java Icon" className='size-5' />
            </TechButtons> 
            <TechButtons
               buttonText={"Netbeans"}>
              <img src={NeatBeans} alt="NeatBeans Icon" className='size-5' />
            </TechButtons>
        </Projects>
    </div>
    <Footer
        footerText={[isSpanish && "© 2024 Isaac Frias. Derechos Reservados" , isEnglish && "© 2024 Isaac Frias. All Rights Reserved"]}
        aboutRef={"#AboutMeModal"}
        contactRef={"mailto:isaacfrias868@gmal.com"}
        about={[isSpanish && "Sobre mi" , isEnglish && "About me"]}
        meModal={openAboutMeModal}
        contact={[isSpanish && "Contáctame" , isEnglish && "Contact me"]}
    />
    {isAboutMeModal && (
      <AboutMeModal
          onClose={closeAboutMeModal}
          aboutMeClass={`fade-in`}
          presentationText={[isSpanish && "Hola, mi nombre es Isaac Frias", isEnglish && "Hello, my name is Isaac Frias"]}
          aboutMeText=
            {[isSpanish && 
              <p>
              Actualmente tengo 19 años, nací en Monterrey, Nuevo León el 31 de Agosto del 2004, y soy estudiante de ingeniería apasionado 
              por el desarrollo web y la programación. 
              Hoy en día estoy aprendiendo y dominando tecnologías y herramientas para el desarrollo de aplicaciones web.
            </p>
            , isEnglish &&
            <p>
              I am currently 19 years old, I was born in Monterrey, Nuevo León on August 31, 2004, and I am a student of engineering passionate about
              web development and programming. Nowadays I am learning and mastering technologies and tools for the development of web applications.
              </p>]}
            />)}
    </div>
    </>
  )
} 
export default App;