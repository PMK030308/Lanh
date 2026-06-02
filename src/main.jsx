import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MusicProvider } from "./components/MusicProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </React.StrictMode>
);
