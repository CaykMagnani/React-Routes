import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Error from "./Pages/Error";
import Produto from "./Pages/Produtos";
import Header from "./Components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos/:id" element={<Produto />} />
        <Route path="/Sobre" element={<Sobre />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
