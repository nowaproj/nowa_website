// start building apps for free section
import phones from "../../assets/preview-phone.png";
import { motion } from "framer-motion";
import "./StartBuilding.scss";
import { useTranslation } from "react-i18next";

export const StartBuildingSection = () => {
  const { t } = useTranslation();

  return (
    <div className="start-building">
      <div className="st-preview mara mw">
        <p>{t("sb1")}</p>
        <p>{t("sb2")}</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeH3WvEL6AdKQBXMtwzpur9O1vqZKh_FUhMvH7msOnNLjQwMg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("earlyAccess")}
        </a>
        <motion.img
          src={phones}
          alt="product preview"
          initial={{
            opacity: 0,
            cy: "100%",
          }}
          style={{}}
          whileInView={{ y: [250, 0], opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
        />
      </div>
    </div>
  );
};
