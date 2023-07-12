import db from "./(actions)/prisma";
import AboutSection from "./(section)/(about)/AboutSection";
import ContactMe from "./(section)/(contact)/ContactMe";
import IntroSection from "./(section)/(intro)/IntroSection";
import ProjectSection from "./(section)/(project)/ProjectSection";
import SkillsSection from "./(section)/(skills)/SkillsSection";

export default async function Home() {
  const projects = await db.projects.findMany();
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectSection {...projects} />
      <SkillsSection />
      <ContactMe />
    </>
  );
}
