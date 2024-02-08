import { TiDelete } from "react-icons/ti";

const ImageModal = ({ onClose, children, animationModal, buttonText, onClick, closeButtonText}) => {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-none mx-auto">
        <div className="fixed inset-0 backdrop-blur-sm bg-none" onClick={onClose}></div>
        <div className={`z-50 ${animationModal} gap-y-4 items-center justify-center flex flex-col w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px]`}>
          <div className="w-full flex items-end justify-end">
          </div>
          {children}
          <div className="flex flex-row gap-x-4">
            <a
              href="#AboutMeModal"
              onClick={onClick}
              className={`cursor-pointer p-2 border rounded-lg shadow-lg shadow-white/5 bg-black border-white/20 text-white text-xs 
                          transition-all duration-300 md:font-semibold active:scale-105 active:duration-75 text-white/70
                          hover:text-white hover:bg-black`}>
                      {buttonText}
              </a>
              <a
              onClick={onClose}
              className={`cursor-pointer p-2 border rounded-lg shadow-lg shadow-white/5 bg-black border-white/20 text-white text-xs 
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
  