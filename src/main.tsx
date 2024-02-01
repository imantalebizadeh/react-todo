import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/context/ThemeProvider.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
);
