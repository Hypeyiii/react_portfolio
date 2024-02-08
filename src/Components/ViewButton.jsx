const ViewButton = ({children, textViewButton, href}) =>{
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" 
        className={`text-black/60 bg-white/60 hover:bg-white border-white/60 hover:text-black hover:border-black 
        dark:text-white/40 dark:hover:text-white dark:bg-black/60 dark:hover:bg-black border dark:border-black/50 dark:hover:border-white
        items-center justify-center flex flex-row gap-x-2 p-2 rounded-lg duration-300 transition-all`}>
            {children}
            <h1>{textViewButton}</h1>
        </a>
    )
};
export default ViewButton;