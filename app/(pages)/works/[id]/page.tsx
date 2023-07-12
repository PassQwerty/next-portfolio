"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./works.module.scss";
import { ReactSVG } from "react-svg";
import { SlArrowLeft } from "react-icons/sl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TitleVariant } from "../MotionProject";

const WorksItem = () => {
  const [data, setData] = useState<Project>();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const makeApiCall = async () => {
      const id = pathname.split("/").pop();
      const res = await fetch(`/api/${id}`, { method: "GET" });
      const data = await res.json();
      setData(data.success);
      setIsLoading(true);
    };
    makeApiCall();
  }, []);

  if (!data) {
    return (
      <section className={styles.workLoader}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={TitleVariant({
            direction: "x",
            countDirection: -75,
            currentDelay: 0,
          })}
          className={styles.btnWrapper}
        >
          <Link href={"/works"} className={styles.btnPrevious}>
            <SlArrowLeft className={styles.icon} />
            Мои работы
          </Link>
        </motion.div>
        <div className={styles.info2}>
          <div className={styles.loader}></div>
        </div>
      </section>
    );
  }

  return (
    <>
      {isLoading && (
        <section className={styles.work}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={TitleVariant({ currentDelay: 0 })}
            className={styles.btnWrapper}
          >
            <Link href={"/works"} className={styles.btnPrevious}>
              <SlArrowLeft className={styles.icon} />
              Мои работы
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={TitleVariant({
              direction: "x",
              countDirection: -75,
              currentDelay: 0,
            })}
            className={styles.info}
          >
            <div className={styles.container1}>
              <span className={styles.text}>{data.name}</span>
              <div className={styles.links}>
                <Link className={styles.link} href={data.source}>
                  <ReactSVG className={styles.icon} src="/favicon/source.svg" />
                  <span>Source</span>
                </Link>
                <Link className={styles.link} href={data.demo}>
                  <ReactSVG
                    className={styles.iconDemo}
                    src="/favicon/demo.svg"
                  />
                  <span>Demo</span>
                </Link>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.containerImage}>
                <Image
                  priority={true}
                  src={data.img}
                  width={600}
                  height={400}
                  alt=""
                />
              </div>
              <div className={styles.containerDescription}>
                <h1 className={styles.text}>Описание проекта</h1>

                <h3 className={styles.description}>{data.allDescription}</h3>

                <div className={styles.containerTags}>
                  <h1 className={styles.text}>Используемые технологии</h1>
                  <div className={styles.tags}>
                    {data.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </>
  );
};
export default WorksItem;
