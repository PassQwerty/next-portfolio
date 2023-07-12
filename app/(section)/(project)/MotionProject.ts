export const TitleVariant = {
  hidden: { opacity: 0, x: 175 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
};

export const ButtonVariant = {
  hidden: { opacity: 0, y: 175 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } },
};

export const DelayBlockProject = 700;
export const listVariants = {
  hidden: { opacity: 0, y: 175 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeIn",
    },
  }),
};
