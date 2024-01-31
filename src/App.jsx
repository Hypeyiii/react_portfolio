import './App.css'
import avatar from './assets/avatar.jpg'
import Button from './Components/Button'
import linkedin from './assets/linkedinLogo.svg'
import github from './assets/githubLogo.svg'
import mail from './assets/mailLogo.svg'
import whatsapp from './assets/whatsappIcon.svg'
import darkmode from './assets/DarkMode.svg'
import darkmodeoff from './assets/DarkModeOff.svg'
import language from './assets/language.svg'
import languageoff from './assets/languageoff.svg'
import { useState, useEffect } from 'react'
import menu from './assets/menu.svg'
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
    // Función que se ejecuta cada vez que cambia el tamaño de la pantalla
    const handleSize = () => {
      setisMobile(window.innerWidth < 768);
    };

    // Agregamos un event listener para el cambio de tamaño de la pantalla
    window.addEventListener('resize', handleSize);

    // Limpiamos el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  const handleMenuModal = () => {
    document.querySelector('.menu').classList.toggle('hidden');
  }

  return (
    <>
    <div className='fixed top-0 left-0 right-0 mx-auto mt-5 w-[350px] sm:w-[500px] md:w-[700px]'>
      <div className='backdrop-blur-sm mx-auto text-white flex items-start md:items-center justify-start md:justify-center
         font-medium'>
        {isMobile ?
        <>
            <button className='hover:bg-white/20 p-2 transition-all duration-300' onClick={handleMenuModal}>
            <img src={menu} alt="Menu Icon" className='size-6'/>
          </button> 
      <div className='backdrop-blur-md z-40 menu h-screen w-screen text-white hidden fixed top-0 bottom-0'
      onClick={handleMenuModal}>
      <ul className='entrance-container flex flex-col gap-y-4 text-lg items-center justify-center absolute top-0 right-0 bottom-0 left-0'>
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
              {darkMode ? <img src={darkmodeoff} alt="Dark Mode Off" className='size-6'/>
               :
               <img src={darkmode} alt="Dark Mode" className='size-6'/> }
          </li>
        </a>
        <a href="#">
          <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
          active:duration-75' onClick={handleLanguage} id='language'>
            {languageMode ? <img src={language} alt="Language Icon" className='size-6'/>
            :
            <img src={languageoff} alt="Language Icon" className='size-6'/>}
          </li>
        </a>
      </ul>
    </div>
    </>
        :
        <ul className='flex flex-row gap-x-2 md:gap-x-4 text-xs md:text-lg items-center justify-center'>
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
                {darkMode ? <img src={darkmodeoff} alt="Dark Mode Off" className='size-3 md:size-6'/>
                 :
                 <img src={darkmode} alt="Dark Mode" className='size-3 md:size-6'/> }
            </li>
          </a>
          <a href="#">
            <li className='hover:bg-gray-400 p-2 rounded-full transition-all duration-300 active:scale-105 
            active:duration-75' onClick={handleLanguage} id='language'>
              {languageMode ? <img src={language} alt="Language Icon" className='size-3 md:size-6'/>
              :
              <img src={languageoff} alt="Language Icon" className='size-3 md:size-6'/>}
            </li>
          </a>
        </ul>}
      </div>
    </div>
      <div className='mt-32 flex w-[350px] sm:w-[500px] md:w-[700px] mx-auto flex-col px-2'>
          <img src={avatar} alt="Avatar Logo" className='size-[100px] rounded-full shadow-2xl shadow-white/10'/>
        <div className='text-white mt-5 flex flex-row gap-x-5 md:gap-x-8 items-center justify-start'>
          <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl' data-translate='title' id='title'>
            {languageMode ? "Hello, I'm Isaac" : "Hola, Soy Isaac"}
          </h1>
          <button className='p-2 border border-white/20 rounded-lg shadow-lg shadow-white/5 bg-black
           text-white text-xs hover:bg-white/5 transition-all duration-300 md:font-semibold
           active:scale-105 active:duration-75 font-semibold text-white/70 hover:text-white'>
              {languageMode ? <h1>Hire me here</h1> : <h1>Contratame aquí</h1>}
           </button>
        </div>
        <div className='text-white mt-5 font-light text-sm md:text-lg xl:text-xl text-wrap' data-translate='description'>
          <p>
            {languageMode ? 
            "FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico. Contributing to the Development and Programming of Web Applications." 
            :"Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León, México. Contribuyendo al Desarrollo y Programación de Aplicaciones Web."
            }
          </p>
          <div className='mt-5 grid grid-cols-3 sm:grid-cols-4 gap-y-2 auto-rows-auto items-cente justify-center gap-x-2 md:gap-x-4'>
              <a href="#">
                <Button
                  logo={linkedin}
                  contactBy="LinkedIn"
                />
                </a>
              <a href="#">
                <Button
                  logo={github}
                  contactBy="GitHub"
                />
              </a>
              <a href="#">
                <Button
                  logo={mail}
                  contactBy="Gmail"
                />
              </a>
              <a href="#">
                <Button
                  logo={whatsapp}
                  contactBy="WhatsApp"
                />
              </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;