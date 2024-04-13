import ButtonCompany from "./Button";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiMicrosoftteams } from "react-icons/si";
import avatar from "../assets/avatar.jpg";
import ImageModal from "../Modals/ImageModal";
import useLanguage from "../Hooks/useLanguages";
import useModal from "../Hooks/useModal";

function Introduction() {
  const { isSpanish, isEnglish } = useLanguage();
  const { openModal, modalOpen, closeModal, openAboutMeModal } = useModal();

  const companyButtonClass =
    "text-white/50 hover:text-white bg-black/80 dark:hover:text-white dark:hover:border-white/50 dark:bg-black/80";
  return (
    <div
      id="inicio"
      className="mt-32 flex w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto flex-col px-2"
    >
      <div
        onClick={openModal}
        className="group/item relative flex cursor-pointer size-[100px] md:size-[125px] rounded-full shadow-2xl shadow-white/10
             motion-reduce:animate-pulse"
      >
        <img src={avatar} alt="Avatar Logo" className="rounded-full" />
      </div>
      {modalOpen && (
        <ImageModal
          animationModal={`modal ${modalOpen ? "modalIn" : "modalOut"}`}
          onClose={closeModal}
          buttonText={[
            isSpanish && "Más sobre mí",
            isEnglish && "More about me",
          ]}
          onClick={openAboutMeModal}
          closeButtonText={[isSpanish && "Cerrar", isEnglish && "Close"]}
        />
      )}
      <div className="mt-5 flex flex-row gap-x-5 md:gap-x-8 items-center justify-start">
        <h1
          className={`font-bold text-2xl md:text-3xl lg:text-5xl text-black dark:text-white`}
        >
          {[isSpanish && "Hola, soy Isaac", isEnglish && "Hello, I'm Isaac"]}
        </h1>
        <a
          href="https://www.linkedin.com/in/isaac-frias-56002428a/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 border rounded-lg shadow-lg shadow-white/5 bg-black/80 border-white/20 text-xs 
                        transition-all duration-300 active:scale-105 active:duration-75  text-white/60
                        hover:text-white hover:bg-black animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]`}
        >
          {[isSpanish && "Contrátame aquí", isEnglish && "Hire me here"]}
        </a>
      </div>
      <div
        className={`text-black/90 dark:text-white/90 mt-5 font-light text-sm md:text-lg xl:text-xl text-wrap`}
        data-translate="description"
      >
        {[
          isSpanish && (
            <h1>
              Desarrollador FrontEnd e Ingeniero en Sistemas. De Nuevo León,
              México. Contribuyendo al Desarrollo y Programación de Aplicaciones
              Web.
            </h1>
          ),
          isEnglish && (
            <h1>
              FrontEnd Developer and Systems Engineer. From Nuevo León, Mexico.
              Contributing to the Development and Programming of Web
              Applications.
            </h1>
          ),
        ]}
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-5 gap-y-2 auto-rows-auto items-center justify-center gap-x-2 md:gap-x-3">
          <ButtonCompany
            className={`${companyButtonClass}`}
            href={"https://www.linkedin.com/in/isaac-frias-56002428a/"}
            contactBy="LinkedIn"
          >
            <FaLinkedin className="size-[15px]" alt="Icon" />
          </ButtonCompany>
          <ButtonCompany
            href={"https://github.com/Hypeyiii"}
            className={`${companyButtonClass}`}
            contactBy="GitHub"
          >
            <FaGithub className="size-[15px]" alt="Icon" />
          </ButtonCompany>
          <ButtonCompany
            href={"isaac.friaslns@uanl.edu.mx"}
            className={`${companyButtonClass}`}
            contactBy="Teams"
          >
            <SiMicrosoftteams className="size-[15px]" alt="Icon" />
          </ButtonCompany>
          <ButtonCompany
            href={"mailto:isaacfrias868@gmail.com"}
            className={`${companyButtonClass}`}
            contactBy="Gmail"
          >
            <BiLogoGmail className="size-[15px]" alt="Icon" />
          </ButtonCompany>
          <ButtonCompany
            href={"https://wa.me/8129394069"}
            className={`${companyButtonClass}`}
            contactBy="WhatsApp"
          >
            <FaWhatsapp className="size-[15px]" alt="Icon" />
          </ButtonCompany>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
