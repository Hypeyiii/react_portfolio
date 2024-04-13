import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./Context/LanguageContext";
import { ModalProvider } from "./Context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ModalProvider>
);
