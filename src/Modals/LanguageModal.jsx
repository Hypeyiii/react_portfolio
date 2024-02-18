import mexico from '../assets/mexico-flag.svg';
import usa from '../assets/usa-flag.svg';

const LanguageModal = ({closeLanguageModal, onSpanish, onEnglish}) => {
    return(
        <div className="fadeModal absolute right-1 md:right-0 mt-2 rounded-md border border-gray-600 hover:border-white/60
        transition bg-black/60 dark:border-white/60 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
        backdrop-blur-xl text-white/70 text-[12px] md:text-sm"
        onClick={closeLanguageModal} onMouseLeave={closeLanguageModal}> 
          <ul className="flex flex-col"> 
            <li className="px-2 py-2.5 md:p-3 rounded-t-lg hover:bg-black hover:text-white
              transition flex flex-row gap-x-1 items-center justify-start text-xs md:text-sm cursor-pointer" onClick={onSpanish}>
              <img src={mexico} alt="Mexico Flag" className='size-2 md:size-3'/> 
              Español
            </li>
            <li className="p-2 md:p-3 rounded-b-lg hover:bg-black hover:text-white
              transition flex flex-row gap-x-1 justify-start items-center text-xs md:text-sm cursor-pointer" onClick={onEnglish}>
              <img src={usa} alt="Usa Flag" className='size-2 md:size-3'/>
              English
            </li>
          </ul> 
        </div>
    )
}
export default LanguageModal;