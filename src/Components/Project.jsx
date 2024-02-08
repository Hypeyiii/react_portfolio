const Project = ({projectName, children, projectDescription, viewButtons, projectImg}) => { 
  return (
    <>
    <div className={`text-black/90 dark:text-white/90 mt-5 grid grid-cols-12 auto-rows-auto w-full gap-x-4 gap-y-4 items-start justify-center mb-10`}>
      <div className="col-span-12 md:col-span-6 w-full h-full border border-white/20 hover:border-white/40 transition-all duration-300 rounded-lg">
        <img src={projectImg} alt="Project" className="w-full h-full rounded-lg shadow-2xl to-black transition-all"/>
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
