import { MdBiotech } from "react-icons/md";
import Technologie from "./Technologie";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";

function Tech({ isSpanish, isEnglish}) {
  const cardClass = `dark:text-white/60 dark:hover:text-white dark:hover:border-white/65 dark:border dark:border-white/30
                    text-black/70 hover:text-black border-black/50 hover:border-black 
                    animate-background-shine-slow dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[linear-gradient(110deg,#dadada,45%,#FFFFFF,55%,#dadada)] bg-[length:200%_100%]`
  return (
    <div
      id="technologies"
      className="section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32"
    >
      <div
        className={`flex flex-row gap-x-2 mb-4 items-center justify-center dark:text-white/90 text-black/90`}
      >
        <MdBiotech className="size-8" />
        <h1
          className={`font-semibold text-xl md:text-2xl xl:text-3xl`}
          data-translate="education"
        >
          {[
            isSpanish && "Tecnologías y Herramientas",
            isEnglish && "Technologies and Tools",
          ]}
        </h1>
      </div>
      <p
        className={`mb-4 text-xs md:text-base text-black/70 dark:text-white/70`}
      >
        {[
          isSpanish && (
            <p>
              Las habilidades, herramientas y tecnologías que utilizo para dar
              vida a tus productos
            </p>
          ),
          isEnglish && (
            <p>
              The skills, tools and technologies I use to bring your products to
              life
            </p>
          ),
        ]}
      </p>
      <div className="grid grid-cols-4 md:grid-cols-5 auto-rows-auto gap-x-4 w-full gap-y-4 mb-4">
        <Technologie
          className={`p-2 rounded-xl bg-transparent
               ${cardClass}`}
          techName={"HTML"}
        >
          <FaHtml5 className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"CSS"}
        >
          <FaCss3Alt className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"JavaScript"}
        >
          <SiJavascript className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"Tailwind"}
        >
          <SiTailwindcss className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"Bootstrap"}
        >
          <FaBootstrap className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent
            ${cardClass}`}
          techName={"React"}
        >
          <FaReact className="size-6 md:size-12 animate-spin-slow" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"NodeJS"}
        >
          <FaNode className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"MySQL"}
        >
          <SiMysql className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"Git"}
        >
          <FaGitAlt className="size-6 md:size-12" />
        </Technologie>
        <Technologie
          className={`p-2 rounded-xl bg-transparent 
            ${cardClass}`}
          techName={"Java"}
        >
          <FaJava className="size-6 md:size-12" />
        </Technologie>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1
          className={`font-bold text-base md:text-2xl text-black/90 dark:text-white/90`}
        >
          {[
            isSpanish && "Actualmente trabajando en:",
            isEnglish && "Currently working on:",
          ]}
        </h1>
        <p className={`text-xs md:text-sm text-black/60 dark:text-white/60`}>
          {[
            isSpanish && (
              <p>
                Desarrollo de un sitio web E-commerce con React, TailwindCSS y
                Firebase, donde puedes comprar accesorios de joyería (aún en
                proceso)
              </p>
            ),
            isEnglish && (
              <p>
                Development of an E-commerce website with React, TailwindCSS and
                Firebase, where you can buy jewelry accessories (still in
                process)
              </p>
            ),
          ]}
        </p>
      </div>
    </div>
  );
}
export default Tech;
