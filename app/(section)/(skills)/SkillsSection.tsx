import styles from "./skills.module.scss";
import { TextVariant, TitleVariant } from "./MotionSkills";
import SkillsView from "./SkillsView";
import WrapperClientComponent from "@/components/wrappers/WrapperClientComponent";
import Anchor from "@/components/anchor/Anchor";
import WrapperMotion from "@/components/wrappers/WrapperMotion";
import TextParagraph from "@/components/textParagraph/TextParagraph";

export default function SkillsSection() {
  return (
    <>
      <WrapperClientComponent>
        <Anchor selected={"mySkills"} />
      </WrapperClientComponent>
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
    </>
  );
}
