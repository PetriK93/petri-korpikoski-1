import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./section/Hero/Hero";
import Projects from "./section/Projects/Projects";
import TechSkills from "./section/Skills/TechSkills";
import OtherSkills from "./section/Skills/OtherSkills";
import SoftSkills from "./section/Skills/SoftSkills";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import Preloader from "./section/Preloader/Preloader";
import heroImg from "./assets/hero_img.png";
import Certifications from "./section/Certifications/Certifications";
import NavBar from "./section/NavBar/NavBar";

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [fadeInHero, setFadeInHero] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  // Start loading hero image in the background — doesn't block preloader
  useEffect(() => {
    const img = new Image();
    img.src = heroImg;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  if (!isImageLoaded) {
    return null;
  }

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "fi" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  // Fade in immediately when preloader completes
  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => setFadeInHero(true), 50);
  };

  return (
    <>
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <NavBar language={language} toggleLanguage={toggleLanguage} />
          {/* Hero only renders after image is loaded */}
          {isImageLoaded && (
            <Hero
              language={language}
              toggleLanguage={toggleLanguage}
              className={fadeInHero ? "fade-in" : ""}
            />
          )}
          <Projects language={language} toggleLanguage={toggleLanguage} />
          <Certifications language={language} toggleLanguage={toggleLanguage} />
          <TechSkills language={language} toggleLanguage={toggleLanguage} />
          <OtherSkills language={language} toggleLanguage={toggleLanguage} />
          <SoftSkills language={language} toggleLanguage={toggleLanguage} />
          <Contact language={language} toggleLanguage={toggleLanguage} />
          <Footer language={language} toggleLanguage={toggleLanguage} />
        </>
      )}
    </>
  );
}

export default App;
