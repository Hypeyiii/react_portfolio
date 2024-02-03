const ViewButton = ({children, textViewButton, viewButtonClass}) =>{
    return (
        <button className={`${viewButtonClass} items-center justify-center flex flex-row gap-x-2 p-2 rounded-lg border
        duration-300 transition-all`}>
            {children}
            <h1 className={``}>{textViewButton}</h1>
        </button>
    )
};
export default ViewButton;