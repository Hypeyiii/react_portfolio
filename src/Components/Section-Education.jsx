import { Timeline } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import useLanguage from "../Hooks/useLanguages";

function Education() {
  const { isSpanish, isEnglish } = useLanguage();

  return (
    <div
      id="education"
      className="section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32"
    >
      <div className="flex flex-row gap-x-2 mb-8 items-center justify-center text-black/90 dark:text-white/90">
        <IoMdSchool className="size-8" />
        <h2
          className={`font-semibold text-xl md:text-2xl xl:text-3xl`}
          data-translate="education"
        >
          {[
            isSpanish && "Educación y Experiencia",
            isEnglish && "Education and Experience",
          ]}
        </h2>
      </div>
      <Timeline className="text-black ml-[6px]">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="md:gap-y-2 flex flex-col items-start justify-center">
            <Timeline.Time
              className={`text-xs md:text-xl text-black/80 dark:text-white/80`}
            >
              {[isSpanish && "...Actualmente", isEnglish && "...Currently"]}
            </Timeline.Time>
            <Timeline.Title
              className={`text-base md:text-2xl text-dark dark:text-white`}
            >
              {[
                isSpanish && "Desarrollador y Estudiante",
                isEnglish && "Developer and Student",
              ]}
            </Timeline.Title>
            <Timeline.Body
              className={`text-sm md:text-lg text-black/70 dark:text-white/70`}
            >
              {[
                isSpanish && (
                  <p>
                    Cursando 6to semestre en la carrera de Ingeniero
                    Administrador de Sistemas (IAS). Desarrollando Web´ s de
                    manera didactica y apasionada.
                  </p>
                ),
                isEnglish && (
                  <p>
                    Studying the 6th semester in the Systems Administrator
                    Engineer career. Developing websites in a didactic and
                    passionate way.
                  </p>
                ),
              ]}
            </Timeline.Body>
            <a
              href="https://www.uanl.mx/oferta/ingeniero-administrador-de-sistemas/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-row gap-x-1 items-center justify-center p-2 bg-black border border-white/20 rounded-xl
              transition-all duration-300 text-white/60 hover:text-white active:scale-105 active:duration-75 text-xs md:text-sm`}
            >
              {[isSpanish && "Saber más", isEnglish && "Learn more"]}
              <FaAngleRight />
            </a>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="md:gap-y-2 flex flex-col items-start justify-center">
            <Timeline.Time
              className={`text-xs md:text-xl text-black/80 dark:text-white/80`}
            >
              {[isSpanish && "Diciembre, 2021", isEnglish && "December, 2021"]}
            </Timeline.Time>
            <Timeline.Title
              className={`text-base md:text-2xl text-dark dark:text-white`}
            >
              {[
                isSpanish && "Iniciando en el Desarrollo Web",
                isEnglish && "Starting in Web Development",
              ]}
            </Timeline.Title>
            <Timeline.Body
              className={`text-sm md:text-lg text-black/70 dark:text-white/70`}
            >
              {[
                isSpanish && (
                  <p>
                    Empecé a adentrarme en el mundo del Desarrollo Web, cursando
                    materias y aprendiendo tecnologías didacticamente.
                  </p>
                ),
                isEnglish && (
                  <p>
                    I started to delve into the world of Web Development, taking
                    courses and learning technologies in a didactic way.
                  </p>
                ),
              ]}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="md:gap-y-2 flex flex-col items-start justify-center">
            <Timeline.Time
              className={`text-xs md:text-xl text-black/80 dark:text-white/80`}
            >
              {[isSpanish && "Agosto, 2023", isEnglish && "August, 2023"]}
            </Timeline.Time>
            <Timeline.Title
              className={`text-base md:text-2xl text-dark dark:text-white`}
            >
              {[isSpanish && "Freelancer", isEnglish && "Freelancer"]}
            </Timeline.Title>
            <Timeline.Body
              className={`text-sm md:text-lg text-black/70 dark:text-white/70`}
            >
              {[
                isSpanish && (
                  <p>
                    Empecé a ofrecer mis servicios como desarrollador de
                    software de manera independiente. Trabajando con negocios
                    locales y pequeñas empresas.
                  </p>
                ),
                isEnglish && (
                  <p>
                    I started offering my services as a software developer
                    independently. Working with local businesses and small
                    businesses.
                  </p>
                ),
              ]}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
export default Education;
