function button({contactBy,logo}) {
    return (
      <div className='col-span-1 items-center justify-start flex text-white'>
        <button className="p-2 flex flex-row gap-x-1 md:gap-x-2 items-center justify-center border-[2px] border-white/20 
        rounded-full w-full hover:bg-white/10 transition-all duration-300 shadow-lg shadow-white/5 text-white
        active:scale-105 active:duration-75">
            <img src={logo} alt="Logo" className="size-3 md:size-4 fill-current stroke-current"/>
          <h1 className="md:font-semibold text-xs md:text-sm text-white/80">{contactBy}</h1>
      </button>
      </div>
    )
  }
  export default button;