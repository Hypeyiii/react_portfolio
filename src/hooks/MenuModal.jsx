
function MenuModal({onClick, onClose,  isMenu, home, education, technologies, projects, handleDarkMode, handleLanguage, darkmodeLogo,
                   languageLogo, buttonsvg, text, containerClass, listHover}){      
  return(
    <>
     <div className={`${containerClass} fixed w-full h-[56px] flex flex-row justify-between items-center px-6`}>
          <button className={`relative`} onClick={onClick}>
            {buttonsvg}
          </button>
          <h1 className='text-2xl font-bold animate-pulse'>
            {text}
          </h1>
          </div>
            <div className='entrance menu h-screen w-screen hidden fixed'
              onClick={onClose}>
                <div className="fixed inset-0 bg-black opacity-70 h-screen"></div>
                  <ul className={`flex flex-col gap-y-4 text-lg items-center justify-center absolute top-0 right-0 bottom-0 left-0 text-white/85`}>
                    <a href="#"><li className='hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                    active:scale-105 active:duration-0'>
                      {home}
                      </li></a>
                    <a href="#education"><li className={`${listHover} hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                      active:scale-105 active:duration-75`}>
                        {education}
                      </li></a>
                    <a href="#technologies"><li className={`${listHover} hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                      active:scale-105 active:duration-75`}>
                          {technologies}
                        </li></a>
                    <a href="#projects"><li className={`${listHover} hover:bg-gray-500/85 p-2 rounded-full transition-all duration-300 
                      active:scale-105 active:duration-75`}>
                        {projects}
                      </li></a>
                    <a href="#darkmode">
                      <li className='p-2 rounded-full transition-all duration-300 active:scale-105 
                        active:duration-75' onClick={handleDarkMode}>
                          {darkmodeLogo}
                      </li>
                    </a>
                    <a href="#language">
                      <li className='p-2 rounded-full transition-all duration-300 active:scale-105 
                      active:duration-75' onClick={handleLanguage} id='language'>
                        {languageLogo}
                      </li>
                    </a>
                  </ul>
              </div>
  </>
    )
}
export default MenuModal;