import "./App.css";
import Projects from "./Components/Section-Projects.jsx";
import Footer from "./Components/Footer.jsx";
import AboutMeModal from "./Modals/AboutMeModal.jsx";
import Education from "./Components/Section-Education.jsx";
import Tech from "./Components/Section-Tech.jsx";
import Introduction from "./Components/Section-Introduction.jsx";
import Header from "./Components/Section-Header.jsx";
import { useState, useEffect } from "react";

function App() {
  const [isAboutMeModal, setIsAboutMeModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [isSpanish, setIsSpanish] = useState(true);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkModal, setIsDarkModal] = useState(false);
  const [isSystemMode, setIsSystemMode] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.querySelector("body").classList.add("overflow-hidden");
  };
  const closeModal = () => {
    setModalOpen(false);
    document.querySelector("body").classList.remove("overflow-hidden");
  };
  const openAboutMeModal = () => {
    setIsAboutMeModal(true);
    setModalOpen(false);
  };
  const closeAboutMeModal = () => {
    setIsAboutMeModal(false);
    document.querySelector("body").classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      var sections = document.querySelectorAll(".section");
      var navItems = document.querySelectorAll(".item");
      sections.forEach(function (section, index) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (window.scrollY + 128 >= top && window.scrollY < bottom) {
          navItems.forEach(function (item) {
            item.classList.remove("lightMode");
          });
          if (isDarkMode || isSystemMode || isLightMode) {
            navItems[index].classList.add("lightMode");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const closeLanguageModal = () => {
    setLanguageModal(false);
  };

  const openLanguageModal = () => {
    setLanguageModal(true);
    document.querySelector("#fadeLanguage").classList.remove("fadeLanguage");
    closeDarkModal();
  };

  const onSpanish = () => {
    setIsSpanish(true);
    document.querySelector("#fadeLanguage").classList.add("fadeLanguage");
    if (isEnglish) {
      setIsEnglish(false);
    }
  };

  const onEnglish = () => {
    setIsEnglish(true);
    document.querySelector("#fadeLanguage").classList.add("fadeLanguage");
    if (isSpanish) {
      setIsSpanish(false);
    }
  };

  const openDarkModal = () => {
    setIsDarkModal(true);
    document.querySelector("#fade").classList.remove("fade");
    closeLanguageModal();
  };

  const closeDarkModal = () => {
    setIsDarkModal(false);
    document.querySelector(".fadeModal").classList.add("fadeModalOut");
  };

  const onCloseModals = () => {
    if (languageModal) {
      closeLanguageModal();
    }
    if (isDarkModal) {
      closeDarkModal();
    }
  };

  const onDarkMode = () => {
    document.querySelector("#fade").classList.add("fade");
    setIsDarkMode(true);
    document.querySelector("body").classList.add("dark");
    setIsLightMode(false);
    setIsSystemMode(false);
  };

  const onLightMode = () => {
    document.querySelector("#fade").classList.add("fade");
    setIsLightMode(true);
    document.querySelector("body").classList.remove("dark");
    setIsDarkMode(false);
    setIsSystemMode(false);
  };

  const onSystemMode = () => {
    document.querySelector("#fade").classList.add("fade");
    setIsSystemMode(true);
    setIsDarkMode(false);
    setIsLightMode(false);
  };

  useEffect(() => {
    if (isSystemMode) {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDarkMode) {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [isSystemMode]);

  return (
    <>
      <div
        className="absolute w-full h-auto -z-10
    dark:from-gray-600 dark:via-black dark:to-gray-600 
      bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-50 to-gray-900"
        onClick={onCloseModals}
      >
        <Header
          isSpanish={isSpanish}
          isEnglish={isEnglish}
          isDarkMode={isDarkMode}
          isLightMode={isLightMode}
          isSystemMode={isSystemMode}
          onDarkMode={onDarkMode}
          onLightMode={onLightMode}
          onSystemMode={onSystemMode}
          openDarkModal={openDarkModal}
          closeDarkModal={closeDarkModal}
          isDarkModal={isDarkModal}
          openLanguageModal={openLanguageModal}
          closeLanguageModal={closeLanguageModal}
          languageModal={languageModal}
          onSpanish={onSpanish}
          onEnglish={onEnglish}
        />
        <Introduction
          onOpen={openModal}
          modalOpen={modalOpen}
          closeModal={closeModal}
          openAboutMeModal={openAboutMeModal}
          isSpanish={isSpanish}
          isEnglish={isEnglish}
        />
        <Education isSpanish={isSpanish} isEnglish={isEnglish} />
        <Tech isSpanish={isSpanish} isEnglish={isEnglish} />
        <Projects isEnglish={isEnglish} isSpanish={isSpanish} />
        <Footer
          isSpanish={isSpanish}
          isEnglish={isEnglish}
          meModal={openAboutMeModal}
        />

        <AboutMeModal
          isSpanish={isSpanish}
          isEnglish={isEnglish}
          isAboutMeModal={isAboutMeModal}
          onClose={closeAboutMeModal}
        />
      </div>
    </>
  );
}
export default App;
