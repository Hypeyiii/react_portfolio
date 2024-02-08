const Buttons = ({buttonText, children}) => {
    return (
            <div className={`default-styles py-1 col-span-1 px-2 rounded-full border flex flex-row gap-x-2 items-center justify-center
                            text-xs dark:border-black/50 dark:bg-black/90 bg-black text-white border-black`}>
                {children}
                {buttonText}
            </div>
    );
  };
  export default Buttons;