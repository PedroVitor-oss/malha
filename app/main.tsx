import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Landing page de página única por enquanto.
          Para adicionar novas páginas no futuro, basta somar
          novas <Route path="..." element={...} /> aqui. */}
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
