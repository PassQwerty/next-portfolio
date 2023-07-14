import TextParagraph from "@/app/components/textParagraph/TextParagraph";
import styles from "./skills.module.scss";
import WrapperMotion from "@/app/components/wrappers/WrapperMotion";
import { TextVariant, TitleVariant } from "./MotionSkills";
import SkillsView from "./SkillsView";
import WrapperClientComponent from "@/app/components/wrappers/WrapperClientComponent";
import Anchor from "@/app/components/anchor/Anchor";

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
