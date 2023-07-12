import { Variants } from "framer-motion";

export const TitleVariant = ({ currentDelay }: MotionDelayProps): Variants => ({
  hidden: { opacity: 0, x: 175 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: currentDelay },
  },
});

export const ImageVariant = {
  hidden: { opacity: 0, y: 175 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
};

export const DelayBlockProject = 1000;
export const listVariants = {
  hidden: { opacity: 0, x: 175 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeIn",
    },
  }),
};
