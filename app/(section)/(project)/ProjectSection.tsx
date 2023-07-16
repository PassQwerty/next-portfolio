import styles from "./project.module.scss";
import Link from "next/link";
import {
  ButtonVariant,
  DelayBlockProject,
  TitleVariant,
} from "./MotionProject";
import ProjectView from "./ProjectView";
import WrapperClientComponent from "@/components/wrappers/WrapperClientComponent";
import Anchor from "@/components/anchor/Anchor";
import TextParagraph from "@/components/textParagraph/TextParagraph";
import WrapperMotion from "@/components/wrappers/WrapperMotion";

export default function ProjectSection(data: Project[]) {
  return (
    <>
      <WrapperClientComponent>
        <Anchor selected={"myProject"} />
      </WrapperClientComponent>

      <section className={styles.projects}>
        <div className={styles.wrapper}>
          <WrapperMotion newVariants={TitleVariant}>
            <TextParagraph icoText={"$"} text={"Мои работы"} />
          </WrapperMotion>
          <div className={styles.container}>
            <ProjectView data={data} delay={DelayBlockProject} />
          </div>
        </div>
        <WrapperMotion newVariants={ButtonVariant}>
          <Link
            href="/works"
            className={styles.btnFlip}
            data-back="Посмотреть"
            data-front="Другие проекты"
          ></Link>
        </WrapperMotion>
      </section>
    </>
  );
}
