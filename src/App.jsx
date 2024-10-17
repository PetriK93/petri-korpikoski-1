import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./section/Hero/Hero";
import Projects from "./section/Projects/Projects";
import Skills from "./section/Skills/Skills";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import Preloader from "./section/Preloader/Preloader";
import heroImg from "./assets/Portfolio logo.png";
import Certifications from "./section/Certifications/Certifications";

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = heroImg;

    // When the image has fully loaded, update the state
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Conditional rendering based on whether the image is loaded
  if (!isImageLoaded) {
    return null; // You can also return a loading spinner here if you want
  }

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "fi" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <Hero language={language} toggleLanguage={toggleLanguage} />
          <Projects language={language} toggleLanguage={toggleLanguage} />
          <Certifications language={language} toggleLanguage={toggleLanguage} />
          <Skills language={language} toggleLanguage={toggleLanguage} />
          <Contact language={language} toggleLanguage={toggleLanguage} />
          <Footer language={language} toggleLanguage={toggleLanguage} />
        </>
      )}
    </>
  );
}

export default App;
