"use client";

import styles from "./contact.module.scss";

const ContactIcon = ({ icon, title, styleIcon }: ContactPropsIcon) => {
  const Icon = icon;
  return (
    <>
      <mark>#</mark>
      <h1>
        {title}
        {""}
        <Icon className={`${styles.icon} ${styleIcon}`} />
      </h1>
    </>
  );
};
export default ContactIcon;
