import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-ink text-cream">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-thread">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-fog">O endereço que você tentou abrir não existe.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-thread px-6 py-3 font-mono text-sm font-medium text-ink"
        >
          Voltar ao início
        </Link>
      </Container>
    </main>
  );
}
