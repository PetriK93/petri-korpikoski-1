import styles from "./ProjectsStyles.module.css";
import React, { useEffect, useRef, useState } from "react";
import moonveilMarket from "../../assets/moonveil_market.jpg";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects({ language }) {
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
      { threshold: 0.08 }
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
          h3="(PLACEHOLDER)"
          p={
            language === "en" ? "Hamburger Restaurant" : "Hampurilaisravintola"
          }
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PetriK93?tab=repositories"
          h3="(PLACEHOLDER)"
          p={language === "en" ? "Optical Store" : "Optikkoliike"}
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PetriK93?tab=repositories"
          h3="(PLACEHOLDER)"
          p={language === "en" ? "Fitness App" : "Fitness Äppi"}
        />
      </div>
    </section>
  );
}

export default Projects;
