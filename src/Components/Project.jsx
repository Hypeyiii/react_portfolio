const Project = ({projectName, techTitleClass, techDescriptionClass, children, projectDescription, ViewButtons, projectImg, projectClass}) => { 
  return (
    <>
    <div className={`${projectClass} grid grid-cols-12 auto-rows-auto w-full gap-x-4 gap-y-4 items-start justify-center mb-10`}>
      <div className="col-span-12 md:col-span-6 w-full h-full border border-white/20 hover:border-white/40 transition-all duration-300 rounded-lg">
        <img src={projectImg} alt="Project" className="w-full h-full rounded-lg shadow-2xl to-black"/>
      </div>
    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2 md:gap-y-4 items-start justify-center">
      <h1 className={`default-styles ${techTitleClass} text-xl md:text-3xl text-pretty font-semibold`}>{projectName}</h1>
      <div className="grid grid-cols-3 auto-rows-auto gap gap-x-2">
        {children}
      </div>
      <p className={`text-xd md:text-base ${techDescriptionClass}`}>
        {projectDescription}
      </p>
        {ViewButtons}
    </div>
  </div>
  </>
  );
};
export default Project;
