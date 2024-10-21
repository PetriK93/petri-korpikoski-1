import { useState } from "react";
import styles from "./NavBarStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import menuIconLight from "../../assets/menu_icon_light.png";
import menuIconDark from "../../assets/menu_icon_dark.png";

const NavBar = ({ language }) => {
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
    <nav className={styles.navBar}>
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
              <a onClick={() => scrollToSection("skills")}>
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

      <ul className={styles.navigation}>
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
          <a onClick={() => scrollToSection("skills")}>
            {language === "en" ? "Skills" : "Taidot"}
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a onClick={() => scrollToSection("contact")}>
            {language === "en" ? "Contact" : "Ota yhteyttä"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;