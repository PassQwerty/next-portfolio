"use client";

import Image from "next/image";
import styles from "./intro.module.scss";
import WrapperMotion from "@/app/components/motion/WrapperMotion";
import {
  ButtonVariant,
  ImageVariant,
  ScrollVariant,
  TitleVariant,
} from "./MotionIntro";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className={styles.info}>
        <div className={styles.wrap}>
          {/* prettier-ignore */}
          <motion.div initial="hidden" animate="visible" variants={TitleVariant}>
              <span className={styles.gradientText}>
              Привет, меня зовут <mark>Вадим</mark>
              <br/>
              я <mark>FullStack</mark> Web Developer.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ButtonVariant}
          >
            <button className={styles.btn}>Мои проекты</button>
          </motion.div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={ImageVariant}>
          <Image
            priority
            src="/person.jpg"
            height={550}
            width={450}
            alt="logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={ScrollVariant}>
        <div className={styles.iconScroll}></div>
      </motion.div>
    </section>
  );
}
