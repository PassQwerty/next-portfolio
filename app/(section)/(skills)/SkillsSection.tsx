import TextParagraph from "@/app/components/textParagraph/TextParagraph";
import styles from "./skills.module.scss";
import WrapperMotion from "@/app/components/motion/WrapperMotion";
import { TextVariant, TitleVariant } from "./MotionSkills";
import SkillsView from "./SkillsView";

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <WrapperMotion newVariants={TitleVariant}>
        <TextParagraph icoText={"#"} text={"Мои навыки"} />
      </WrapperMotion>
      <WrapperMotion newVariants={TextVariant}>
        <h1>
          Я умею и пользуюсь следующими технологиями, сейчас я сосредоточен на
          Next.js.
        </h1>
      </WrapperMotion>
      <SkillsView />
    </section>
  );
}
