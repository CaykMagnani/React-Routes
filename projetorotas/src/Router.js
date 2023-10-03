import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index.js";
import Sobre from "./Pages/Sobre";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
