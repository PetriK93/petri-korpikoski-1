import styles from "./FooterStyles.module.css";

function Footer({ language }) {
  return (
    <section id="footer" className={styles.container}>
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
