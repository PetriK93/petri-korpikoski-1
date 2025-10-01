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
                ? "English is second nature to me."
                : "Englannin käyttö on hyvin luontevaa minulle."
            }
          />
          <SkillList
            src={checkMarkIcon}
            skill={
              language === "en"
                ? "A lot of experience in customer service."
                : "Paljon kokemusta asiakaspalvelusta."
            }
            className={styles.break}
          />
          <SkillList
            src={checkMarkIcon}
            skill={
              language === "en"
                ? "Punctual and curious."
                : "Täsmällinen ja utelias."
            }
          />
          <SkillList
            src={checkMarkIcon}
            skill={
              language === "en"
                ? "I consider myself to be well articulated."
                : "Pidän artikulointikykyäni melko hyvänä."
            }
          />
          <SkillList
            src={checkMarkIcon}
            skill={
              language === "en"
                ? "I am used to finding information autonomously."
                : "Olen tottunut etsimään tietoa itsenäisesti."
            }
          />
          <SkillList
            src={checkMarkIcon}
            skill={
              language === "en"
                ? "I prioritize the success of my team."
                : "Priorisoin tiimini menestyksen."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
