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

const createAllProject: CreateDataAllArgs = {
  projects: [
    {
      newImg:
        "https://i.ibb.co/Cv8ZRkD/Screenshot-2023-07-11-at-02-02-25-Requests.png",
      newName: "Сервис случайных картинок",
      newDescription: "Сервис для генерации случайных картинок",
      newAllDescription:
        "Развлекательный сервис для генерации случайных картинок использующий API от сайта GIPHY, запросы получаются и обрабатываются с помощью библиотеки Axios.",
      newTags: ["JS", "Axios", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/16-axios",
      newDemo: "https://passqwerty.github.io/16-axios/",
    },
    {
      newImg:
        "https://i.ibb.co/WvgqpmH/Screenshot-2023-07-11-at-02-12-33-Todo-List.png",
      newName: "TodoList на JS",
      newDescription: "Классический TodoList сделанный на JavaScript",
      newAllDescription:
        "Классический TodoList сделанный на ванильном JS в минималистичном дизайне с использованием сохранений в формате JSON",
      newTags: ["JS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/20-TodoList",
      newDemo: "https://passqwerty.github.io/20-TodoList/",
    },
    {
      newImg:
        "https://i.ibb.co/VHsyzXJ/Screenshot-2023-07-11-at-03-08-38-Document.png",
      newName: "Сервис с JSONPlaceholder",
      newDescription: "Сервис загрузки данных с JSONPlaceholder",
      newAllDescription:
        "Сервис предназначеный для динамическим выбором загрузки данных с сайта JSONPlaceholder сделанный на JS, запросы обрабатываются с приминением технологии fetch.",
      newTags: ["JS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/19-JSONPlaceholder",
      newDemo: "https://passqwerty.github.io/19-JSONPlaceholder/",
    },
    {
      newImg:
        "https://i.ibb.co/MZGTxFp/Screenshot-2023-07-11-at-02-21-12-Tomato-Timer.png",
      newName: "Приложение Tomato-Timer",
      newDescription: "Приложение для управления временем",
      newAllDescription:
        "Приложение для управления временем основанное на технике Pomodoro, методе, который повышает продуктивность, разбивая рабочие периоды на 25-минутные сегменты, разделенные короткими перерывами. Приложение удобно настраивается и изменяется исходя из требований пользователя",
      newTags: ["JS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/21-Tomato-Timer",
      newDemo: "https://passqwerty.github.io/21-Tomato-Timer/",
    },
    {
      newImg: "https://i.ibb.co/ScRnJ90/Screenshot-2023-07-11-at-02-28-15.png",
      newName: "Сервис генерации цитат",
      newDescription: "Сервис для генерации рандомных цитат",
      newAllDescription:
        "Шуточный сервис для генерации рандомных цитат созданное в минималистичном дизайне с использованием сохранений в формате JSON",
      newTags: ["JS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/15-Random-Quote-Generator",
      newDemo: "https://passqwerty.github.io/15-Random-Quote-Generator/",
    },
    {
      newImg: "https://i.ibb.co/wrmwDDt/Screenshot-2023-07-11-at-02-30-33.png",
      newName: "Сайт-анкета",
      newDescription: "Развлекательный сайт-анкета",
      newAllDescription:
        "Шуточный сайт с анкетой по игровой тиматике где можно проверить свои знания в игровой сфере, сайт созданный на классическом JS",
      newTags: ["JS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/13-quiz",
      newDemo: "https://passqwerty.github.io/13-quiz/",
    },
    {
      newImg:
        "https://i.ibb.co/2dnNvPk/Screenshot-2023-07-11-at-02-35-57-Weather-App.png",
      newName: "Приложение погоды",
      newDescription: "Привлекательное приложение прогноз погоды",
      newAllDescription:
        "Привлекательное приложение прогноз погоды созданный на классическом JS с реализованным поиском, использующее технологию fetch для получения данных с API сайта погоды.",
      newTags: ["JS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/22-Weather",
      newDemo: "https://passqwerty.github.io/22-Weather/",
    },
    {
      newImg:
        "https://i.ibb.co/7kbw8HL/Screenshot-2023-07-11-at-03-06-04-st-small-507x507-pad-600x600-f8f8f8-u2-jpg-JPEG-600-600.png",
      newName: "RESTful API",
      newDescription: "Простой сервер на ExpressJS",
      newAllDescription:
        "Простой сервер созданный на ExpressJS на класическом JS с реализующим функционалом RESTful API",
      newTags: ["JS", "HTML", "CSS", "ExpressJS"],
      newSource: "https://github.com/PassQwerty/ExpressJS-REST-API",
      newDemo: "",
    },
    {
      newImg:
        "https://i.ibb.co/VBVd1DH/Screenshot-2023-07-11-at-03-15-21-React-App.png",
      newName: "TodoList на ReactJS",
      newDescription: "Классический TodoList сделанный на ReactJS",
      newAllDescription:
        "Классический TodoList сделанный на ReactJS с использованием базы данных на Firebase с применением SASS и Styled-components",
      newTags: [
        "ReactJS",
        "FireBase",
        "HTML",
        "CSS",
        "SASS",
        "styled-components",
      ],
      newSource: "https://github.com/PassQwerty/ReactTodo-app",
      newDemo: "https://totolist-19f14.web.app/",
    },
    {
      newImg:
        "https://i.ibb.co/Bqt3F65/Screenshot-2023-07-11-at-11-04-45-React-Costs.png",
      newName: "Приложение расходов",
      newDescription: "Приложение для удобного слежения за расходами",
      newAllDescription:
        "Приложение для удобного слежения за расходами с возможностью добавления новых расходов, присутсвует фильтр по годам с отображением результатов в виде диаграмм ",
      newTags: ["ReactJS", "HTML", "CSS"],
      newSource: "https://github.com/PassQwerty/app-costs",
      newDemo: "https://passqwerty.github.io/app-costs/",
    },
    {
      newImg: "https://i.ibb.co/2v5nKnx/Screenshot-2023-07-11-at-11-46-27.png",
      newName: "Сайт портфолио",
      newDescription: "Профессиональный сайт портфолио",
      newAllDescription:
        "Профессиональный сайт портфолио сделанный на Next 13 с использованием базы данных PostgreSQL (Neon.tech) + Prisma с применением SASS. На сайте присутсвует свой созданный RESTful API для общения между базой данных. Для анимаций использовалась библиотека Framer-Motion. Приятным дополнением создана смена темы по нажатию на клавиши в верхнем меню.",
      newTags: [
        "NextJs",
        "Prisma",
        "PostgreSQL",
        "Framer-Motion",
        "HTML",
        "SASS",
        "CSS",
      ],
      newSource: "/ПУСТО",
      newDemo: "/ПУСТО",
    },
  ],
};
