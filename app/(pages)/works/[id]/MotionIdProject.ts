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

export const InfoVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 0 } },
};
