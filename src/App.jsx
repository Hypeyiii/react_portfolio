import "./App.css";
import Projects from "./Components/Section-Projects.jsx";
import Footer from "./Components/Footer.jsx";
import AboutMeModal from "./Modals/AboutMeModal.jsx";
import Education from "./Components/Section-Education.jsx";
import Tech from "./Components/Section-Tech.jsx";
import Introduction from "./Components/Section-Introduction.jsx";
import Header from "./Components/Section-Header.jsx";
import useModal from "./Hooks/useModal";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { onCloseModals } = useModal();
  return (
    <>
      <div
        className="absolute w-full h-auto -z-10
      dark:from-gray-600 dark:via-black dark:to-gray-600 
        bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-50 to-gray-900"
        onClick={onCloseModals}
      >
        <Header />
        <Introduction />
        <Education />
        <Tech />
        <Projects />
        <Footer />
        <AboutMeModal />
        <Analytics />
      </div>
    </>
  );
}
export default App;