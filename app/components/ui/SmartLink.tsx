import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * Um único componente para qualquer tipo de link:
 *  - "/rota" ou "/#ancora"  -> navegação interna (react-router)
 *  - "#ancora"              -> rola na própria página
 *  - "https://..." / mailto -> link externo (abre em nova aba, exceto mailto/tel)
 */
export function SmartLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  const opensNewTab = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
