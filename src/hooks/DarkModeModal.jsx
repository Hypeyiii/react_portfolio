import { MdComputer, MdDarkMode, MdOutlineLightMode } from "react-icons/md"

const DarkModeModal = ({closeDarkModal, onDarkMode, onLightMode, onSystemMode, darkText, lightText, systemText}) => {
    return(
        <div className="fadeModal absolute right-10 md:right-16 mt-2 rounded-md border border-gray-600 hover:border-white/60
                  transition dark:border-white/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                  bg-black/60 backdrop-blur-xl text-white/70 text-[12px] md:text-sm"
                  onClick={closeDarkModal}> 
            <ul className="flex flex-col items-start justify-start"> 
                <li className="p-1.5 md:p-3 rounded-t-lg cursor-pointer hover:bg-black/60 hover:text-white
                    transition flex flex-row gap-x-1 items-center justify-start w-full text-xs md:text-sm" onClick={onDarkMode}> 
                    <MdDarkMode className={`size-2 md:size-3`}/>
                    <h1>{darkText}</h1>
                </li>
                <li className="p-1.5 md:p-3 cursor-pointer hover:bg-black hover:bg-black/60 hover:text-white
                    transition flex flex-row gap-x-1 items-center justify-start w-full text-xs md:text-sm" onClick={onLightMode}>
                      <MdOutlineLightMode className={`size-2 md:size-3`}/>
                    {lightText}
                </li>
                <li className="p-1.5 md:p-3 rounded-b-lg cursor-pointer hover:bg-black hover:bg-black/60 hover:text-white
                   transition flex flex-row gap-x-1 items-center justify-start w-full text-xs md:text-sm" onClick={onSystemMode}>
                  <MdComputer className={`size-2 md:size-3`}/>
                    {systemText}
                </li>
            </ul> 
        </div>
    )
}
export default DarkModeModal;