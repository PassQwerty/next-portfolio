"use client";

import styles from "./buttonGoTop.module.scss";
import { BsArrowUpCircle } from "react-icons/bs";

const ButtonGoTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handleScrollToTop} className={styles.buttonWrapper}>
      <BsArrowUpCircle className={"icon"} />
    </div>
  );
};
export default ButtonGoTop;
