import styles from "./SkillsStyles.module.css";
import React, { useState, useEffect, useRef } from "react";
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
import mySQLIcon from "./../../assets/mySQLIcon.png";

import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function TechSkills({ language }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Section visible, applying slideIn effect");
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const { theme } = useTheme();
  theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  const gitHubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section
      ref={ref}
      className={`${styles.techContainer} ${isVisible ? styles.slideIn : ""}`}
    >
      <h1 id="techSkills" className="sectionTitle">
        {language === "en" ? "Tech stack" : "Teknologiat"}
      </h1>
      <div className="skillContainer">
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
      </div>
    </section>
  );
}

export default TechSkills;
