import styles from "./ProjectsStyles.module.css";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../../common/ProjectCard";
import chronoFormatter from "../../assets/ChronoFormatter.jpg";
import expenseTracker from "../../assets/ExpenseTracker.jpg";
import azerothArchives from "../../assets/AzerothArchives.jpg";
import finShift from "../../assets/FinShift.jpg";

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
          src={chronoFormatter}
          link="https://github.com/PetriK93/ChronoFormatter"
          h3="ChronoFormatter"
          p={
            language === "en" ? (
              <>
                File Renamer
                <br />
                for Images & Videos
              </>
            ) : (
              <>
                Kuvien & videoiden
                <br />
                Uudelleennimeäjä
              </>
            )
          }
        />
        <ProjectCard
          src={expenseTracker}
          link="https://github.com/PetriK93/ExpenseTracker"
          h3="Expense Tracker"
          p={
            language === "en" ? (
              <>
                Track Your Daily
                <br />
                Expenses Easily
              </>
            ) : (
              <>
                Seuraa Päivittäisiä
                <br />
                Kuluja Helposti
              </>
            )
          }
        />
        <ProjectCard
          src={azerothArchives}
          link="https://github.com/PetriK93/AzerothArchives"
          h3="Azeroth Archives"
          p={
            language === "en" ? (
              <>
                Get Character Data
                <br />
                In WoW: Classic Era
              </>
            ) : (
              <>
                Hae Hahmodataa
                <br />
                WoW: Classic Erassa
              </>
            )
          }
        />
        <ProjectCard
          src={finShift}
          link="https://github.com/PetriK93/FinShift"
          h3="FinShift"
          p={language === "en" ? "Scheduling Manager" : "Aikataulunhallinta"}
        />
      </div>
    </section>
  );
}

export default Projects;
