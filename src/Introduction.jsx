import ButtonCompany from './Components/Button';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { SiMicrosoftteams } from 'react-icons/si';

function Introduction ({ nameText, nameClass, hireText, hireClass, introductionClass, introductionText,
     companyButtonClass, onOpen, modalOpen, avatar}) {

  return (
    <div className='mt-32 flex w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto flex-col px-2'>
        <div className='relative flex cursor-pointer size-[100px] md:size-[125px] rounded-full shadow-2xl shadow-white/10 motion-reduce:animate-pulse'>
          <img src={avatar} alt="Avatar Logo" className='rounded-full' onClick={onOpen}/>
        </div>
        {modalOpen}
        <div className='text-white mt-5 flex flex-row gap-x-5 md:gap-x-8 items-center justify-start'>
          <h1 className={`font-bold text-2xl md:text-3xl lg:text-5xl ${nameClass}`}>
            {nameText}
          </h1>
            <a href="https://www.linkedin.com/in/isaac-frias-56002428a/" target="_blank" rel="noopener noreferrer"
             className={`p-2 border rounded-lg shadow-lg shadow-white/5 bg-black/80 border-white/20 text-xs 
                        transition-all duration-300 active:scale-105 active:duration-75  text-white/60
                        hover:text-white hover:bg-black`}>
                {hireText}
            </a >
        </div>
        <div className={`${introductionClass} mt-5 font-light text-sm md:text-lg xl:text-xl text-wrap`} data-translate='description'>
          <p>
            {introductionText}
          </p>
          <div className='mt-5 grid grid-cols-3 sm:grid-cols-5 gap-y-2 auto-rows-auto items-center justify-center gap-x-2 md:gap-x-3'>
                <ButtonCompany
                  className={`${companyButtonClass}`}
                  href={"https://www.linkedin.com/in/isaac-frias-56002428a/"}
                  contactBy="LinkedIn">
                  <FaLinkedin className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"https://github.com/Hypeyiii"}
                  className={`${companyButtonClass}`}
                  contactBy="GitHub">
                  <FaGithub className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"isaac.friaslns@uanl.edu.mx"}
                  className={`${companyButtonClass}`}
                  contactBy="Teams">
                  <SiMicrosoftteams className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"mailto:isaacfrias868@gmail.com"}
                  className={`${companyButtonClass}`}
                  contactBy="Gmail">
                  <BiLogoGmail className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
                <ButtonCompany
                  href={"https://wa.me/8129394069"}
                  className={`${companyButtonClass}`}
                  contactBy="WhatsApp">
                  <FaWhatsapp className='size-[15px]' alt="Icon"/>
                </ButtonCompany>
          </div>
        </div>
      </div>
  );
}
export default Introduction;