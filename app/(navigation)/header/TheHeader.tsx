import Link from "next/link";
import styles from "./header.module.scss";
import { BsFillEnvelopeOpenFill, BsGithub, BsMoon } from "react-icons/bs";
import ThemeChanger from "@/app/Context/ThemeChanger";

const ALL_LINKS = [
  { title: "Обо мне", path: "#about" },
  { title: "Мои работы", path: "/works" },
  { title: "Мои навыки", path: "#myskills" },
  { title: "Связь со мной", path: "/about" },
];

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.navigationContainer}>
        <nav className={styles.navigation}>
          <Link href="/">
            <span className={styles.logoLink}>
              <span className={styles.logoHash}>#</span>ВадимСидоренко
            </span>
          </Link>
          <div className={styles.links}>
            {ALL_LINKS.map(({ title, path }) => (
              <Link
                key={title}
                className={styles.link}
                href={path}
                prefetch={false}
              >
                {title}
              </Link>
            ))}
          </div>
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
        </nav>
      </div>
    </header>
  );
}
