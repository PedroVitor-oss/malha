import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ao trocar de página: volta pro topo.
 * Se a URL tiver #ancora (ex: /#contato), rola até a seção correspondente.
 * Necessário porque o react-router não faz isso sozinho entre páginas.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = hash.slice(1);
    const go = () => document.getElementById(id)?.scrollIntoView();
    // espera um frame: a página nova pode ainda estar montando
    const raf = requestAnimationFrame(go);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}
