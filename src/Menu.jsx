function Menu ({listDarkMode, itemsHover, home, education, technologies, projects, darkModeLogo, languageLogo, handleDarkMode, handleLanguage
                , techID}) {
  return (
    <div className='mx-auto flex items-start md:items-center justify-start md:justify-center
         font-medium'>
        <ul className={`backdrop-blur-md bg-black/30 rounded-full flex flex-row gap-x-2 md:gap-x-4 text-xs md:text-sm items-center justify-center 
                      ${listDarkMode}`}>
          <a href="#"><li className={`item p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
             {home}
            </li></a>
          <a href="#education"><li className={`item p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
              {education}
            </li></a>
          <a href="#technologies"><li className={`item p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
                {technologies}
              </li></a>
          <a href="#projects"><li className={`item p-3 rounded-full transition-all duration-300 
                      ${itemsHover}`}>
              {projects}
            </li></a>
          <a href="#darkmode">
            <li className={`p-3 rounded-full transition hover:scale-125`} onClick={handleDarkMode}>
                {darkModeLogo}
            </li>
          </a>
          <a href='#language'>
            <li className={`p-3 rounded-full transition hover:scale-125`} onClick={handleLanguage} id='language'>
              {languageLogo}
            </li>
          </a>
        </ul>
      </div>
  )
}
export default Menu;