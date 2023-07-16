"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  className?: string;
  newVariants: Variants;
  numberElement?: Number;
}

const WrapperMotion = ({
  children,
  className = "",
  newVariants,
  numberElement = 0,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={newVariants}
      initial="hidden"
      animate={mainControls}
      custom={numberElement}
    >
      {children}
    </motion.div>
  );
};
export default WrapperMotion;
