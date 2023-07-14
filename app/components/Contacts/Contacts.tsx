import ThemeChanger from "@/app/Context/ThemeChanger";
import Link from "next/link";
import { BsFillEnvelopeOpenFill, BsGithub } from "react-icons/bs";

interface Props {
  style: string;
}

const Contacts = ({ style }: Props) => {
  return (
    <>
      <ThemeChanger />
      <Link href="https://github.com/PassQwerty">
        {/* prettier-ignore */}
        <BsGithub className={style}/>
      </Link>
      <Link href="mailto:vdwork0@gmail.com?subject=Вопрос по услуге">
        {/* prettier-ignore */}
        <BsFillEnvelopeOpenFill className={style}/>
      </Link>
    </>
  );
};
export default Contacts;
