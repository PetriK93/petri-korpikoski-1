import { useState } from "react";
import styles from "./NavBarStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import menuIconLight from "../../assets/menu_icon_light.png";
import menuIconDark from "../../assets/menu_icon_dark.png";
import finIcon from "../../assets/finIcon.png";
import enIcon from "../../assets/enIcon.png";

const NavBar = ({ language, toggleLanguage }) => {
  const langIcon = language === "en" ? enIcon : finIcon;
  const [dropdown, setDropdown] = useState(false);
  const { theme } = useTheme();
  const menuIcon = theme === "light" ? menuIconLight : menuIconDark;

  {
    /*This offsets the navigation, so the NavBar doesn't
    cover too much of the screen */
  }
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 234,
      });
    }
  };

  {
    /*For the about section on mobile because it's vertically bigger */
  }
  const scrollToSectionMobile = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 574,
      });
    }
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className={`${styles.navBar} ${styles.animateFade}`}>
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton} onClick={toggleDropdown}>
          <img src={menuIcon} alt="Menu icon" />
        </button>
        {dropdown && (
          <ul className={styles.dropdownMenu}>
            <li>
              <a onClick={() => scrollToSectionMobile("about")}>
                {language === "en" ? "About" : "Tietoa minusta"}
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("projects")}>
                {language === "en" ? "Projects" : "Projektit"}
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("certifications")}>
                {language === "en" ? "Certifications" : "Sertifikaatiot"}
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("techSkills")}>
                {language === "en" ? "Skills" : "Taidot"}
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>
                {language === "en" ? "Contact" : "Ota yhteyttä"}
              </a>
            </li>
          </ul>
        )}
      </div>

      <ul className={`${styles.navigation} ${styles.animateLeft}`}>
        <li className={styles.navigationItem}>
          <a onClick={() => scrollToSection("about")}>
            {language === "en" ? "About" : "Tietoa minusta"}
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a onClick={() => scrollToSection("projects")}>
            {language === "en" ? "Projects" : "Projektit"}
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a onClick={() => scrollToSection("certifications")}>
            {language === "en" ? "Certifications" : "Sertifikaatiot"}
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a onClick={() => scrollToSection("techSkills")}>
            {language === "en" ? "Skills" : "Taidot"}
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a onClick={() => scrollToSection("contact")}>
            {language === "en" ? "Contact" : "Ota yhteyttä"}
          </a>
        </li>
      </ul>
      <div id="langSwitch" className={styles.langSwitchContainer}>
        <img
          src={langIcon}
          className={styles.langSwitch}
          alt="Language switch"
          onClick={toggleLanguage}
        />
        <p className={styles.bold}>{language === "en" ? "En" : "Fi"}</p>
      </div>
    </nav>
  );
};

export default NavBar;
