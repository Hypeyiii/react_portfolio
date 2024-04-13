import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";

export default function useModals() {
  const {
    isDarkModal,
    languageModal,
    isAboutMeModal,
    modalOpen,
    setIsDarkModal,
    setLanguageModal,
    setIsAboutMeModal,
    setModalOpen,
  } = useContext(ModalContext);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openLanguageModal = () => {
    setLanguageModal(true);
    document.querySelector("#fadeLanguage").classList.remove("fadeLanguage");
    closeDarkModal();
  };

  const closeLanguageModal = () => {
    setLanguageModal(false);
    document.querySelector("#fadeLanguage").classList.add("fadeLanguage");
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

  const openAboutMeModal = () => {
    setIsAboutMeModal(true);
  };

  const closeAboutMeModal = () => {
    setIsAboutMeModal(false);
  };

  const onCloseModals = () => {
    if (languageModal) {
      closeLanguageModal();
    }
    if (isDarkModal) {
      closeDarkModal();
    }
  };

  return {
    isDarkModal,
    languageModal,
    isAboutMeModal,
    modalOpen,
    openModal,
    closeModal,
    openLanguageModal,
    closeLanguageModal,
    openDarkModal,
    closeDarkModal,
    openAboutMeModal,
    closeAboutMeModal,
    onCloseModals,
  };
}
