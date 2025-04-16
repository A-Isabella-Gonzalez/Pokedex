import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./routes/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Home />} />
          <Route path="/strategy" element={<Home />} />
          <Route path="/trivia" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
