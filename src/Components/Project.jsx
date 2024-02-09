const Project = ({projectName, children, projectDescription, viewButtons, projectImg}) => { 
  return (
    <>
    <div className="text-black/90 dark:text-white/90 mt-5 grid grid-cols-12 auto-rows-auto w-full gap-x-4 gap-y-4 items-start justify-center mb-10">
      <div className="col-span-12 md:col-span-6 w-full border border-white/20 hover:border-white/30 transition-all duration-300 rounded-lg
        overflow-hidden aspect-video cursor-pointer relative group [&>img]:hover:blur-[1.5px] bg-gradient-to-r from-[rgba(17,17,17,0)] 
        via-white to-[rgba(17,17,17,0)] animate-border-width h-[-1px] left-0 ">
            <div
                className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 
                to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end w-full">
                <div>
                    <div
                        className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition 
                                  duration-300 ease-in-out">
                        <div className="font-bold text-sm md:text-lg">{projectName}</div>
                        <div className="opacity-60 text-xs md:text-sm ">
                            {projectDescription}
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt={projectName + "Image"}
                className="object-cover w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={projectImg}
            />
        </div>
    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2 md:gap-y-4 items-start justify-center">
      <h1 className={`text-xl md:text-3xl text-pretty font-semibold`}>{projectName}</h1>
      <div className="grid grid-cols-3 auto-rows-auto gap gap-x-2">
        {children}
      </div>
      <p className={`text-sm my-3 md:text-base text-black/70 dark:text-white/70`}>
        {projectDescription}
      </p>
        {viewButtons}
    </div>
  </div>
  </>
  );
};
export default Project;
