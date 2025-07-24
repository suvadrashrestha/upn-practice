import { createContext, useEffect, useState } from "react";

interface IthemeContext {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IthemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = window.document.documentElement;
    // console.log(root);
    // root.classList.add(theme == "light" ? "dark" : "light");
    if(theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");}
  },[theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: () => {
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
