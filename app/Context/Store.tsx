"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type ThemeType = "light" | "dark";

export type Links = {
  main: React.MutableRefObject<null>;
  myProject: React.MutableRefObject<null>;
  aboutMe: React.MutableRefObject<null>;
  mySkills: React.MutableRefObject<null>;
  contactMe: React.MutableRefObject<null>;
};

interface ContextProps {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  data: Links;
}

const GlobalContext = createContext<ContextProps>({
  theme: "light",
  setTheme: (): ThemeType => "light",
  data: {
    main: createRef(),
    myProject: createRef(),
    aboutMe: createRef(),
    mySkills: createRef(),
    contactMe: createRef(),
  },
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const linksRef = {
    main: useRef(null),
    myProject: useRef(null),
    aboutMe: useRef(null),
    mySkills: useRef(null),
    contactMe: useRef(null),
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("theme", theme);
    }
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, data: { ...linksRef } }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
