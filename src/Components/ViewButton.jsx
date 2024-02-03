const ViewButton = ({children, textViewButton, viewButtonClass, href}) =>{
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${viewButtonClass} items-center justify-center flex flex-row gap-x-2 p-2 rounded-lg border
        duration-300 transition-all`}>
            {children}
            <h1>{textViewButton}</h1>
        </a>
    )
};
export default ViewButton;