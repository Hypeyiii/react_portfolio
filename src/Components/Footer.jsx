import useLanguage from "../Hooks/useLanguages";
import useModal from "../Hooks/useModal";

const Footer = () => {
  const { isSpanish, isEnglish } = useLanguage();
  const {openAboutMeModal} = useModal();
  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between mx-auto w-[350px] sm:w-[500px] 
        md:w-[700px] lg:w-[850px] px-2 font-medium text-xs md:text-lg gap-y-2 md:mt-8`}
    >
      <h1 className="text-black dark:text-white/70">
        {[
          isSpanish && "© 2024 Isaac Frias. Derechos Reservados",
          isEnglish && "© 2024 Isaac Frias. All Rights Reserved",
        ]}
      </h1>
      <div className="flex flex-row gap-x-6 md:gap-x-4 justify-center items-center">
        <a
          href="#AboutMeModal"
          onClick={openAboutMeModal}
          className={`text-black dark:text-white/70 transition-all duration-300 animate-pulse
                    hover:underline`}
        >
          {[isSpanish && "Sobre mi", isEnglish && "About me"]}
        </a>
        <a
          href="mailto:isaacfrias868@gmal.com"
          className={`text-black dark:text-white/70 transition-all duration-300
                    hover:underline`}
        >
          {[isSpanish && "Contáctame", isEnglish && "Contact me"]}
        </a>
      </div>
    </div>
  );
};
export default Footer;
