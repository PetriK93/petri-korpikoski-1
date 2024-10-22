import { useEffect, useRef } from "react";
import styles from "./ContactStyles.module.css";

function Contact({ language }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleElement.classList.add(styles.animate);
        }
      });
    });

    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  return (
    <section id="contact" className={styles.container}>
      <h1 ref={titleRef} id="contact" className={styles.sectionTitle}>
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
