import styles from "./footer.module.scss";
import WrapperClientComponent from "@/app/components/wrappers/WrapperClientComponent";
import ButtonGoTop from "@/app/components/button/ButtonGoTop";
import Contacts from "@/app/components/Contacts/Contacts";

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
