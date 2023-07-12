"use client";

import ProjectItem from "@/app/components/Item/ProjectItem";
import { motion } from "framer-motion";
import { listVariants } from "./MotionProject";

const ProjectView = ({ data, sliceData = -3 }: ProjectViewProps) => {
  const projects = sliceData
    ? Object.values(data).slice(-3)
    : Object.values(data);
  return (
    <>
      {projects.map((project, i) => {
        return (
          <motion.div
            key={i}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <ProjectItem key={project.id + project.name} {...project} />
          </motion.div>
        );
      })}
    </>
  );
};
export default ProjectView;
