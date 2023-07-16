"use client";

import {
  Fragment,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./works.module.scss";
import { ALL_CATEGORIES_WORKS } from "@/constants/infoArrays";
import { TitleVariant, listIconsVariants } from "./MotionProject";
import { motion, useAnimation, useInView } from "framer-motion";
import WrapperMotion from "@/components/wrappers/WrapperMotion";
import PreloaderItems from "@/components/loadings/PreloaderItems";
import ProjectView from "@/app/(section)/(project)/ProjectView";

export default function Works() {
  const [data, setData] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const filteredItems =
    activeCategory === "ALL"
      ? data
      : data.filter((item) => item.tags.includes(activeCategory));

  useLayoutEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch("/api/project/getall", {
        method: "GET",
      });
      const data = await res.json();
      setData(data.success);
      setIsLoading(false);
    };
    makeApiCall();
  }, []);

  useLayoutEffect(() => {
    if (isInView) {
      setTimeout(() => {
        mainControls.start("visible");
      }, 1000);
    }
  }, [isInView]);

  const handleCategoryClick = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <section className={styles.works}>
      <WrapperMotion
        className={styles.wrapperText}
        newVariants={TitleVariant({ currentDelay: 0.1 })}
      >
        <span className={styles.text}>Мои работы</span>
      </WrapperMotion>
      <WrapperMotion
        className={styles.filterWrapper}
        newVariants={TitleVariant({ currentDelay: 0.5 })}
      >
        <Fragment>
          <WrapperMotion newVariants={TitleVariant({ currentDelay: 1 })}>
            <span>Сортировать: </span>
          </WrapperMotion>

          <ul className={styles.filter}>
            {ALL_CATEGORIES_WORKS.map((category, i) => (
              <motion.li
                key={category.title}
                ref={ref}
                variants={listIconsVariants}
                initial="hidden"
                animate={mainControls}
                custom={i}
                className={
                  activeCategory === category.title ? styles.active : ""
                }
                onClick={() => {
                  handleCategoryClick(category.title);
                }}
              >
                {typeof category.elem === "string" ? (
                  <span>{category.elem}</span>
                ) : (
                  <category.elem className={styles.icon} />
                )}
              </motion.li>
            ))}
          </ul>
        </Fragment>
      </WrapperMotion>
      <div className={styles.wrapper}>
        {/* prettier-ignore */}
        <div className={styles.container}>
          {isLoading ? 
            (<PreloaderItems />) 
          : 
            (<ProjectView data={filteredItems} sliceData={0} />)
          }
        </div>
      </div>
    </section>
  );
}
