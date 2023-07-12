"use client";

import Image from "next/image";
import styles from "./project.module.scss";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { MotionLink, buttonAnimation, divAnimation } from "./MotionProjectItem";

const ProjectItem = ({
  id,
  img,
  name,
  description,
  tags,
  source,
  demo,
}: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.itemContainer}>
      {/* prettier-ignore */}
      <div className={styles.imageWrapper}>
        <Image className={styles.itemImg} src={img} width={370} height={280} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt="" />
        <motion.div 
          variants={divAnimation}         
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles.overlay}
        >
          <MotionLink
            variants={buttonAnimation}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            custom={0.1}
            href={`/works/${id}`}
          >
            Подробнее
          </MotionLink>
        </motion.div>
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.description}>
          <h1>{name}</h1>
          <h3>{description}</h3>
        </div>
        <div className={styles.containerTags}>
          {tags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {/* prettier-ignore */}
        <div className={styles.links}>
          {source.length > 0 ? 
            (<Link className={styles.link} href={source}>
                <ReactSVG className={styles.icon} src="/favicon/source.svg" />
                <span>Source</span>
              </Link>) 
            : 
            ("")
          }
          {demo.length > 0 ? 
            (<Link className={styles.link} href={demo}>
                <ReactSVG className={styles.icon} src="/favicon/demo.svg" />
                <span>Demo</span>
              </Link>) 
            : 
            ("")
          }
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
