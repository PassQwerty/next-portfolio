import { motion } from "framer-motion";
import Link from "next/link";

export const divAnimation = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const buttonAnimation = {
  hidden: {
    y: 100,
    transition: { duration: 0.4 },
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.3 },
  }),
};

export const MotionLink = motion(Link);
