import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero_img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Petri_Korpikoski_CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero({ language, className }) {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={`${styles.container} ${className}`}>
      <div className={styles.imageContainer}>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Petri Korpikoski"
        />
      </div>
      <div className={styles.info}>
        <h1 id="about" className={styles.nameTitle}>
          Petri
          <br />
          Korpikoski
        </h1>
        <h2 className={language === "en" ? styles["h2-en"] : styles["h2-fi"]}>
          {language === "en" ? "ICT Student" : "Insinööriopiskelija"}
        </h2>
        <span>
          <a type="twitter" href="https://x.com/Petrik_Dev" target="_blank">
            <img className={styles.some} src={twitterIcon} alt="Twitter icon" />
          </a>
          <a type="github" href="https://github.com/PetriK93" target="_blank">
            <img className={styles.some} src={githubIcon} alt="Github icon" />
          </a>
          <a
            type="linkedin"
            href="https://linkedin.com/in/petri-korpikoski-5b6231334"
            target="_blank"
          >
            <img
              className={styles.some}
              src={linkedinIcon}
              alt="Linkedin icon"
            />
          </a>
        </span>
        <p className={styles.description}>
          {language === "en"
            ? "ICT Student in Lapland University of Applied Sciences. Most interested in full-stack development."
            : "Tieto-ja viestintätekniikan insinööriopiskelija Lapin AMK:ssa. Suuntautunut full-stack kehitykseen."}
        </p>
        <a href={CV} download>
          <button className="hover">
            {language === "en" ? "Resume" : "CV"}
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
