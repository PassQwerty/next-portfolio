export const TitleVariant = {
  hidden: { opacity: 0, x: 175 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0 } },
};

export const ImageVariant = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0 } },
};

export const listVariants = {
  hidden: { opacity: 0, x: 75 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeIn",
    },
  }),
};
