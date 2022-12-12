import "./navbar.scss";
import logo from "../../assets/logo-nowa.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PopUpLanugage from "../LanguageDropDown";
import ar from "../../assets/ar.png";
import en from "../../assets/en.png";
import de from "../../assets/de.png";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const menuRef = useRef<HTMLUListElement>(null);
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);
  const languageMenuRef = useRef<HTMLImageElement>(null);
  const languageMenuRef2 = useRef<HTMLImageElement>(null);

  function toggleMenu(e: any) {
    // idk how I thought of this fix but hey, if it works it works
    if (
      e.target === languageMenuRef.current ||
      e.target === languageMenuRef2.current
    ) {
      setIsLanguageMenuVisible((old) => !old);
    } else if (
      (!e.path.includes(menuRef.current) &&
        !e.path.includes(languageMenuRef.current)) ||
      e?.path?.filter((e: any) => e.localName === "a").length > 0 ||
      e?.path?.filter((e: any) => e.localName === "p").length > 0
    ) {
      setIsLanguageMenuVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", toggleMenu);
    return () => {
      window.removeEventListener("click", toggleMenu);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <nav>
      <div className="mara mw">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <ul>
            <li>
              <Link to="/about">{t("nAbout")}</Link>
            </li>
            <li>
              <a
                href="https://docs.nowa.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nDoc")}
              </a>
            </li>
            {/* <li>
              <img
                src={
                  i18n.language === "ar" ? ar : i18n.language === "en" ? en : de
                }
                ref={languageMenuRef}
                className="menu-toggle"
              />
              <PopUpLanugage isVisible={isLanguageMenuVisible} />
            </li> */}
          </ul>
          <div className="mobile-menu">
            <AiOutlineMenu
              className="menu-icon"
              onClick={() => {
                menuRef.current?.classList.toggle("menu-visible");
              }}
            />
            {/* <li>
              <img
                src={
                  i18n.language === "ar" ? ar : i18n.language === "en" ? en : de
                }
                ref={languageMenuRef2}
                className="menu-toggle"
              />
              <PopUpLanugage isVisible={isLanguageMenuVisible} />
            </li> */}
          </div>
          <ul
            className="menu-mobile"
            ref={menuRef}
            onClick={() => {
              menuRef.current?.classList.toggle("menu-visible");
            }}
          >
            <li>
              <Link to="/about">{t("nAbout")}</Link>
            </li>
            <li>
              <a
                href="https://docs.nowa.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nDoc")}
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
