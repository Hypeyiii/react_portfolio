import { FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiSocketdotio } from "react-icons/si";
import { TiDelete } from "react-icons/ti";
import coupleavatar from "../assets/coupleavatar.jpg";
import "../App.css";

const AboutMeModal = ({
  onClose,
  isAboutMeModal,
  isSpanish,
  isEnglish,
}) => {
  return (
    <>
      {isAboutMeModal && (
        <div
          className={`z-40 text-white/90 dark:text-black/80 w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto fixed inset-0 bg-none 
      px-2 flex justify-center items-center`}
        >
          <div
            className="fixed inset-0 dark:opacity-90 dark:bg-gradient-to-tr dark:from-black dark:via-white dark:to-black opacity-95 
              bg-gradient-to-br from-slate-600 via-black to-slate-600"
            onClick={onClose}
          ></div>
          <div
            className={`fade-in z-50 flex justify-center items-center gap-4`}
          >
            <div
              className={`text-xs sm:text-lg text-pretty gap-y-2 grid grid-cols-12`}
            >
              <div className="col-span-12 items-end justify-end flex">
                <button className="hover:bg-white/30" onClick={onClose}>
                  <TiDelete className="size-8 md:size-12 text-white" />
                </button>
              </div>
              <div className="col-span-12 md:col-span-8 flex flex-col items-start justify-center">
                <h1 className="text-white dark:text-black text-sm sm:text-xl font-bold">
                  {[
                    isSpanish && "Hola, mi nombre es Isaac Frias",
                    isEnglish && "Hello, my name is Isaac Frias",
                  ]}
                </h1>
                <h1>
                  {[
                    isSpanish && (
                      <p>
                        Actualmente tengo 19 años, nací en Monterrey, Nuevo León
                        el 31 de Agosto del 2004, y soy estudiante de ingeniería
                        apasionado por el desarrollo web y la programación. Hoy
                        en día estoy aprendiendo y dominando tecnologías y
                        herramientas para el desarrollo de aplicaciones web.
                      </p>
                    ),
                    isEnglish && (
                      <p>
                        I am currently 19 years old, I was born in Monterrey,
                        Nuevo León on August 31, 2004, and I am a student of
                        engineering passionate about web development and
                        programming. Nowadays I am learning and mastering
                        technologies and tools for the development of web
                        applications.
                      </p>
                    ),
                  ]}
                </h1>
                <ul className="flex items-center justify-start gap-x-4 mt-1">
                  <li>
                    <FaReact className="size-4 md:size-6 animate-spin-slow" />
                  </li>
                  <li>
                    <SiExpress className="size-4 md:size-6" />
                  </li>
                  <li>
                    <SiPostgresql className="size-4 md:size-6" />
                  </li>
                  <li>
                    <SiSocketdotio className="size-4 md:size-6" />
                  </li>
                  <li>
                    <FaNode className="size-6 md:size-8" />
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-4 flex justify-center items-center">
                <img
                  src={coupleavatar}
                  alt="Imagen"
                  className={`rounded-full size-40 md:size-48`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMeModal;
