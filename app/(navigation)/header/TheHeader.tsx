import Link from "next/link";
import styles from "./header.module.scss";
import { Links } from "@/Context/Store";
import WrapperClientComponent from "@/components/wrappers/WrapperClientComponent";
import Anchor from "@/components/anchor/Anchor";
import ButtonGo from "@/components/button/ButtonGo";
import Contacts from "@/components/Contacts/Contacts";

type LinkItem = LinkRef | AnchorRef;

type LinkRef = {
  title: string;
  isLink: true;
  path: string;
};

type AnchorRef = {
  title: string;
  isLink: false;
  anchor: keyof Links;
  link: string;
};

const ALL_LINKS: LinkItem[] = [
  { title: "Обо мне", anchor: "aboutMe", isLink: false, link: "/" },
  { title: "Мои работы", path: "/works", isLink: true },
  { title: "Мои навыки", anchor: "mySkills", isLink: false, link: "/" },
  { title: "Связь со мной", anchor: "contactMe", isLink: false, link: "/" },
];

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <WrapperClientComponent>
        <Anchor selected={"main"} />
      </WrapperClientComponent>
      <div className={styles.navigationContainer}>
        <nav className={styles.navigation}>
          <WrapperClientComponent>
            <ButtonGo link={"/"} targetElement={"main"}>
              <span className={styles.logoLink}>
                <span className={styles.logoHash}>#</span>ВадимСидоренко
              </span>
            </ButtonGo>
          </WrapperClientComponent>
          <div className={styles.links}>
            {ALL_LINKS.map((item) => (
              <WrapperClientComponent>
                {item.isLink ? (
                  <Link
                    key={item.title}
                    className={styles.link}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <ButtonGo
                    link={item.link}
                    targetElement={item.anchor}
                    offsetTop={-50}
                  >
                    <span key={item.title} className={styles.link}>
                      {item.title}
                    </span>
                  </ButtonGo>
                )}
              </WrapperClientComponent>
            ))}
          </div>
          <div className={styles.contacts}>
            <Contacts style={styles.icon} />
          </div>
        </nav>
      </div>
    </header>
  );
}
