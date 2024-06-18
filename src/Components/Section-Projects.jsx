import { FaNodeJs, FaProjectDiagram, FaStripe } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import firstProject from "../assets/Projects-1.png";
import ViewButton from "./ViewButton.jsx";
import TechButtons from "./TechButton.jsx";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwindcss(1).svg";
import secondProject from "../assets/Project-2.png";
import thirdProject from "../assets/Project-3.png";
import fouthProject from "../assets/Project-4.png";
import typescriptIcon from "../assets/typescript.svg";
import useLanguage from "../Hooks/useLanguages";
import csharp from "../assets/c-sharp.svg";
import dotnet from "../assets/dotnet.svg";
import sqlserver from "../assets/sqlserver.svg";
import jwt from "../assets/jwt.svg";
import { MdApi } from "react-icons/md";
import { DiMysql } from "react-icons/di";

const Project = () => {
  const { isSpanish, isEnglish } = useLanguage();
  return (
    <>
      <div
        id="projects"
        className="section flex flex-col items-start justify-center mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[850px] px-2 mt-32"
      >
        <div
          className={`flex flex-row gap-x-2 mb-4 items-center justify-center text-black/80 dark:text-white/80`}
        >
          <FaProjectDiagram className="size-6" />
          <h1
            className={`font-semibold text-xl md:text-2xl xl:text-3xl`}
            data-translate="education"
          >
            {[isSpanish && "Proyectos", isEnglish && "Projects"]}
          </h1>
        </div>
        <p
          className={`mb-6 text-xs md:text-base text-black/70 dark:text-white/70`}
        >
          {[
            isSpanish &&
              "Algunos de los proyectos que he desarrollado y contribuido",
            isEnglish &&
              "Some of the projects I have developed and contributed",
          ]}
        </p>
        <Projects
          projectImg={thirdProject}
          projectName="Lensmania - Sitio web E-commerce"
          projectDescription={[
            isSpanish &&
              "E-commerce página web para la venta de lentes, desarrollada para un pequeño negocio de lentes, en proceso de desarrollo",
            isEnglish &&
              "E-commerce website for the sale of glasses, developed for a small glasses business, in the process of development",
          ]}
          viewButtons={
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ViewButton
                  href={"https://github.com/Hypeyiii/GlassesPage"}
                  textViewButton={[isSpanish && "Código", isEnglish && "Code"]}
                >
                  <FaGithub className="size-5" />
                </ViewButton>
              </div>
              <div className="col-span-1 flex">
                <ViewButton
                  href={"https://isaac-glasses-page.vercel.app/"}
                  textViewButton={[isSpanish && "Ver", isEnglish && "View"]}
                >
                  <IoEye className="size-5" />
                </ViewButton>
              </div>
              <div className="col-span-1 flex">
                <ViewButton
                  href={"https://github.com/Hypeyiii/glasses-page-api-rest"}
                  textViewButton={[isSpanish && "API", isEnglish && "API"]}
                >
                  <MdApi className="size-5" />
                </ViewButton>
              </div>
            </div>
          }
        >
          <TechButtons buttonText={"React.Js"}>
            <img
              src={react}
              alt="React Icon"
              className="size-5 animate-spin-slow"
            />
          </TechButtons>
          <TechButtons buttonText={"TypeScript"}>
            <img
              src={typescriptIcon}
              alt="NeatBeans Icon"
              className="size-4 text-blue-600"
            />
          </TechButtons>
          <TechButtons buttonText={"Tailwind"}>
            <img src={tailwind} alt="Tailwind Icon" className="size-5" />
          </TechButtons>
          <TechButtons buttonText={"Node"}>
            <FaNodeJs className="size-5 text-[#8CC84B] " />
          </TechButtons>
          <TechButtons buttonText={"JWT"}>
            <img src={jwt} alt="JWT Icon" className="size-5" />
          </TechButtons>
          <TechButtons buttonText={"Stripe"}>
            <FaStripe className="size-5 text-[#6772E5] " />
          </TechButtons>
          <TechButtons buttonText={"MySQL"}>
            <DiMysql className="size-5 text-[#5d87a1] " />
          </TechButtons>
        </Projects>
        <Projects
          projectImg={firstProject}
          projectName={[
            isSpanish && "Mariana Accesorios - Sitio Web E-commerce",
            isEnglish && "Mariana Accesorios - E-commerce Website",
          ]}
          projectDescription={[
            isSpanish && (
              <p>
                Sitio web E-commerce desarrollado con React, TailwindCSS y
                Firebase, donde puedes comprar accesorios de joyeria (aún en
                proceso)
              </p>
            ),
            isEnglish && (
              <p>
                E-commerce website developed with React, TailwindCSS and
                Firebase, where you can buy jewelry accessories (still in
                process)
              </p>
            ),
          ]}
          viewButtons={
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1">
                <ViewButton
                  href={"https://github.com/Hypeyiii/Mariana-Accesorios"}
                  textViewButton={[isSpanish && "Código", isEnglish && "Code"]}
                >
                  <FaGithub className="size-5" />
                </ViewButton>
              </div>
              <div className="col-span-1 flex">
                <ViewButton
                  href={"https://mariana-accesorios.vercel.app/"}
                  textViewButton={[isSpanish && "Ver", isEnglish && "View"]}
                >
                  <IoEye className="size-5" />
                </ViewButton>
              </div>
            </div>
          }
        >
          <TechButtons buttonText={"React.Js"}>
            <img
              src={react}
              alt="Tailwind Icon"
              className="size-5 animate-spin-slow"
            />
          </TechButtons>
          <TechButtons buttonText={"Tailwind"}>
            <img src={tailwind} alt="NeatBeans Icon" className="size-5" />
          </TechButtons>
          <TechButtons buttonText={"Node"}>
            <FaNodeJs className="size-5 text-[#8CC84B] " />
          </TechButtons>
        </Projects>
        <Projects
          projectImg={secondProject}
          projectName="World Ranks"
          projectDescription={[
            isSpanish &&
              "Sitio web donde puedes ver la información de los paises. Desarrolado para fines de aprendizaje",
            isEnglish &&
              "Website where you can see the information of the countries. Developed for learning purposes",
          ]}
          viewButtons={
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1">
                <ViewButton
                  href={"https://github.com/Hypeyiii/World-Ranks"}
                  textViewButton={[isSpanish && "Código", isEnglish && "Code"]}
                >
                  <FaGithub className="size-5" />
                </ViewButton>
              </div>
              <div className="col-span-1 flex">
                <ViewButton
                  href={"https://world-ranks-one-mu.vercel.app/"}
                  textViewButton={[isSpanish && "Ver", isEnglish && "View"]}
                >
                  <IoEye className="size-5" />
                </ViewButton>
              </div>
            </div>
          }
        >
          <TechButtons buttonText={"React.Js"}>
            <img
              src={react}
              alt="Java Icon"
              className="size-5 animate-spin-slow"
            />
          </TechButtons>
          <TechButtons buttonText={"Tailwind"}>
            <img src={tailwind} alt="NeatBeans Icon" className="size-5" />
          </TechButtons>
        </Projects>
        <Projects
          projectImg={fouthProject}
          projectName="Sakura Store - E-commerce"
          projectDescription={[
            isSpanish &&
              "E-commerce desarrollado para la acreditación de la materia de Programación Web.",
            isEnglish &&
              "E-commerce developed for the accreditation of the Web Programming subject.",
          ]}
          viewButtons={
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1">
                <ViewButton
                  href={"https://github.com/Hypeyiii/Tienda-Online"}
                  textViewButton={[isSpanish && "Código", isEnglish && "Code"]}
                >
                  <FaGithub className="size-5" />
                </ViewButton>
              </div>
            </div>
          }
        >
          <TechButtons buttonText={"C#"}>
            <img src={csharp} alt="C# icon" className="size-5" />
          </TechButtons>
          <TechButtons buttonText={".NET"}>
            <img
              src={dotnet}
              alt="Net Core icon"
              className="size-4 text-blue-600"
            />
          </TechButtons>
          <TechButtons buttonText={"MSSQL"}>
            <img src={sqlserver} alt="MS SQL Icon" className="size-5" />
          </TechButtons>
        </Projects>
      </div>
    </>
  );
};
export default Project;

