import { Variants } from "framer-motion";

export const TitleVariant = ({
  currentDelay,
  direction = "y",
  countDirection = -75,
}: MotionDelayProps): Variants => ({
  hidden: { opacity: 0, [direction]: countDirection },
  visible: {
    opacity: 1,
    [direction]: 0,
    transition: { duration: 0.4, delay: currentDelay },
  },
});

export const listIconsVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};
