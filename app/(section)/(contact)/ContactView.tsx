"use client";

import styles from "./contact.module.scss";
import { BsFillEnvelopeOpenFill, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { DelayBlockProject, listVariants } from "./MotionContact";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactIcon from "./ContactIcon";

const itemIcons = [
  {
    title: "Gmail",
    icon: BsFillEnvelopeOpenFill,
    styleIcon: styles.BsFillEnvelopeOpenFill,
  },
  {
    title: "WhatsApp",
    icon: BsWhatsapp,
    styleIcon: styles.BsWhatsapp,
  },
  {
    title: "Telegram",
    icon: BsTelegram,
    styleIcon: styles.BsTelegram,
  },
];

const ContactView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        mainControls.start("visible");
      }, DelayBlockProject);
    }
  }, [isInView]);
  return (
    <div className={styles.container}>
      {itemIcons.map((item, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={listVariants}
          initial="hidden"
          animate={mainControls}
          custom={i}
        >
          <ContactIcon
            key={item.title}
            icon={item.icon}
            title={item.title}
            styleIcon={item.styleIcon}
          />
        </motion.div>
      ))}
    </div>
  );
};
export default ContactView;
