const Project = ({projectName, techTitleClass, techDescriptionClass, children, projectDescription, ViewButtons, projectImg, projectClass}) => { 
  return (
    <>
    <div className={`${projectClass} grid grid-cols-12 auto-rows-auto w-full mb-10 gap-x-4 gap-y-4 items-start justify-center`}>
      <div className="col-span-12 md:col-span-6 w-full h-full">
        <img src={projectImg} alt="Project" className="w-full h-full rounded-lg shadow-2xl to-black"/>
      </div>
    <div className="col-span-12 md:col-span-6 flex flex-col gap-y-4 items-start justify-center">
      <h1 className={`default-styles ${techTitleClass} text-xl md:text-3xl text-pretty`}>{projectName}</h1>
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
