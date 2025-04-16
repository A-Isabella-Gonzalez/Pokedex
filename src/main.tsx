import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./routes/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Pokedex from "./routes/Pokedex.tsx";
import Strategy from "./routes/Strategy.tsx";
import Trivia from "./routes/Trivia.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/trivia" element={<Trivia />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
