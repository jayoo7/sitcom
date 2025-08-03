import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import YouTubeGrid from "./components/YoutubeGrid/YouTubeGrid.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view-shorts" element={<YouTubeGrid />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
