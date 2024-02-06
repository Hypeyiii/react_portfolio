function Menu ({listDarkMode, itemsHover, home, education, technologies, projects, darkModeLogo, languageLogo, handleDarkMode, handleLanguage}) {
  return (
    <div className='flex items-center justify-center mx-auto w-screen mt-1 md:mt-0'>
        <ul className={`backdrop-blur-md bg-black/30 rounded-full flex flex-row gap-x-3 md:gap-x-4 text-[10px] md:text-sm items-center justify-center px-2
                      ${listDarkMode}`}>
          <a href="#"><li className={`px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
             {home}
            </li></a>
          <a href="#education"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
              {education}
            </li></a>
          <a href="#technologies"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
                {technologies}
              </li></a>
          <a href="#projects"><li className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
              {projects}
            </li></a>
          <a href="#darkmode">
            <li className={`px-1 py-2 md:p-3 rounded-full transition hover:scale-125`} onClick={handleDarkMode}>
                {darkModeLogo}
            </li>
          </a>
          <a href='#language'>
            <li className={`px-1 py-2 md:p-3 rounded-full transition hover:scale-125`} onClick={handleLanguage} id='language'>
              {languageLogo}
            </li>
          </a>
        </ul>
      </div>
  )
}
export default Menu;