import styles from "./SkillsStyles.module.css";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import htmlIcon from "../../assets/htmlIcon.png";
import cssIcon from "../../assets/cssIcon.png";
import javascriptIcon from "../../assets/javascriptIcon.png";
import reacttIcon from "../../assets/reactIcon.png";
import nodejsIcon from "../../assets/nodejsIcon.png";
import pythonIcon from "../../assets/pythonIcon.png";
import viteIcon from "../../assets/viteIcon.png";
import gitIcon from "../../assets/gitIcon.png";
import githubLight from "../../assets/githubIconLight.png";
import githubDark from "../../assets/githubIconDark.png";
import vegasIcon from "../../assets/vegasIcon.png";
import photoshopIcon from "../../assets/photoshopIcon.png";
import reaperIcon from "../../assets/reaperIcon.png";
import obsLight from "../../assets/obsIconLight.png";
import obsDark from "../../assets/obsIconDark.png";
import videocameraIcon from "../../assets/videocameraIcon.png";
import contentCreationIcon from "../../assets/contentCreationIcon.png";
import mySQLIcon from "./../../assets/mySQLIcon.png";

import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills({ language }) {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  const gitHubIcon = theme === "light" ? githubLight : githubDark;
  const obsIcon = theme === "light" ? obsLight : obsDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 id="skills" className="sectionTitle">
        {language === "en" ? "Tech stack" : "Teknologiat"}
      </h1>
      <div className={styles.rowWrapper}>
        <div className={styles.skillList}>
          <SkillList src={htmlIcon} skill="HTML" />
          <SkillList src={cssIcon} skill="CSS" />
          <SkillList src={javascriptIcon} skill="Javascript" />
          <SkillList src={reacttIcon} skill="React" />
          <SkillList src={nodejsIcon} skill="Node.js" />
        </div>
        <div className={styles.skillList}>
          <SkillList src={mySQLIcon} skill="MySQL" />
          <SkillList src={pythonIcon} skill="Python" />
          <SkillList src={viteIcon} skill="Vite" />
          <SkillList src={gitIcon} skill="Git" />
          <SkillList src={gitHubIcon} skill="Github" />
        </div>
      </div>
      <hr />
      <h1 className="sectionTitle">
        {language === "en"
          ? "Other useful tech skills"
          : "Muita hyödyllisiä teknisiä taitoja"}
      </h1>
      <div className={styles.stackedSkillList}>
        <SkillList
          src={vegasIcon}
          skill={
            language === "en"
              ? "Vegas Pro (Video production)"
              : "Vegas Pro (Videoeditointi)"
          }
        />
        <SkillList
          src={photoshopIcon}
          skill={
            language === "en"
              ? "Photoshop (Photo editing)"
              : "Photoshop (Kuvan muokkaus)"
          }
        />
        <SkillList
          src={reaperIcon}
          skill={
            language === "en"
              ? "Reaper DAW (Audio production)"
              : "Reaper DAW (Äänituotanto)"
          }
        />
        <SkillList
          src={obsIcon}
          skill={
            language === "en"
              ? "OBS Studio (Video capture)"
              : "OBS Studio (Videotallennus)"
          }
        />
        <SkillList
          src={videocameraIcon}
          skill={
            language === "en"
              ? "Proficient with mics and video cameras"
              : "Kokemusta mikkien ja videokameroiden käytöstä"
          }
        />
        <SkillList
          src={contentCreationIcon}
          skill={
            language === "en"
              ? "Content creation (Social media)"
              : "Sisällöntuotanto (Sosiaalimedia)"
          }
        />
      </div>
      <hr />
      <h1 className="sectionTitle">
        {language === "en"
          ? "Soft & general skills"
          : "Pehmeät & yleiset taidot"}
      </h1>
      <div className={styles.softSkillsList}>
        <SkillList
          src={checkMarkIcon}
          skill={
            language === "en"
              ? "Native level english in both reading and speaking."
              : "Englanti on käytännössä toinen äidinkieli."
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            language === "en"
              ? "Plenty of experience in customer service."
              : "Paljon kokemusta asiakaspalvelusta."
          }
          className={styles.break}
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            language === "en"
              ? "Punctual. I pay attention to the little details, but I also don't lose sight of the bigger picture."
              : "Täsmällinen. Kiinnitän huomiota pieniin yksityiskohtiin, mutta en myöskään unohda suurempaa kokonaiskuvaa."
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            language === "en"
              ? "Well articulated and I can easily convey my thought processes to others."
              : "Hyvä artikuloimaan omaa ajatusprosessia muille."
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            language === "en"
              ? "Good At Finding Relevant Information autonomously."
              : "Hyvä etsimään ja löytämään aihealueeseen liittyvää oleellista informaatiota itsenäisesti."
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            language === "en"
              ? "Empathetic towards my co-workers. I always help when I can."
              : "Empaattinen työkavereitani kohtaan. Autan aina kun vain pystyn."
          }
        />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
