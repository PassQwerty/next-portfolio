import TextParagraph from "@/app/components/textParagraph/TextParagraph";
import styles from "./contact.module.scss";
import Image from "next/image";
import WrapperMotion from "@/app/components/motion/WrapperMotion";
import { ImageVariant, TitleVariant } from "./MotionContact";
import ContactView from "./ContactView";

export default function ContactMe() {
  return (
    <section className={styles.contactMe}>
      <WrapperMotion newVariants={TitleVariant({ currentDelay: 0.2 })}>
        <TextParagraph icoText={"@"} text={"Связь со мной"} />
      </WrapperMotion>
      {/* prettier-ignore */}
      <div className={styles.wrapper}>
          <div className={styles.info}>
            <WrapperMotion newVariants={TitleVariant({currentDelay:0.5})}>
              <h1>
                Если у вас есть идеи или предложения, которые вы хотели бы обсудить,
                не стесняйтесь связаться со мной можно через:
              </h1>
            </WrapperMotion>

            <ContactView />

            <WrapperMotion newVariants={TitleVariant({currentDelay:1.1})}>
              <h1>Я всегда открыт для новых идей и проектов, с нетерпением жду вашего
                ответа и надеюсь на продуктивное сотрудничество. Давайте создадим
                что-то удивительное вместе!😊👍
              </h1> 
            </WrapperMotion>
          </div>
          <WrapperMotion newVariants={ImageVariant}>
            <div className={styles.images}>
              <Image src="/person3.png" height={400} width={400} alt="logo" />
            </div>
          </WrapperMotion>
        </div>
    </section>
  );
}