const Projects = ({
  projectDescription,
  projectName,
  projectImg,
  children,
  viewButtons,
}) => {
  return (
    <div className="text-black/90 dark:text-white/90 mt-5 grid grid-cols-12 auto-rows-auto w-full gap-x-4 gap-y-4 items-start justify-center mb-10">
      <div
        className="col-span-12 md:col-span-6 w-full border border-white/20 hover:border-white/30 transition-all duration-300 rounded-lg
      overflow-hidden aspect-video cursor-pointer relative h-full group [&>img]:hover:blur-[1.5px]"
      >
        <div
          className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 
              to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end w-full"
        >
          <div>
            <div
              className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition 
                                duration-300 ease-in-out"
            >
              <div className="font-bold text-sm md:text-lg">{projectName}</div>
              <div className="opacity-60 text-xs md:text-sm ">
                {projectDescription}
              </div>
            </div>
          </div>
        </div>
        <img
          alt={projectName + "Image"}
          className="object-cover w-full h-full aspect-square group-hover:scale-105 transition duration-300 ease-in-out"
          src={projectImg}
        />
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col gap-y-2 md:gap-y-4 items-start justify-center">
        <h1 className={`text-xl md:text-3xl text-pretty font-semibold`}>
          {projectName}
        </h1>
        <div className="grid grid-cols-4 auto-rows-auto gap gap-2">
          {children}
        </div>
        <p
          className={`text-sm my-3 md:text-base text-black/70 dark:text-white/70`}
        >
          {projectDescription}
        </p>
        {viewButtons}
      </div>
    </div>
  );
};
