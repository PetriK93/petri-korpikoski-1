import "./App.css";
import Hero from "./section/Hero/Hero";
import Projects from "./section/Projects/Projects";
import Skills from "./section/Skills/Skills";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fi" : "en"));
  };

  return (
    <>
      <Hero language={language} toggleLanguage={toggleLanguage} />
      <Projects language={language} toggleLanguage={toggleLanguage} />
      <Skills language={language} toggleLanguage={toggleLanguage} />
      <Contact language={language} toggleLanguage={toggleLanguage} />
      <Footer language={language} toggleLanguage={toggleLanguage} />
    </>
  );
}

export default App;
