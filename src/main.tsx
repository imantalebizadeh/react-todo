import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/context/ThemeProvider.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "@/store";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
