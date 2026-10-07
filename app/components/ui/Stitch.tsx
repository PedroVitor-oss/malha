/**
 * Thin "stitched thread" divider — a running dashed line tied by a knot
 * in the middle. Stands in for a plain <hr>: it literalizes the company's
 * name (malha = mesh/knit) at every section seam instead of decorating it.
 */
export function Stitch({ tone = "line" }: { tone?: "line" | "thread" }) {
  const color = tone === "thread" ? "var(--color-thread)" : "currentColor";

  return (
    <div
      aria-hidden="true"
      className="relative flex items-center justify-center opacity-40"
      style={{ color: tone === "thread" ? undefined : "var(--color-fog)" }}
    >
      <svg
        width="100%"
        height="10"
        viewBox="0 0 400 10"
        preserveAspectRatio="none"
        className="w-full"
      >
        <line
          x1="0"
          y1="5"
          x2="184"
          y2="5"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <circle cx="200" cy="5" r="2.5" fill={color} />
        <line
          x1="216"
          y1="5"
          x2="400"
          y2="5"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>
    </div>
  );
}
