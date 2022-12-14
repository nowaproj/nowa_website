import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";
import "./styles/sizes.scss";
import "./styles/sizes.scss";
import "./index.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import ar from "./locale/ar.json";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { EventPage } from "./pages/event/event";

ReactGA.initialize("G-SDXTNSBBMV");

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: en,
      ar: ar,
    },

    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
