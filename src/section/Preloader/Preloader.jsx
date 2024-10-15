import { useEffect, useState } from "react";
import styles from "./PreloaderStyles.module.css";
import preloader from "./../../assets/preloader.gif";

function Preloader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Set a timeout to start fading out after a certain duration
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Call the onComplete function after fading out
      setTimeout(() => {
        onComplete();
      }, 500); // Match this duration with your fadeOut animation duration
    }, 2000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.container} ${isFadingOut ? styles.fadeOut : ""}`}>
      <img src={preloader} alt="Loading..." className={styles.preloaderImage} />
    </div>
  );
}

export default Preloader;
