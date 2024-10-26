import styles from "./SkillsStyles.module.css";
import React, { useState, useEffect, useRef } from "react";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";

import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function SoftSkills({ language }) {
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
      { threshold: 0.09 }
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
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section
      ref={ref}
      className={`${styles.softContainer} ${isVisible ? styles.slideIn : ""}`}
    >
      <h1 id="softSkills" className="sectionTitle">
        {language === "en" ? "Soft skills" : "Pehmeät taidot"}
      </h1>
      <div className="skillContainer">
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
      </div>
    </section>
  );
}

export default SoftSkills;
