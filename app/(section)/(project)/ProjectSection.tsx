import styles from "./project.module.scss";
import TextParagraph from "@/app/components/textParagraph/TextParagraph";
import Link from "next/link";
import WrapperMotion from "@/app/components/wrappers/WrapperMotion";
import {
  ButtonVariant,
  DelayBlockProject,
  TitleVariant,
} from "./MotionProject";
import ProjectView from "./ProjectView";
import Anchor from "@/app/components/anchor/Anchor";
import WrapperClientComponent from "@/app/components/wrappers/WrapperClientComponent";

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
