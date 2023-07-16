"use client";

import styles from "./skills.module.scss";
import { ICONS } from "@/constants/infoArrays";
import { listIconsVariants } from "./MotionSkills";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import LoadIcon from "@/components/Icon/LoadIcon";

const itemLoadIcon: JSX.Element[] = [
  <LoadIcon headerText={"Front-End"} items={ICONS.FrontEnd} />,
  <LoadIcon headerText={"Back-End"} items={ICONS.BackEnd} />,
  <LoadIcon headerText={"UI-UX"} items={ICONS.UI} />,
  <LoadIcon headerText={"DataBase"} items={ICONS.DataBase} />,
  <LoadIcon headerText={"ORM"} items={ICONS.ORM} />,
  <LoadIcon headerText={"Tools"} items={ICONS.Tools} />,
];

const SkillsView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className={styles.wrapper}>
      {itemLoadIcon.map((item, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={listIconsVariants}
          initial="hidden"
          animate={mainControls}
          custom={i}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};
export default SkillsView;
