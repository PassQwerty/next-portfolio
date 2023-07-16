"use client";

import { Links, useGlobalContext } from "@/Context/Store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  link?: string | null;
  targetElement: keyof Links;
  offsetTop?: number;
  children: React.ReactNode;
}

const ButtonGo = ({ link, targetElement, offsetTop = 0, children }: Props) => {
  const route = useRouter();
  const pathname = usePathname();
  const { data } = useGlobalContext();
  const [isLoadPage, setLoadPage] = useState(false);
  const [isScroll, setScroll] = useState(false);

  const ScrollTo = (elementRef: React.RefObject<HTMLElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop + offsetTop,
        behavior: "smooth",
      });
      // console.log("Скролл к элементу");
    }
  };

  useEffect(() => {
    setLoadPage(true);
  }, []);

  useEffect(() => {
    if (isScroll && link !== pathname) {
      setScroll(false);
      setTimeout(() => {
        ScrollTo(data[targetElement]);
        // console.log("Переход со скролом");
      }, 700);
    }
  }, [pathname, isLoadPage, isScroll]);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    if (link === pathname) {
      ScrollTo(elementRef);
      return;
    } else if (link === undefined) {
      ScrollTo(elementRef);
      return;
    } else {
      setScroll(true);
      route.push(`/${link}`, { scroll: false });
      return;
    }
  };

  return (
    <div onClick={() => scrollToSection(data[targetElement])}>{children}</div>
  );
};
export default ButtonGo;
