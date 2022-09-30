import "./style.scss";
import { useTranslation } from "react-i18next";
import ar from "../../assets/ar.png";
import en from "../../assets/en.png";
import de from "../../assets/de.png";

function PopUpLanugage({ isVisible }: { isVisible: boolean }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      {isVisible && (
        <ul className={"lnul"}>
          <li data-selected={`${i18n.language === "en"}`}>
            <p
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <img src={en} width={32} height={32} />
              English
            </p>
          </li>
          <li data-selected={`${i18n.language === "ar"}`}>
            <p
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              <img src={ar} width={32} height={32} />
              العربية
            </p>
          </li>
          <li data-selected={`${i18n.language === "de"}`}>
            <p
              onClick={() => {
                i18n.changeLanguage("de");
              }}
            >
              <img src={de} width={32} height={32} />
              Deutsch
            </p>
          </li>
        </ul>
      )}
    </>
  );
}

export default PopUpLanugage;
