import "./App.css";
import ThemeToggle from "./component/theme-toggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
     <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
