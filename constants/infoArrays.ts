import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiPixelfedLine } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { DiJavascript1, DiReact } from "react-icons/di";
import { TbBrandNextjs, TbBrandCSharp, TbSql } from "react-icons/tb";
import {
  SiMui,
  SiStyledcomponents,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiMysql,
  SiSqlite,
  SiPrisma,
} from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoFirebase,
  BiLogoPython,
  BiLogoPostgresql,
} from "react-icons/bi";

export const ICONS = {
  FrontEnd: [
    {
      icon: AiFillHtml5,
      title: "HTML",
    },
    {
      icon: BiLogoCss3,
      title: "CSS",
    },
    {
      icon: DiJavascript1,
      title: "JS",
    },
    {
      icon: BiLogoTypescript,
      title: "TypeScript",
    },
    {
      icon: GrReactjs,
      title: "ReactJS",
    },
    {
      icon: BiLogoRedux,
      title: "Redux-Toolkit",
    },
    {
      icon: TbBrandNextjs,
      title: "NextJs",
    },
    {
      icon: BiLogoSass,
      title: "SASS",
    },
    {
      icon: BiLogoTailwindCss,
      title: "Tailwind",
    },
    {
      icon: SiMui,
      title: "MUI",
    },
    {
      icon: SiStyledcomponents,
      title: "Styled Components",
    },
  ],
  BackEnd: [
    {
      icon: BiLogoNodejs,
      title: "NodeJs",
    },
    {
      icon: SiExpress,
      title: "ExpressJs",
    },
    {
      icon: BiLogoPython,
      title: "Python",
    },
    {
      icon: SiFastapi,
      title: "FastAPI",
    },
    {
      icon: TbBrandCSharp,
      title: "CSharp",
    },
  ],
  UI: [
    {
      icon: SiFigma,
      title: "Figma",
    },
    {
      icon: RiPixelfedLine,
      title: "Pixso",
    },
  ],
  DataBase: [
    {
      icon: SiSqlite,
      title: "SQLite",
    },
    {
      icon: BiLogoFirebase,
      title: "Firebase",
    },
    {
      icon: BiLogoPostgresql,
      title: "PostgreSQL",
    },
    {
      icon: SiMysql,
      title: "MySQL",
    },
  ],
  ORM: [
    {
      icon: SiPrisma,
      title: "Prisma",
    },
    {
      icon: TbSql,
      title: "SQLAlchemy",
    },
  ],
  Tools: [
    {
      icon: AiFillGithub,
      title: "GitHub",
    },
  ],
};

export const ALL_CATEGORIES_WORKS = [
  {
    title: "ALL",
    elem: "All",
  },
  {
    title: "ReactJS",
    elem: DiReact,
  },
  {
    title: "NextJs",
    elem: TbBrandNextjs,
  },
  {
    title: "JS",
    elem: DiJavascript1,
  },
];
