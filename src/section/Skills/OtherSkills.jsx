import styles from "./SkillsStyles.module.css";
import React, { useState, useEffect, useRef } from "react";
import vegasIcon from "../../assets/vegasIcon.png";
import photoshopIcon from "../../assets/photoshopIcon.png";
import reaperIcon from "../../assets/reaperIcon.png";
import obsLight from "../../assets/obsIconLight.png";
import obsDark from "../../assets/obsIconDark.png";
import videocameraIcon from "../../assets/videocameraIcon.png";
import contentCreationIcon from "../../assets/contentCreationIcon.png";

import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function OtherSkills({ language }) {
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
  const obsIcon = theme === "light" ? obsLight : obsDark;

  return (
    <section
      ref={ref}
      className={`${styles.otherContainer} ${isVisible ? styles.slideIn : ""}`}
    >
      <h1 id="otherSkills" className="sectionTitle">
        {language === "en" ? "Other skills" : "Muita taitoja"}
      </h1>
      <div className="skillContainer">
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
      </div>
    </section>
  );
}

export default OtherSkills;
