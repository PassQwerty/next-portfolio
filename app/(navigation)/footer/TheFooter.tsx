import Link from "next/link";
import styles from "./footer.module.scss";
import {
  BsArrowUpCircle,
  BsFillEnvelopeOpenFill,
  BsGithub,
  BsMoon,
} from "react-icons/bs";
import ThemeChanger from "@/app/Context/ThemeChanger";

export default function TheFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <span>Copyright © 2023 Сидоренко Вадим</span>
        <BsArrowUpCircle className={styles.icon} />
        <div className={styles.contacts}>
          <ThemeChanger />
          <Link href="/">
            {/* prettier-ignore */}
            <BsGithub className={styles.icon}/>
          </Link>
          <Link href="/">
            {/* prettier-ignore */}
            <BsFillEnvelopeOpenFill className={styles.icon}/>
          </Link>
        </div>
      </div>
    </footer>
  );
}
