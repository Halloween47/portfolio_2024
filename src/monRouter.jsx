import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projets from "./pages/projets/projets/projets";
import MAJComponentProjets from "./components/MAJComponentProjets/MAJComponentProjets";
import App from "./App";

function MonRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/projets" element={<App />} />
      </Routes>
    </Router>
  );
}

export default MonRouter;
