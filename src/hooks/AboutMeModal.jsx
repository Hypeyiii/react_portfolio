const AboutMeModal = ({ onClose, children, animationModal, aboutMeText , aboutMeModalClass, bgClass}) => {
    return (
      <div className={`${aboutMeModalClass} w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto fixed inset-0 z-40 bg-none px-4 flex justify-center
      items-center text-pretty`}>
        <div className={`fixed inset-0 ${bgClass}`} onClick={onClose}></div>
        <div className="flex flex-col md:flex-row justify-center items-center m-auto w-auto h-auto">
            <div className={`z-50 p-4 text-sm sm:text-xl ${animationModal}`}>
              {aboutMeText}
            </div>
            <div className={`z-50 p-4 ${animationModal}`}>
              {children}
            </div>
        </div>
      </div>
    );
  };
  
  export default AboutMeModal;
  