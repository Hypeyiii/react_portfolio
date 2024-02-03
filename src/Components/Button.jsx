function button({contactBy, children}) {
    return (
      <div className='col-span-1 items-center justify-start flex'>
        <button className={`p-2 flex flex-row gap-x-1 md:gap-x-2 items-center justify-center border-[2px] border-white/20 
        rounded-full w-full hover:bg-black transition-all duration-300 shadow-lg shadow-white/5 
        active:scale-105 active:duration-75 text-white/50 hover:text-white bg-black/50`}>
          {children}
          <h1 className="md:font-semibold text-xs md:text-sm">{contactBy}</h1>
      </button>
      </div>
    )
  }
  export default button;