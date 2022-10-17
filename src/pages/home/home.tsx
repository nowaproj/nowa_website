import "../../styles/home.scss";
import hero from "../../assets/hero.png";
import video from "../../assets/video.png";
import vector1 from "../../assets/Vector.png";
import vector2 from "../../assets/Vector-1.png";
import vector3 from "../../assets/Vector-2.png";
import vector4 from "../../assets/Vector-3.png";
import vector5 from "../../assets/Vector-4.png";
import productFeature1 from "../../assets/feature-1.png";
import productFeature2 from "../../assets/feature-3.png";
import productFeature3 from "../../assets/feature-4.png";
import productFeature4 from "../../assets/feature-2.png";
import feature1 from "../../assets/small-feature-icon.png";
import feature2 from "../../assets/small-feature-icon (1).png";
import feature3 from "../../assets/small-feature-icon (2).png";
import feature4 from "../../assets/small-feature-icon (3).png";
import feature5 from "../../assets/small-feature-icon (4).png";
import { Footer, NavBar, StartBuildingSection } from "../../components";
import { Modal } from "../../foundation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ReactGA from "react-ga4";
export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    ReactGA.send({
      hintType: "pageview",
      page: "/home",
    });
  }, []);

  return (
    <>
      <main>
        <div className="hero-wrapper">
          <NavBar />
          <div className="hero mara mw" data-ar={i18n.language === "ar"}>
            <div className="hero-text">
              <motion.h1
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
              >
                {t("header")}
              </motion.h1>
              <motion.p
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
              >
                {t("headerSub")}
              </motion.p>
              <motion.a
                animate={{ y: [150, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeH3WvEL6AdKQBXMtwzpur9O1vqZKh_FUhMvH7msOnNLjQwMg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    action: "get early access",
                    category: "button_clicks",
                  });
                }}
              >
                {t("earlyAccess")}
              </motion.a>
            </div>
            <motion.img
              src={hero}
              alt="hero"
              className="hero-splash"
              whileInView={{ x: [400, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.75,
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
            />
            <motion.img
              src={hero}
              alt="hero"
              className="hero-splash2"
              whileInView={{ y: [500, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.75,
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
            />
          </div>
        </div>
        <section className="section-one mara mw">
          <p>{t("sectionOneBuild")}</p>
          <p>{t("sectionOneDiscover")}</p>
          <img
            src={video}
            alt="video"
            onClick={() => {
              ReactGA.event({
                action: "view video",
                category: "button_clicks",
              });
              setShowModal(true);
            }}
          />
          <p>{t("partners")}</p>
          <div className="so-sponsers mara mw">
            <img src={vector5} alt="microsoft" />
            <img src={vector4} alt="science and startups" />
            <img src={vector1} alt="berlin" />
            <img src={vector3} alt="europe union" />
            <img src={vector2} alt="esf berlin" />
          </div>
        </section>
        <section className="section-two mara mw">
          <div className="st-feature" data-ar={i18n.language === "ar"}>
            <motion.div
              className="feature-desc"
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>{t("featureOne")}</p>
              <p>{t("featureOneSub")}</p>
            </motion.div>
            <motion.div
              className="feature-image"
              initial={{
                x: 250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature1} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-feature" data-ar={i18n.language === "ar"}>
            <motion.div
              className="feature-desc"
              initial={{
                x: -250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>{t("featureTwo")}</p>
              <p>{t("featureTwoSub")}</p>
            </motion.div>
            <motion.div
              className="feature-image"
              initial={{
                x: 250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature2} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-feature" data-ar={i18n.language === "ar"}>
            <motion.div
              className="feature-desc"
              initial={{
                x: -250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>{t("featureThree")}</p>
              <p>{t("featureThreeSub")}</p>
            </motion.div>
            <motion.div
              className="feature-image"
              initial={{
                x: 250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature3} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-feature" data-ar={i18n.language === "ar"}>
            <motion.div
              className="feature-desc"
              initial={{
                x: -250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>{t("featureFour")}</p>
              <p>{t("featureFourSub")}</p>
            </motion.div>
            <motion.div
              className="feature-image"
              initial={{
                x: 250,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature4} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-features mara mw">
            <div className="feature-wrapper">
              <img src={feature5} alt="feature one" />
              <p>{t("ft1")}</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature2} alt="feature one" />
              <p>{t("ft2")}</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature3} alt="feature one" />
              <p>{t("ft3")}</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature4} alt="feature one" />
              <p>{t("ft4")}</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature1} alt="feature one" />
              <p>{t("ft5")}</p>
            </div>
          </div>
        </section>
        <StartBuildingSection />
      </main>
      <Footer />
      <Modal
        hideModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
        forceHide={false}
        modalAnimationClass={"ami"}
        modalAnimationClassR={"amo"}
        modalContainerAnimationClass="amci"
        modalContainerAnimationClassR="amco"
      >
        <iframe
          src="https://www.youtube.com/embed/UnnskF9AIi4?autoplay=1&mute=1"
          scrolling="no"
          allowFullScreen={true}
          title="How to create a NEWS APPLICATION in NOWA"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Modal>
    </>
  );
};
