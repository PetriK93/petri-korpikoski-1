import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./section/Hero/Hero";
import Projects from "./section/Projects/Projects";
import Skills from "./section/Skills/Skills";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import Preloader from "./section/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fi" : "en"));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Hero language={language} toggleLanguage={toggleLanguage} />
          <Projects language={language} toggleLanguage={toggleLanguage} />
          <Skills language={language} toggleLanguage={toggleLanguage} />
          <Contact language={language} toggleLanguage={toggleLanguage} />
          <Footer language={language} toggleLanguage={toggleLanguage} />
        </>
      )}
    </>
  );
}

export default App;
