const Footer = ({className, footerText, about, contact, aboutRef, contactRef, meModal, aboutClass}) => {
    return (
        <div className={`flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between mx-auto w-[350px] sm:w-[500px] md:w-[700px]
         lg:w-[850px] px-2 mb-1 font-medium text-xs md:text-lg gap-y-2`}>
                <h1 className={className}>{footerText}</h1>
                <div className="flex flex-row gap-x-2 md:gap-x-4 justify-center items-center">
                    <a href={aboutRef} onClick={meModal} className={`${aboutClass} transition-all duration-300`}>{about}</a>
                    <a href={contactRef} className={`${aboutClass} transition-all duration-300`}>{contact}</a>
            </div>
        </div>
    );
};
export default Footer;