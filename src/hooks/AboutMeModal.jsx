const AboutMeModal = ({ onClose, children, aboutMeText , aboutMeModalClass, bgClass, presentationText, presentationClass, aboutMeClass}) => {
    return (
      <div className={`${aboutMeModalClass} w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto fixed inset-0 z-40 bg-none px-4 flex justify-center
      items-center`}>
        <div className={`fixed inset-0 ${bgClass}`} onClick={onClose}></div>
        <div className={`${aboutMeClass} flex flex-col md:flex-row justify-center items-center m-auto w-auto h-auto gap-4`}>
            <div className={`z-50 text-xs sm:text-lg text-pretty gap-y-1 flex flex-col `}>
              <h1 className={`${presentationClass} text-sm sm:text-xl text-pretty`}>{presentationText}</h1>
              <h1>{aboutMeText}</h1>
            </div>
            <div className={`z-50`}>
              {children}
            </div>
        </div>
      </div>
    );
  };
  
  export default AboutMeModal;
  