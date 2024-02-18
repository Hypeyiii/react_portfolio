const Technologie = ({ className, techName, children}) => {
  return (
    <div className={`default-styles ${className} font-medium md:font-bold items-center justify-center flex flex-col 
                     md:text-xl text-xs gap-[2px] transition-all duration-300 border border-black/30 hover:border-black`}>
        {children}
        <h1>{techName}</h1>
    </div>
  );
};

export default Technologie;