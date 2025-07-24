// import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

// import UseCallbackExample from "./component/callback";
// import UseMemo from "./component/memo";
// import ThemeToggle from "./component/theme-toggle";
// import { ThemeProvider } from "./context/ThemeContext";
import ShowUser from "./component/show-user";
// function FallbackComponent({
//   error,
//   resetErrorBoundary,
// }: {
//   error: Error;
//   resetErrorBoundary: () => void;
// }) {
//   return (
//     <div>
//       <p>Something went wrong: {error.message}</p>
//       <button onClick={resetErrorBoundary}>Try Again</button>
//     </div>
//   );
// }

function App() {
  return (
    // <ThemeProvider>
    //   {/* <ThemeToggle /> */}
    //   {/* <UseMemo/> */}
    //   {/* <UseCallbackExample/> */}
    //   <ErrorBoundary
    //     FallbackComponent={FallbackComponent}
    //     onReset={() => window.location.reload()}
    //   >
    //     <UseCallbackExample />{" "}
    //   </ErrorBoundary>
    // </ThemeProvider>
    <ShowUser></ShowUser>
  );
}

export default App;
