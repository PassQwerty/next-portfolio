import styles from "./preloaderPage.module.scss";

const PreloaderPage = () => {
  return (
    <div className={styles.page}>
      <span className={styles.loader}></span>
    </div>
  );
};
export default PreloaderPage;
