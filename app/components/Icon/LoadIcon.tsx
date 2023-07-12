"use client";

import { DelayBlockProject } from "@/app/(section)/(project)/MotionProject";
import CustomIcon from "./CustomIcon";
import styles from "./loadIcon.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { listVariants } from "@/app/(section)/(skills)/MotionSkills";

const LoadIcon = ({ headerText, items }: Icons) => {
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
    <div className={styles.iconBlock}>
      <span>{headerText}</span>

      <div className={styles.containerIcons}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            ref={ref}
            variants={listVariants}
            initial="hidden"
            animate={mainControls}
            custom={i}
          >
            <CustomIcon key={item.title} icon={item.icon} title={item.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default LoadIcon;
