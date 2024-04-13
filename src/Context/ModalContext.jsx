import { useState } from "react";
import { createContext } from "react";
export const ModalContext = createContext({
  isDarkModal: false,
  languageModal: false,
  isAboutMeModal: false,
  modalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  openLanguageModal: () => {},
  closeLanguageModal: () => {},
  openDarkModal: () => {},
  closeDarkModal: () => {},
  openAboutMeModal: () => {},
  closeAboutMeModal: () => {},
  onCloseModals: () => {},
});

export function ModalProvider({ children }) {
  const [isDarkModal, setIsDarkModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [isAboutMeModal, setIsAboutMeModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isDarkModal,
        languageModal,
        isAboutMeModal,
        modalOpen,
        setIsDarkModal,
        setLanguageModal,
        setIsAboutMeModal,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
