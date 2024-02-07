'use client';
import './App.css'
import avatar from './assets/avatar.jpg'
import Projects from './Components/Project.jsx';
import TechButtons from './Components/TechButton.jsx';
import ViewButton from './Components/ViewButton.jsx';
import Footer from './Footer.jsx';
import ImageModal from './hooks/ImageModal.jsx';
import AboutMeModal from './hooks/AboutMeModal.jsx';
import Education from './Education.jsx';
import Tech from './Tech.jsx';
import Introduction from './Introduction.jsx';
import firstProject from './assets/Projects-1.png'
import secondProject from './assets/Project-2.png'
import coupleavatar from './assets/coupleavatar.jpg'
import Java from './assets/java.svg'
import react from './assets/react.svg'
import NeatBeans from './assets/netbeans.svg'
import { FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import { SiTailwindcss} from "react-icons/si";
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
              item.classList.remove('darkMode');
            });
            if (isDark === true) {
              navItems[index].classList.add('darkMode');
            }
            if (isLight === true) {
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
  }

  const [isDark , setIsDark] = useState(true)

  const dark = () => {
    setIsDark(true)
    document.querySelector("#fade").classList.add('fade')
    if(isLight) {
      setIsLight(false)
    }
  }

  const [isLight, setIsLight] = useState(false)

  const light = () => {
    setIsLight(true)
    document.querySelector("#fade").classList.add('fade')
    if(isDark) {
      setIsDark(false)
    }
  }

  const onCloseModals=() => {
    if (languageModal) {
      closeLanguageModal();
    }
    if (isDarkModal) {
      closeDarkModal();
    }
  }

  return (
    <>
    
        <div className={`absolute w-full h-auto -z-10
        ${isDark && "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-600 via-black to-gray-600"}
        ${isLight && "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-50 to-gray-900" }`}
         onClick={onCloseModals}
        >     
    <div className={`z-50 fixed md:right-0 md:left-0 mx-auto ${isMobile ? 'mt-0': 'mt-1'}`}>
      <div className='section flex items-center justify-center mx-auto w-screen mt-1 md:mt-0'>
          <ul className={`backdrop-blur-md bg-black/30 rounded-full flex flex-row gap-x-3 md:gap-x-4 text-[10px] md:text-sm items-center 
          justify-center px-2 ${isDark && "text-white/85"} ${isLight && "text-white"}`}>
            <a href="#"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                        ${isDark && "md:hover:text-[#5cf0ff]"} ${isLight && "md:hover:text-[#0a1ca9]"}`}>
              {[isSpanish && "Inicio" , isEnglish && "Home"]}
              </li></a>
            <a href="#education"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                        ${isDark && "md:hover:text-[#5cf0ff]"} ${isLight && "md:hover:text-[#0a1ca9]"}`}>
                {[isSpanish && "Educación" , isEnglish && "Education"]}
              </li></a>
            <a href="#technologies"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                        ${isDark && "md:hover:text-[#5cf0ff]"} ${isLight && "md:hover:text-[#0a1ca9]"}`}>
                  {[isSpanish && "Tecnologías" , isEnglish && "Technologies"]}
                </li></a>
            <a href="#projects"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                        ${isDark && "md:hover:text-[#5cf0ff]"} ${isLight && "md:hover:text-[#0a1ca9]"}`}>
                {[isSpanish && "Proyectos" , isEnglish && "Projects"]}
              </li></a>
            <a href="#darkmode">
              <li id='fade' className={`px-1 py-2 md:p-3 rounded-full transition md:hover:scale-125`} onClick={openDarkModal}>
              {isDark &&  <MdDarkMode className='size-4 md:size-6'/>} {isLight && <MdOutlineLightMode className='size-4 md:size-6'/>}
              </li>
            </a>
            <a href='#language'>
              <li id='fadeLanguage' className={`px-1 py-2 md:p-3 rounded-full transition md:hover:scale-125 text-sm md:text-lg`} onClick={openLanguageModal}>
                {isSpanish && <p>Es</p> }
                {isEnglish && <p>En</p> }
              </li>
              {languageModal && (
                <>
                <div className="absolute right-1 md:right-0 mt-2 p-1 rounded-md border border-gray-600 hover:border-gray-200
                transition bg-black/40 dark:bg-gray-900/70 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                backdrop-blur-xl text-white/70 text-[12px] md:text-sm"
                onClick={closeLanguageModal}> 
                  <ul className="flex flex-col"> 
                    <li className="px-2 py-1.5 cursor-default hover:bg-black hover:text-white rounded-sm
                      transition" onClick={onSpanish}> 
                      <h1>Español</h1>
                    </li>
                    <li className="px-2 py-1.5 cursor-default hover:bg-black hover:text-white rounded-sm
                      transition" onClick={onEnglish}>
                      English 
                    </li>
                  </ul> 
                </div>
                </>
              )}
              {isDarkModal && (
                <>
                <div className="absolute right-10 md:right-16 mt-2 p-1 rounded-md border border-gray-600 hover:border-gray-200
                transition bg-black/40 dark:bg-gray-900/70 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                backdrop-blur-xl text-white/70 text-[12px] md:text-sm"
                onClick={closeDarkModal}> 
                  <ul className="flex flex-col"> 
                    <li className="px-2 py-1.5 cursor-default hover:bg-black hover:text-white rounded-sm
                      transition" onClick={dark}> 
                      <h1>{[isSpanish && "Oscuro" , isEnglish && "Dark"]}</h1>
                    </li>
                    <li className="px-2 py-1.5 cursor-default hover:bg-black hover:text-white rounded-sm
                      transition" onClick={light}>
                      {[isSpanish && "Claro" , isEnglish && "Light"]}
                    </li>
                  </ul> 
                </div>
                </>
              )}
            </a>
          </ul>
        </div>
    </div>
    <Introduction
      avatar={avatar}
      onOpen={openModal}
      modalOpen={modalOpen && (
        <ImageModal
          animationModal={`modal ${modalOpen ? "modalIn" : "modalOut"}`}
          onClose={closeModal}
          img={avatar}
          buttonText={[isSpanish && "Más sobre mí", isEnglish && "More about me"]}
          buttonClass={`${isDark && "hover:bg-white/5"} ${isLight && "hover:bg-black"}`}
          onClick={openAboutMeModal}
          closeButtonText={[isSpanish && "Cerrar", isEnglish && "Close"]}
          >
            <img src={avatar} alt="Imagen" className={`rounded-full size-48 md:size-80`}/>
        </ImageModal>
    )}
      nameClass={`${isLight && "text-black"} ${isDark && "text-white"}`}
      nameText={[isSpanish && "Hola, soy Isaac", isEnglish && "Hello, I'm Isaac"]}
      hireText={[isSpanish && "Contrátame aquí", isEnglish && "Hire me here"]}  
      introductionClass={`${isDark && "text-white/90"} ${isLight && "text-black/90"}`}
      introductionText= {[isSpanish && <h1>
        Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web.
      </h1>
    , isEnglish && 
        <h1>FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications.</h1>]} 
      companyButtonClass={`
      ${isDark && "text-white/50 hover:text-white bg-black/50"} ${isLight && "text-white/60 hover:text-white bg-black/80"}`}
    />
      <Education
          containerClass={`${isDark && "text-white/90"} ${isLight && "text-black/90"}`}
          educationTitle={[isSpanish && "Educación y Experiencia", isEnglish && "Education and Experience"]}
          timeClass={`${isDark && "text-white/80"} ${isLight && "text-black/80"}`}
          titleClass={`${isDark && "text-white"} ${isLight && "text-black"}`}
          descriptionClass={`${isDark && "text-white/70"} ${isLight && "text-black/70"}`}
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
        containerClass={`${isDark && "text-white/90"} ${isLight && "text-black/90"}`}
        techTitle={[isSpanish && "Tecnologías y Herramientas", isEnglish && "Technologies and Tools"]}
        techIntroduction={[isSpanish &&
        <p>Las habilidades, herramientas y tecnologías que utilizo para dar vida a tus productos</p>
        , isEnglish &&
        <p>The skills, tools and technologies I use to bring your products to life</p>
      ]}
        introductionClass={`${isDark && "text-white/70"} ${isLight && "text-black/70"}`}
        cardClass={`${isDark && "text-white/60 hover:text-white border-white/30 hover:border-white/30 hover:bg-black"}
                    ${isLight && "text-black/70 hover:text-black border-black/50 hover:border-black/70 hover:bg-white" }`}
        currentlyTitle={[isSpanish && "Actualmente trabajando en:" , isEnglish && "Currently working on:"]}
        currentlyText={[isSpanish && 
        <p>Desarrollo de un sitio web E-commerce con React, TailwindCSS y Firebase, donde puedes comprar accesorios de joyería (aún en proceso)</p>
        , isEnglish &&
        <p>Development of an E-commerce website with React, TailwindCSS and Firebase, where you can buy jewelry accessories (still in process)</p>]}

        currentlyTitleClass={`${isDark && "text-white"} ${isLight && "text-black"}`}
        currentlyTextClass={`${isLight && "text-black/60"} ${isDark && "text-white/60"}`}
      />

  <div id='projects' className='section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32'>
      <div className={`flex flex-row gap-x-2 mb-4 items-center justify-center ${isDark && "text-white/90"} ${isLight && "text-black/90"}`}>
      <FaProjectDiagram className='size-6'/>
        <h1 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
          {[isSpanish && "Proyectos" , isEnglish && "Projects"]}
        </h1>
      </div>
      <p className={`mb-6 text-xs md:text-base ${isDark && "text-white/70"} ${isLight && "text-black/70"}`}>
          {[isSpanish && "Algunos de los proyectos que he desarrollado y contribuido" , 
            isEnglish && "Some of the projects I have developed and contributed"]}
      </p>
      <Projects
        projectImg={firstProject}
        techTitleClass={`${isDark && "text-white/90"} ${isLight && "text-black/90"}`}
        projectName={[isSpanish && "Mariana Accesorios - Sitio Web E-commerce" , isEnglish && "Mariana Accesorios - E-commerce Website"]}
        techDescriptionClass={`${isDark && "text-white/70"} ${isLight && "text-black/60"}`}
        projectDescription={[isSpanish && 
        <p>Sitio web E-commerce desarrollado con React, TailwindCSS y Firebase, donde puedes comprar accesorios de joyeria (aún en proceso)</p>
        , isEnglish &&
        <p>E-commerce website developed with React, TailwindCSS and Firebase, where you can buy jewelry accessories (still in process)</p>]}
        ViewButtons={
          <div className='grid grid-cols-3 gap-x-4'>
            <div className='col-span-1'>
              <ViewButton 
                href={"https://github.com/Hypeyiii/Mariana-Accesorios"}
                viewButtonClass={[isDark && "text-white/40 hover:text-white bg-black/60 hover:bg-black border border-black/50 hover:border-white"
                ,isLight && "text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black"]}
                textViewButton={[isSpanish && "Código" , isEnglish && "Code"]}>
                <FaGithub className='size-5'/>
              </ViewButton>
            </div>
              <div className='col-span-1 flex'>
                <ViewButton 
                  href={"https://mariana-accesorios.vercel.app/"}
                  viewButtonClass={[isDark && "text-white/40 hover:text-white bg-black/60 hover:bg-black border border-black/50 hover:border-white"
                  ,isLight && "text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black"]}
                  textViewButton={[isSpanish && "Ver" , isEnglish && "View"]}>
                  <IoEye className='size-5'/>
                </ViewButton>
              </div>
          </div>
        }>
          <TechButtons
            className={`text-white/90 bg-[#000000] ${isDark && "border-white/20"} ${isLight && "border-black/50"}`} 
            buttonText={"React.Js"}>
            <img src={react} alt="NeatBeans Icon" className='size-5 animate-spin-slow' />
          </TechButtons> 
          <TechButtons
            className={`bg-[#000000] text-white/90 ${isDark && "border-white/20"} ${isLight && "border-black/50"}`} 
            buttonText={"Tailwind"}>
            <SiTailwindcss className='size-5 text-[#2298BD]'/>
          </TechButtons>
      </Projects> 

    <Projects
        projectClass={`mt-10`}
        projectImg={secondProject}
        techTitleClass={`${isDark && "text-white/90"} ${isLight && "text-black/90"}`}
        projectName="Asteroid Game"
        techDescriptionClass={`${isDark && "text-white/70"} ${isLight && "text-black/60"}`}
        projectDescription={[isSpanish && "Juego de Asteroides de proyecto para la universidad, en la materia de programación orientada a objetos en Java"
          , isEnglish && "Asteroid Game project for the university, in the object-oriented programming subject in Java"]}
        ViewButtons={
          <div className='grid grid-cols-3 gap-x-4'>
            <div className='col-span-1'>
              <ViewButton 
                href={"https://github.com/Hypeyiii/asteroid-game"}
                viewButtonClass={[
                  isDark && "text-white/40 hover:text-white bg-black/60 hover:bg-black border border-black/50 hover:border-white"
                 ,isLight && "text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black"]}
                textViewButton={[isSpanish && "Código" , isEnglish && "Code"]}>
                <FaGithub className='size-5'/>
              </ViewButton>
            </div>
          </div>
        }>
          <TechButtons
            className={`text-white/90 bg-[#000000] ${isDark && "border-white/20"} ${isLight && "border-black/50"}`} 
            buttonText={"Java"}>
            <img src={Java} alt="Java Icon" className='size-5' />
          </TechButtons> 
          <TechButtons
            className={`bg-[#000000] text-white/90 ${isDark && "border-white/20"} ${isLight && "border-black/50"}`} 
            buttonText={"Netbeans"}>
            <img src={NeatBeans} alt="NeatBeans Icon" className='size-5' />
          </TechButtons>
      </Projects>
  </div>
  <Footer
      className={`${isDark && "text-white"} , ${isLight && "text-black/70"}`}
      footerText={[isSpanish && "© 2024 Isaac Frias. Derechos Reservados" , isEnglish && "© 2024 Isaac Frias. All Rights Reserved"]}
      aboutRef={"#AboutMeModal"}
      contactRef={"mailto:isaacfrias868@gmal.com"}
      about={[isSpanish && "Cónoceme más" , isEnglish && "Know me more"]}
      meModal={openAboutMeModal}
      contact={[isSpanish && "Contáctame" , isEnglish && "Contact me"]}
      aboutClass={`hover:underline ${isDark && "text-white/70 hover:text-white"} ${isLight && "text-black/70 hover:text-black"}`}
  />
  {isAboutMeModal && (
    <AboutMeModal
        onClose={closeAboutMeModal}
        img={avatar}
        presentationClass={`${isDark && "text-black"} ${isLight && "text-white"}`}
        aboutMeClass={`fade-in`}
        presentationText={[isSpanish && "Hola, mi nombre es Isaac Frias", isEnglish && "Hello, my name is Isaac Frias"]}
        aboutMeText=
          {[isSpanish && 
            <p>
            Actualmente tengo 19 años, nací en Monterrey, Nuevo León el 31 de Agosto del 2004, y soy estudiante de ingeniería apasionado 
            por el desarrollo web y la programación. 
            Hoy en día estoy aprendiendo nuevas y dominando tecnologías y herramientas para el desarrollo de aplicaciones web.
          </p>
          , isEnglish &&
          <p>
            I am currently 19 years old, I was born in Monterrey, Nuevo León on August 31, 2004, and I am a student of engineering passionate about
             web development and programming. Nowadays I am learning new and mastering technologies and tools for the development of web applications.
            </p>]}
        aboutMeModalClass={`font-light ${isDark && "text-black/90"} ${isLight && "text-white/80"}`}
        bgClass={`
        ${isDark && "opacity-90 bg-gradient-to-tr from-black via-white to-black"}
        ${isLight && "opacity-95 bg-gradient-to-br from-slate-600 via-black to-slate-600"}`}
    >
          <img src={coupleavatar} alt ="Imagen" className={`rounded-full size-40 md:size-48`}/>
    </AboutMeModal>
  )}
  </div>
    </>
  )
} 
export default App;