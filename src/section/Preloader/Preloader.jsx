import styles from "./PreloaderStyles.module.css";
import preloader from "./../../assets/preloader.gif";

function Preloader() {
  return (
    <div className={styles.container}>
      <img src={preloader} alt="Loading..." className={styles.preloaderImage} />
    </div>
  );
}

export default Preloader;
