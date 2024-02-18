import { TiDelete } from "react-icons/ti";
import avatar from "../assets/avatar.jpg";

const ImageModal = ({ onClose, animationModal, buttonText, onClick, closeButtonText}) => {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-none mx-auto">
        <div className="fixed inset-0 backdrop-blur-sm bg-none" onClick={onClose}></div>
        <div className={` ${animationModal} gap-y-4 items-center justify-center flex flex-col w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px]`}>
          <div className="w-full flex items-center justify-center">
          <img src={avatar} alt="Imagen" className={`z-50 rounded-full size-48 md:size-80`}/>
          </div>
          <div className="flex flex-row gap-x-4">
            <a
              href="#AboutMeModal"
              onClick={onClick}
              className={`z-50 cursor-pointer p-2 border rounded-lg shadow-lg shadow-white/5 bg-black border-white/20 text-white text-xs 
                          transition-all duration-300 md:font-semibold active:scale-105 active:duration-75 text-white/70
                          hover:text-white hover:bg-black`}>
                      {buttonText}
              </a>
              <a
              onClick={onClose}
              className={`z-50 cursor-pointer p-2 border rounded-lg shadow-lg shadow-white/5 bg-black border-white/20 text-white text-xs 
                          transition-all duration-300 md:font-semibold active:scale-105 active:duration-75 text-white/70
                          hover:text-white flex flex-row gap-x-1 hover:bg-black`}>
                      {closeButtonText}
                      <TiDelete className="size-4"/>
              </a>
            </div>
        </div>
      </div>
    );
  };
  
  export default ImageModal;
  