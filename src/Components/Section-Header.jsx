import { MdComputer, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import LanguageModal from "../Modals/LanguageModal";
import DarkModeModal from "../Modals/DarkModeModal";

function Header({
  isSpanish,
  isEnglish,
  isDarkMode,
  isLightMode,
  isSystemMode,
  onDarkMode,
  onLightMode,
  onSystemMode,
  openDarkModal,
  closeDarkModal,
  isDarkModal,
  openLanguageModal,
  closeLanguageModal,
  languageModal,
  onSpanish,
  onEnglish,
}) {
  return (
    <div className={`z-50 fixed md:right-0 md:left-0 mx-auto mt-1`}>
      <div className="section flex items-center justify-center mx-auto w-screen mt-1 md:mt-0">
        <ul
          className={`backdrop-blur-md bg-black/30 rounded-full flex flex-row gap-x-3 md:gap-x-4 text-[10px] md:text-sm items-center 
                justify-center px-2 text-white dark:text-white/85`}
        >
          <a href="#">
            <li
              className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}
            >
              {[isSpanish && "Inicio", isEnglish && "Home"]}
            </li>
          </a>
          <a href="#education">
            <li
              className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}
            >
              {[isSpanish && "Educación", isEnglish && "Education"]}
            </li>
          </a>
          <a href="#technologies">
            <li
              className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}
            >
              {[isSpanish && "Tecnologías", isEnglish && "Technologies"]}
            </li>
          </a>
          <a href="#projects">
            <li
              className={`item px-1 py-2 md:p-3 rounded-full transition-all duration-300 
                          md:hover:text-[#5cf0ff]`}
            >
              {[isSpanish && "Proyectos", isEnglish && "Projects"]}
            </li>
          </a>
          <a>
            <li
              id="fade"
              className={`px-1 py-2 md:p-3 rounded-full transition md:hover:scale-125 cursor-pointer`}
              onMouseEnter={openDarkModal}
              onClick={openDarkModal}
            >
              <MdComputer
                className={`size-4 md:size-6 ${isDarkMode && "hidden"} ${
                  isSystemMode && "hidden"
                } ${isLightMode && "hidden"}`}
              />
              {isDarkMode && <MdDarkMode className={`size-4 md:size-6`} />}
              {isLightMode && (
                <MdOutlineLightMode className={`size-4 md:size-6`} />
              )}
              {isSystemMode && <MdComputer className={`size-4 md:size-6`} />}
            </li>
          </a>
          <a>
            <li
              id="fadeLanguage"
              className={`cursor-pointer px-1 py-2 md:p-3 rounded-full transition md:hover:scale-125 text-sm md:text-lg font-bold`}
              onClick={openLanguageModal}
              onMouseEnter={openLanguageModal}
            >
              {isSpanish && <p>Es</p>}
              {isEnglish && <p>En</p>}
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
                darkText={[isSpanish && "Oscuro", isEnglish && "Dark"]}
                lightText={[isSpanish && "Claro", isEnglish && "Light"]}
                systemText={[isSpanish && "Sistema", isEnglish && "System"]}
              />
            )}
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Header;
