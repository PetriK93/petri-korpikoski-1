import { useRef } from "react";
import styles from "./FooterStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import upArrowDark from "../../assets/upArrow_dark.png";
import upArrowLight from "../../assets/upArrow_light.png";

function Footer({ language }) {
  const { theme } = useTheme();
  const arrowRef = useRef(null);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 600,
      });
    }
  };

  const handleMouseEnter = () => {
    arrowRef.current.classList.add(styles.active);
  };

  const handleAnimationEnd = () => {
    arrowRef.current.classList.remove(styles.active);
  };

  const upArrow = theme === "light" ? upArrowLight : upArrowDark;
  return (
    <section id="footer" className={styles.container}>
      <div
        className={styles.arrowBox}
        ref={arrowRef}
        onMouseEnter={handleMouseEnter}
        onAnimationEnd={handleAnimationEnd}
      >
        <a onClick={() => scrollToSection("about")}>
          <img src={upArrow} alt="Up arrow box" />
        </a>
      </div>
      <p>
        &copy; 2024 Petri Korpikoski.
        <br />
        {language === "en"
          ? "All rights reserved."
          : "Kaikki oikeudet pidätetään."}
        <br />
        <br />
        {language === "en" ? (
          <>
            All the non-project related images on this website are from{" "}
            <a
              href="https://www.icons8.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.icons8.com
            </a>
            .
          </>
        ) : (
          <>
            Kaikki sivulla käytetyt kuvakkeet, jotka eivät liity projekteihini
            ovat osoitteesta{" "}
            <a
              href="https://www.icons8.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.icons8.com
            </a>
            .
          </>
        )}
      </p>
    </section>
  );
}

export default Footer;
