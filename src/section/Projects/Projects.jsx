import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects({ language, toggleLanguage }) {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">
        {language === "en" ? "Projects" : "Projektit"}
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/PetriK93?tab=repositories"
          h3="Viberr"
          p={language === "en" ? "Streaming App" : "Streamaus Äppi"}
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PetriK93?tab=repositories"
          h3="Fresh Burger"
          p={
            language === "en" ? "Hamburger Restaurant" : "Hampurilaisravintola"
          }
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PetriK93?tab=repositories"
          h3="Hipsster"
          p={language === "en" ? "Optical Store" : "Optikkoliike"}
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PetriK93?tab=repositories"
          h3="FitLift"
          p={language === "en" ? "Fitness App" : "Fitness Äppi"}
        />
      </div>
    </section>
  );
}

export default Projects;
