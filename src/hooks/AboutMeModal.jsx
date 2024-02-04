import { FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiSocketdotio } from "react-icons/si";
import { TiDelete } from "react-icons/ti";

const AboutMeModal = ({ onClose, children, aboutMeText , aboutMeModalClass, bgClass, presentationText, presentationClass, aboutMeClass}) => {
    return (
      <div className={`z-40 fixed inset-0 ${aboutMeModalClass} w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto fixed inset-0 bg-none px-2 flex justify-center
        items-center`}>
        <div className={`fixed inset-0 ${bgClass}`} onClick={onClose}></div>
        <div className={`${aboutMeClass} z-50 flex justify-center items-center gap-4`}>
            <div className={`text-xs sm:text-lg text-pretty gap-y-2 grid grid-cols-12`}>
            <div className="col-span-12 items-end justify-end flex">
              <button className="hover:bg-white/30" onClick={onClose}>
                <TiDelete className="size-8 md:size-12 text-white"/> 
              </button>
          </div>
              <div className="col-span-12 md:col-span-8 flex flex-col items-start justify-center">
              <h1 className={`${presentationClass} text-sm sm:text-xl`}>{presentationText}</h1>
              <h1>{aboutMeText}</h1>
              <ul className="flex items-center justify-start gap-x-4 mt-1">
                <li><FaReact className="size-4 md:size-6 animate-spin-slow"/></li>
                <li><SiExpress className="size-4 md:size-6"/></li>
                <li><SiPostgresql className="size-4 md:size-6"/></li>
                <li><SiSocketdotio className="size-4 md:size-6"/></li>
                <li><FaNode className="size-6 md:size-8"/></li>
              </ul>
              </div>
              <div className="col-span-12 md:col-span-4 flex justify-center items-center">
              {children}
            </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default AboutMeModal;