"use client";

import Link from "next/link";
import styles from "./contact.module.scss";

const ContactIcon = ({ icon, title, link, styleIcon }: ContactPropsIcon) => {
  const Icon = icon;
  return (
    <>
      <mark>#</mark>
      <h1>
        {title}
        <Link href={link}>
          <Icon className={`${styles.icon} ${styleIcon}`} />
        </Link>
      </h1>
    </>
  );
};
export default ContactIcon;
