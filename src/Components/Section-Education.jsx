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
              {[
                isSpanish && "Febrero 2025 - Actualmente",
                isEnglish && "February 2025 - Currently",
              ]}
            </Timeline.Time>
            <Timeline.Title
              className={`text-base md:text-2xl text-dark dark:text-white`}
            >
              {[isSpanish && "Técnico en IT", isEnglish && "IT Technician"]}
            </Timeline.Title>
            <Timeline.Body
              className={`text-xs md:text-sm text-black/70 dark:text-white/70`}
            >
              {[
                isSpanish && (
                  <>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Actualmente desempeñando el rol de Técnico
                      de IT en Polaris Inc.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Gestión y mantenimiento de Active Directory
                      (usuarios, grupos, políticas de grupo).
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>SCCM, distribución de software,
                      actualizaciones, gestión de dispositivos.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Resolución de problemas de hardware y
                      software (firmware, drivers, BIOS, Bitlocker, etc.).
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Soporte a lineas de producción y estaciones
                      de trabajo.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Seguimiento, documentación y resolución de
                      incidencias utilizando ServiceNow.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Conocimiento en conceptos/herramientas
                      relacionadas a Network (Cisco DNA, Putty, etc.).
                    </p>
                  </>
                ),
                isEnglish && (
                  <>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Currently working as an IT Technician at
                      Polaris Inc.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Management and maintenance of Active
                      Directory (users, groups, group policies).
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>SCCM, software distribution, updates, device
                      management.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Troubleshooting hardware and software
                      (firmware, drivers, BIOS, Bitlocker, etc.).
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Support for production lines and
                      workstations.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Tracking, documentation and resolution of
                      incidents using ServiceNow.
                    </p>
                    <p className="flex flex-row gap-x-2 ml-5">
                      <span>-</span>Knowledge of Network-related concepts/tools
                      (Cisco DNA, Putty, etc.).
                    </p>
                  </>
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
              {[
                isSpanish && "Agosto 2024 - Febrero 2025",
                isEnglish && "August 2024 - February 2025",
              ]}
            </Timeline.Time>
            <Timeline.Title
              className={`text-base md:text-2xl text-dark dark:text-white`}
            >
              {[isSpanish && "Practicante de IT", isEnglish && "IT Intern"]}
            </Timeline.Title>
            <Timeline.Body
              className={`text-sm md:text-lg text-black/70 dark:text-white/70`}
            >
              {[
                isSpanish && (
                  <p>
                    Comencé a trabajar en el departamento de IT en la empresa de
                    Polaris Industries.
                  </p>
                ),
                isEnglish && (
                  <p>
                    I started working in the IT department at Polaris
                    Industries.
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
              {[isSpanish && "Agosto 2023", isEnglish && "August 2023"]}
            </Timeline.Time>
            <Timeline.Title
              className={`text-base md:text-2xl text-dark dark:text-white`}
            >
              {[
                isSpanish && "Frelancer y Estudiante",
                isEnglish && "Freelancer and Student",
              ]}
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
            <a
              href="https://github.com/Hypeyiii?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-row gap-x-1 items-center justify-center p-2 bg-black border border-white/20 rounded-xl
              transition-all duration-300 text-white/60 hover:text-white active:scale-105 active:duration-75 text-xs md:text-sm`}
            >
              {[
                isSpanish && "Mira todos mis proyectos",
                isEnglish && "See all my projects",
              ]}
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
      </Timeline>
    </div>
  );
}
export default Education;
