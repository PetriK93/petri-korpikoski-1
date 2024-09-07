import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/portfolio logo.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import finIcon from "../../assets/finIcon.png";
import enIcon from "../../assets/enIcon.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero({ language, toggleLanguage }) {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const langIcon = language === "en" ? finIcon : enIcon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Petri Korpikoski"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        <div id="langSwitch" className={styles.langSwitchContainer}>
          <img
            src={langIcon}
            className={styles.langSwitch}
            alt="Language switch"
            onClick={toggleLanguage}
          />
          <p className={styles.bold}>{language === "en" ? "Fi" : "En"}</p>
        </div>
      </div>
      <div className={styles.info}>
        <h1>
          Petri
          <br />
          Korpikoski
        </h1>
        <h2>
          {language === "en" ? "Frontend Developer" : "Frontend-kehittäjä"}
        </h2>
        <span>
          <a type="twitter" href="https://x.com/Petrik_Dev" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a type="github" href="https://github.com/PetriK93" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a type="linkedin" href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          {language === "en"
            ? "React developer with a passion for creating artistically pleasing and functionally seamless user experiences for businesses and individuals."
            : "React-kehittäjä, jolla on intohimo luoda taiteellisesti miellyttäviä ja toiminnallisesti saumattomia käyttäjäkokemuksia yrityksille ja yksityishenkilöille."}
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
