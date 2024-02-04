const ImageModal = ({ onClose, children, animationModal, buttonText, buttonClass, onClick}) => {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-none">
        <div className="fixed inset-0 backdrop-blur-sm bg-none" onClick={onClose}></div>
        <div className={`z-50 p-4 ${animationModal} flex flex-col gap-y-4 items-center justify-center`}>
          {children}
          <a
            onClick={onClick}
             className={`cursor-pointer p-2 border rounded-lg shadow-lg shadow-white/5 bg-black border-white/20 text-white text-xs 
                        transition-all duration-300 md:font-semibold active:scale-105 active:duration-75 text-white/70
                        hover:text-white ${buttonClass}`}>
                    {buttonText}
            </a >
        </div>
      </div>
    );
  };
  
  export default ImageModal;
  