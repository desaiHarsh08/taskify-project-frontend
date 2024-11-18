import { Outlet } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { ErrorProvider } from "./provider/ErrorProvider";
import { ThemeProvider } from "./provider/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ErrorProvider>
        <Toaster />
        <div id="app">
          <Outlet />
        </div>
      </ErrorProvider>
    </ThemeProvider>
  );
}
