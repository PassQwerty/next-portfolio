"use client";

import styles from "./buttonGoTop.module.scss";
import { BsArrowUpCircle } from "react-icons/bs";

interface Props {
  targetLink: string;
}

const ButtonGo = ({ targetLink }: Props) => {
  return <div className={styles.buttonWrapper}>{/* ИЗМЕНИТЬ! */}</div>;
};
export default ButtonGo;
