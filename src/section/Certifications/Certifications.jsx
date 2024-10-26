import styles from "./CertificationsStyles.module.css";
import React, { useEffect, useRef, useState } from "react";
import certificationIcon from "../../assets/certificationIcon.png";
import SkillList from "../../common/SkillList";

function Certifications({ language }) {
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

  return (
    <section
      ref={ref}
      className={`${styles.container} ${isVisible ? styles.slideIn : ""}`}
    >
      <h1 id="certifications" className="sectionTitle">
        {language === "en" ? "Certifications" : "Sertifikaatiot"}
      </h1>
      <div className="skillContainer">
        <div className={styles.rowWrapper}>
          <div className={styles.certificationsList}>
            <SkillList
              src={certificationIcon}
              skill={
                language === "en"
                  ? "Responsive Web Design"
                  : "Responsiivinen verkkosuunnittelu"
              }
              link="https://www.freecodecamp.org/certification/PetriK93/responsive-web-design"
            />
            <SkillList
              src={certificationIcon}
              skill={
                language === "en" ? (
                  <>
                    Javascript Algorithms
                    <br />
                    and Data Structures
                  </>
                ) : (
                  <>
                    Javascript-algoritmit
                    <br />
                    ja tietorakenteet
                  </>
                )
              }
              link="https://www.freecodecamp.org/certification/PetriK93/javascript-algorithms-and-data-structures-v8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
