import darkmode from '../assets/darkmode.svg';
import darkmodeoff from '../assets/darkmodeoff.svg';
import language from '../assets/language.svg';
import languageoff from '../assets/languageoff.svg';
import menu from '../assets/menu.svg';
import { useState } from "react";

function MenuModal(){    
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const [languageMode, setLanguageMode] = useState(false)

  const handleLanguage = () => {
    setLanguageMode(!languageMode);
  }
  const handleMenuModal = () => {
    document.querySelector('.menu').classList.toggle('hidden');
  }
  
  return(
    <>
    <button className='hover:bg-white/20 p-2 transition-all duration-300' onClick={handleMenuModal}>
          <img src={menu} alt="Menu Icon" className='size-6'/>
        </button> 
    <div className='menu h-full w-full text-white hidden items-center justify-center'
    onClick={handleMenuModal}>
    <ul className='flex flex-col gap-y-4 text-lg items-center justify-center'>
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
    )
}
export default MenuModal;