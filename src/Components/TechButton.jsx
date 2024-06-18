const Buttons = ({ buttonText, children }) => {
  return (
    <div
      className={`default-styles py-1 col-span-1 px-2 rounded-full border flex flex-row gap-x-2 items-center justify-center
      text-[10px] md:text-xs dark:border-black/50 dark:bg-black/90 bg-black text-white/60 border-black hover:text-white dark:hover:border-white/50
      hover:cursor-pointer hover:bg-black/80 hover:text-white/100 transition-all`}
    >
      {children}
      {buttonText}
    </div>
  );
};
export default Buttons;
