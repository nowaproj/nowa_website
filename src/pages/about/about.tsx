import { Footer, NavBar, StartBuildingSection } from "../../components";
import "../../styles/about.scss";
import hero from "../../assets/about-hero2.png";
import rocket from "../../assets/rocket.png";
import { motion } from "framer-motion";
import raed from "../../assets/raed.png";
import anas from "../../assets/anas.png";
import ludo from "../../assets/ludovica.png";
import { AiFillLinkedin } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <main>
        <div className="about-hero-wrapper">
          <div className="about-hero">
            <NavBar />
            <div className="hero-content mara mw">
              <motion.div
                className="hero-image"
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
              >
                <img src={hero} alt="hero" />
              </motion.div>
              <motion.div
                className="hero-mission"
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
                viewport={{
                  once: true,
                }}
              >
                <p>
                  {t("ourM")}
                  <img src={rocket} alt="lift off!" />
                </p>
                <h1>{t("ourD")}</h1>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="about-team mara mw">
          <p className="team-heading">{t("team")}</p>
          <div className="team-members">
            <div className="team-member">
              <div className="team-photo-wrapper">
                <div className="team-photo">
                  <div className="front">
                    <img src={raed} alt="raed abdallah" />
                  </div>
                  <div className="back">
                    <a
                      href="https://www.linkedin.com/in/raed-abdallah-48b105101/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <p>{t("raed")}</p>
              <p>{t("cto")}</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <div className="team-photo-wrapper">
                  <div className="team-photo">
                    <div className="front">
                      <img src={anas} alt="Anas Alsalhi" />
                    </div>
                    <div className="back">
                      <a
                        href="https://www.linkedin.com/in/anas-alsalhi/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p>{t("anas")}</p>
              <p>{t("ceo")}</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <div className="team-photo-wrapper">
                  <div className="team-photo">
                    <div className="front">
                      <img src={ludo} alt="Ludovica Palio" />
                    </div>
                    <div className="back">
                      <a
                        href="https://www.linkedin.com/in/ludovica-palio/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>{t("ludo")}</p>
              <p>{t("cco")}</p>
            </div>
          </div>
        </div>
        <StartBuildingSection />
      </main>
      <Footer />
    </>
  );
};
