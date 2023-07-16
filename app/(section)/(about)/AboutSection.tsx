import Image from "next/image";
import styles from "./about.module.scss";
import { ImageVariant, TitleVariant } from "./MotionAbout";
import ViewItemsInfo from "./ViewItemsInfo";
import WrapperMotion from "@/components/wrappers/WrapperMotion";
import WrapperClientComponent from "@/components/wrappers/WrapperClientComponent";
import Anchor from "@/components/anchor/Anchor";
import TextParagraph from "@/components/textParagraph/TextParagraph";

export default function AboutSection() {
  return (
    <>
      <WrapperClientComponent>
        <Anchor selected={"aboutMe"} />
      </WrapperClientComponent>

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
    </>
  );
}
