import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App, ConfigProvider, theme } from "antd";
import useStore, { selectors } from "./store";
import "antd/dist/reset.css";
import "./assets/style.css";

export function MyApp() {
  const darkMode = useStore(selectors.darkMode);

  return (
    // <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.lightAlgorithm,
      }}
    >
      <App>
        <HashRouter>
          <h1>Useful scripts: Facebook all in one</h1>
        </HashRouter>
      </App>
    </ConfigProvider>
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
