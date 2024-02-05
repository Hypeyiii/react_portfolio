import { MdBiotech } from "react-icons/md";
import Technologie from "./Components/Technologie";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaNode, FaReact } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";

function Tech ({techTitle, techIntroduction, introductionClass, cardClass, currentlyTitle, 
                currentlyText, currentlyTitleClass, currentlyTextClass, containerClass}) {
  return (
    <div id='technologies' className='section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32'>
      <div className={`flex flex-row gap-x-2 mb-4 items-center justify-center ${containerClass}`}>
        <MdBiotech className='size-8'/>
          <h1 className={`font-semibold text-xl md:text-2xl xl:text-3xl`} data-translate='education'>
            {techTitle}
          </h1>
      </div>
      <p className={`mb-4 text-xs md:text-base ${introductionClass}`}>
            {techIntroduction}
          </p>
      <div className='grid grid-cols-4 md:grid-cols-5 auto-rows-auto gap-x-4 w-full gap-y-4 mb-4'>
          <Technologie className={`p-2 rounded-xl border bg-transparent
               ${cardClass}`}
            techName={"HTML"}>
            <FaHtml5 className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"CSS"}>
            <FaCss3Alt className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"JavaScript"}>
            <SiJavascript className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"Tailwind"}>
            <SiTailwindcss className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"Bootstrap"}>
            <FaBootstrap className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent
            ${cardClass}`}
            techName={"React"}>
            <FaReact className='size-6 md:size-12 animate-spin-slow'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"NodeJS"}>
            <FaNode className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"MySQL"}>
            <SiMysql className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"Git"}>
            <FaGitAlt className='size-6 md:size-12'/>
          </Technologie>
          <Technologie className={`p-2 border rounded-xl bg-transparent 
            ${cardClass}`}
            techName={"Java"}>
            <FaJava className='size-6 md:size-12'/>
          </Technologie>
      </div>
        <div className='flex flex-col gap-y-2'>
        <h1 className={`font-bold text-base md:text-2xl ${currentlyTitleClass}`}>
              {currentlyTitle}
        </h1>
        <p className={`text-xs md:text-sm ${currentlyTextClass}`}>
          {currentlyText}
        </p>
        </div>
  </div>
  )
}
export default Tech;