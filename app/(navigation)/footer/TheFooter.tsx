import WrapperClientComponent from "@/components/wrappers/WrapperClientComponent";
import styles from "./footer.module.scss";
import ButtonGoTop from "@/components/button/ButtonGoTop";
import Contacts from "@/components/Contacts/Contacts";

export default function TheFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <span>Copyright © 2023 Сидоренко Вадим</span>
        <WrapperClientComponent>
          <ButtonGoTop />
        </WrapperClientComponent>

        <div className={styles.contacts}>
          <Contacts style={styles.icon} />
        </div>
      </div>
    </footer>
  );
}
