import type { MediaItem } from "../../config/projectTypes";

/**
 * Mostra a imagem se "src" estiver preenchido; caso contrário mostra um
 * placeholder tracejado com a sugestão do que colocar ali.
 */
export function MediaBox({
  media,
  tone = "ink",
  aspect = "aspect-[4/3]",
  className = "",
}: {
  media: MediaItem;
  tone?: "ink" | "paper";
  aspect?: string;
  className?: string;
}) {
  const colors =
    tone === "ink"
      ? "border-ink-line bg-ink-soft text-fog"
      : "border-paper-line bg-paper-soft text-stone";

  if (media.src) {
    return (
      <img
        src={media.src}
        alt={media.alt}
        loading="lazy"
        className={`w-full rounded-2xl border object-cover ${aspect} ${colors} ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={media.alt}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed p-6 text-center ${aspect} ${colors} ${className}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
        Imagem sugerida
      </span>
      {media.suggestion && (
        <span className="max-w-xs text-sm leading-snug">{media.suggestion}</span>
      )}
    </div>
  );
}
