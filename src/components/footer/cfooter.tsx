import "./footer.scss";
import logo from "../../assets/logo2.png";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="mara mw">
      <ul className="fl">
        <li className="fl-i">
          <img src={logo} alt="logo" />
        </li>
        <li>{t("footerC")}</li>
        <li>Hardenbergstraße 38, 10623 Berlin</li>
      </ul>
      <div className="fr">
        <ul className="fr-o">
          <li>
            <a
              href="https://docs.nowa.dev/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL1")}
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/ByKfn3H7gX"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL2")}
            </a>
          </li>
          <li>
            <a
              href="mailto:info@nowa.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL3")}
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/nowa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reddit
            </a>
          </li>
        </ul>
        <ul className="fr-t">
          <li>
            <a
              href="https://www.youtube.com/channel/UCvP7LKeb2sW1yTUqHAFEKOw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL4")}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/nowaengine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL5")}
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/nowa_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL6")}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nowa.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerL7")}
            </a>
          </li>
        </ul>
      </div>
      <img src={logo} alt="logo" className="logo-tabelt" />
    </footer>
  );
};
