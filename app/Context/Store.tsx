"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeType = "light" | "dark";

interface ContextProps {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const GlobalContext = createContext<ContextProps>({
  theme: "light",
  setTheme: (): ThemeType => "light",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("theme", theme);
    }
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
