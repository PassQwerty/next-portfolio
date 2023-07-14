"use client";

import style from "./anchor.module.scss";
import { Links, useGlobalContext } from "@/app/Context/Store";

interface Props {
  selected: keyof Links;
}

const Anchor = ({ selected }: Props) => {
  const { data } = useGlobalContext();

  return <div className={style.anchor} ref={data[selected]} />;
};
export default Anchor;
