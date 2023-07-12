import Image from "next/image";
import styles from "./about.module.scss";
import TextParagraph from "@/app/components/textParagraph/TextParagraph";
import WrapperMotion from "@app/components/motion/WrapperMotion";
import { ImageVariant, TitleVariant } from "./MotionAbout";
import ViewItemsInfo from "./ViewItemsInfo";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <WrapperMotion newVariants={TitleVariant}>
        <TextParagraph icoText={"!"} text={"Обо мне"} />
      </WrapperMotion>
      <div className={styles.textWrapper}>
        <div className={styles.imageWrapper}>
          <WrapperMotion newVariants={ImageVariant}>
            <Image
              priority={true}
              src="/person2.jpg"
              height={700}
              width={700}
              alt=""
            />
          </WrapperMotion>
        </div>
        <div className={styles.container}>
          <ViewItemsInfo />
        </div>
      </div>
    </section>
  );
}
