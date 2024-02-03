const Buttons = ({buttonText, children, className}) => {
    return (
            <div className={`default-styles ${className} py-1 col-span-1 px-2 rounded-full border flex flex-row gap-x-2 items-center justify-center
                            text-xs font-bold`}>
                {children}
                {buttonText}
            </div>
    );
  };
  export default Buttons;