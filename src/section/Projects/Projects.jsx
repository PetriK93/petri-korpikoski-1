import styles from "./ProjectsStyles.module.css";

import moonveilMarket from "../../assets/moonveil_market.jpg";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects({ language }) {
  return (
    <section className={styles.container}>
      <h1 id="projects" className="sectionTitle">
        {language === "en" ? "Projects" : "Projektit"}
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={moonveilMarket}
          link="https://github.com/PetriK93/Moonveil-Market"
          h3="Moonveil Market"
          p={
            language === "en"
              ? "Fantasy RPG Marketplace"
              : "Fantasia RPG Markkinatori"
          }
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PetriK93?tab=repositories"
          h3="Fresh Burger (PLACEHOLDER)"
          p={
            language === "en" ? "Hamburger Restaurant" : "Hampurilaisravintola"
          }
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PetriK93?tab=repositories"
          h3="Hipsster (PLACEHOLDER)"
          p={language === "en" ? "Optical Store" : "Optikkoliike"}
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PetriK93?tab=repositories"
          h3="FitLift (PLACEHOLDER)"
          p={language === "en" ? "Fitness App" : "Fitness Äppi"}
        />
      </div>
    </section>
  );
}

export default Projects;
