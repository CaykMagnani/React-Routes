import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Error from "./Pages/Error";
import Produto from "./Pages/Produtos";
import Header from "./Components/Header";
import Contato from "./Pages/Informacoes";

function RoutesApp() {
  return (
    <BrowserRouter>
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos/:id" element={<Produto />} />
        <Route path="/Informacoes/:id" element={<Contato />} />
        <Route path="/Sobre" element={<Sobre />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
