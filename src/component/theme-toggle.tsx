import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="w-[150px] h-[150px] bg-back"></div>
      <button onClick={toggleTheme}>click me </button>
    </>
  );
};

export default ThemeToggle;
