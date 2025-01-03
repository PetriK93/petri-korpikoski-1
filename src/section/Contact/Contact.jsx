import styles from "./ContactStyles.module.css";
import React, { useState, useEffect, useRef } from "react";

function Contact({ language }) {
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
      { threshold: 0.09 }
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
      className={`${styles.container} ${isVisible ? styles.zoomIn : ""}`}
    >
      <h1 id="contact" className="sectionTitle">
        {language === "en" ? "Contact" : "Ota yhteyttä"}
      </h1>
      <form action="https://formspree.io/f/mpwanrek" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={language === "en" ? "Name" : "Nimi"}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            {language === "en" ? "Email" : "Sähköposti"}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={language === "en" ? "Email" : "Sähköposti"}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden></label>
          <textarea
            name="message"
            id="message"
            placeholder={language === "en" ? "Message" : "Viesti"}
            required
          ></textarea>
        </div>
        <button className="hover btn" type="submit" value="Submit">
          {language === "en" ? "Submit" : "Lähetä"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
