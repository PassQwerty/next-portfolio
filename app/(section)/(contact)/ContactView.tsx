"use client";

import styles from "./contact.module.scss";
import { BsFillEnvelopeOpenFill, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { DelayBlockProject, listVariants } from "./MotionContact";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactIcon from "./ContactIcon";

const itemIcons: ContactPropsIcon[] = [
  {
    icon: BsFillEnvelopeOpenFill,
    title: "Gmail",
    link: "mailto:vdwork0@gmail.com?subject=Вопрос по услуге",
    styleIcon: styles.BsFillEnvelopeOpenFill,
  },
  {
    icon: BsWhatsapp,
    title: "WhatsApp",
    link: "https://wa.me/+79002331047?text=Здравствуйте%2C+у+меня+есть+вопрос+по+услуге",
    styleIcon: styles.BsWhatsapp,
  },
  {
    icon: BsTelegram,
    title: "Telegram",
    link: "https://t.me/+79002331047",
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
            link={item.link}
            title={item.title}
            styleIcon={item.styleIcon}
          />
        </motion.div>
      ))}
    </div>
  );
};
export default ContactView;
