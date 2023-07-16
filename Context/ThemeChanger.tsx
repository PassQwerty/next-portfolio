"use client";

import styles from "@/app/(navigation)/header/header.module.scss";
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md";
import { useGlobalContext } from "./Store";

export default function ThemeChanger() {
  const { theme, setTheme } = useGlobalContext();

  return (
    <>
      {theme === "light" ? (
        <MdOutlineModeNight
          className={`${styles.icon} ${styles.theme}`}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdOutlineLightMode
          className={`${styles.icon} ${styles.theme}`}
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
}
