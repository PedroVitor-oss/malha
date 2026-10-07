import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import { ScrollToHash } from "./components/ScrollToHash";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToHash />
    <Routes>
      {/* Página inicial (landing page) */}
      <Route path="/" element={<App />} />
      {/* Página de projeto: /projetos/<slug>, um por arquivo em app/config/projects/ */}
      <Route path="/projetos/:slug" element={<ProjectPage />} />
      {/* Qualquer outro endereço */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
