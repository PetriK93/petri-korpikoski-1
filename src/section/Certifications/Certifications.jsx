import styles from "./CertificationsStyles.module.css";
import certificationIcon from "../../assets/certificationIcon.png";
import SkillList from "../../common/SkillList";

function Certifications({ language }) {
  return (
    <section id="certifications" className={styles.certificationsContainer}>
      <h1 id="certifications" className={styles.sectionTitle}>
        {language === "en" ? "Certifications" : "Sertifikaatiot"}
      </h1>
      <div className={styles.rowWrapper}>
        <div className={styles.skillList}>
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
      <hr />
    </section>
  );
}

export default Certifications;
