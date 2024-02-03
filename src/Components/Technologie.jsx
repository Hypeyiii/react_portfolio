const Technologie = ({ className, techName, children}) => {
  return (
    <div className={`default-styles ${className} font-semibold items-center justify-center flex flex-col md:text-xl text-sm transition-all duration-300`}>
        {children}
        <h1>{techName}</h1>
    </div>
  );
};

export default Technologie;