import { Timeline } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

function Education ({educationTitle, firstTimeText, firstTitleText, firstDescriptionText, learMoreText, secondTimeText, secondTitleText, 
                    secondDescriptionText, thirdDescriptionText, thirdTimeText, thirdTitleText}) {
  return (
    <div id='education' className='section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32'>
        <div className="flex flex-row gap-x-2 mb-8 items-center justify-center text-black/90 dark:text-white/90">
        <IoMdSchool className='size-8'/> 
          <h2 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
            {educationTitle}
          </h2>
        </div>
        <Timeline className='text-black ml-[6px]'>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className={`text-xs md:text-xl text-black/80 dark:text-white/80`}>
              {firstTimeText}
            </Timeline.Time>
            <Timeline.Title className={`text-base md:text-2xl text-dark dark:text-white`}>
              {firstTitleText}
            </Timeline.Title>
            <Timeline.Body className={`text-sm md:text-lg text-black/70 dark:text-white/70`}>
              {firstDescriptionText}
            </Timeline.Body>
            <a href='https://www.uanl.mx/oferta/ingeniero-administrador-de-sistemas/' target='_blank' rel='noopener noreferrer' 
              className={`flex flex-row gap-x-1 items-center justify-center p-2 bg-black border border-white/20 rounded-xl
              transition-all duration-300 text-white/60 hover:text-white active:scale-105 active:duration-75 text-xs md:text-sm`}>
              {learMoreText}
              <FaAngleRight/>
            </a>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className={`text-xs md:text-xl text-black/80 dark:text-white/80`}>
              {secondTimeText}
            </Timeline.Time>
            <Timeline.Title className={`text-base md:text-2xl text-dark dark:text-white`}>
              {secondTitleText}
            </Timeline.Title>
            <Timeline.Body className={`text-sm md:text-lg text-black/70 dark:text-white/70`}>
              {secondDescriptionText}           
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className='md:gap-y-2 flex flex-col items-start justify-center'>
            <Timeline.Time className={`text-xs md:text-xl text-black/80 dark:text-white/80`}>
              {thirdTimeText}
            </Timeline.Time>
            <Timeline.Title className={`text-base md:text-2xl text-dark dark:text-white`}>
              {thirdTitleText}
            </Timeline.Title>
            <Timeline.Body className={`text-sm md:text-lg text-black/70 dark:text-white/70`}>
              {thirdDescriptionText}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
export default Education;