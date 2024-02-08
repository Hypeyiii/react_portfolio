const Footer = ({footerText, about, contact, aboutRef, contactRef, meModal}) => {
    return (
        <div className={`flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between mx-auto w-[350px] sm:w-[500px] 
        md:w-[700px] lg:w-[850px] px-2 font-medium text-xs md:text-lg gap-y-2 md:mt-8`}>
                <h1 className="text-black dark:text-white/70">{footerText}</h1>
                <div className="flex flex-row gap-x-6 md:gap-x-4 justify-center items-center">
                    <a href={aboutRef} onClick={meModal} className={`text-black dark:text-white/70 transition-all duration-300 animate-pulse
                    hover:underline`}>{about}</a>
                    <a href={contactRef} className={`text-black dark:text-white/70 transition-all duration-300
                    hover:underline`}>{contact}</a>
            </div>
        </div>
    );
};
export default Footer;