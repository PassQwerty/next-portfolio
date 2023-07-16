import { IconType } from "react-icons";
import styles from "./CustomIcon.module.scss";

interface Props {
  icon: IconType;
  title: string;
}

export default function CustomIcon({ icon, title }: Props) {
  const Icon = icon;
  return (
    <div className={styles.icon} data-title={title}>
      <Icon />
    </div>
  );
}
