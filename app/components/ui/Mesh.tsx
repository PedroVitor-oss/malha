import { motion, useReducedMotion } from "motion/react";

type Node = { id: string; x: number; y: number; label: string };

const NODES: Node[] = [
  { id: "whatsapp", x: 90, y: 120, label: "WhatsApp" },
  { id: "planilha", x: 70, y: 340, label: "Planilha" },
  { id: "sistema", x: 250, y: 480, label: "Sistema" },
  { id: "site", x: 470, y: 460, label: "Site" },
  { id: "cliente", x: 560, y: 260, label: "Cliente" },
  { id: "malha", x: 340, y: 240, label: "Malha" },
];

const EDGES: [string, string][] = [
  ["whatsapp", "malha"],
  ["planilha", "malha"],
  ["sistema", "malha"],
  ["site", "malha"],
  ["malha", "cliente"],
];

function find(id: string) {
  return NODES.find((n) => n.id === id)!;
}

/**
 * The signature element: a loose network of the tools a small business
 * already runs on (WhatsApp, spreadsheet, in-house system, site) threading
 * into one node — Malha — which then reaches the client. Draws itself in
 * on mount, then idles with a slow pulse.
 */
export function Mesh({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 640 560"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {EDGES.map(([a, b], i) => {
        const from = find(a);
        const to = find(b);
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--color-thread)"
            strokeWidth="1.25"
            strokeDasharray="3 6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              delay: reduceMotion ? 0 : 0.3 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        );
      })}

      {NODES.map((node, i) => {
        const isCore = node.id === "malha";
        return (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={isCore ? 7 : 4.5}
              fill={isCore ? "var(--color-thread)" : "var(--color-cream)"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isCore ? 1 : 0.85, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : 0.15 * i,
                ease: "easeOut",
              }}
            />
            {!reduceMotion && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCore ? 7 : 4.5}
                fill="none"
                stroke={isCore ? "var(--color-thread)" : "var(--color-cream)"}
                strokeWidth="1"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 2.4 }}
                transition={{
                  duration: 2.4,
                  delay: 1 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
            <text
              x={node.x}
              y={node.y + (isCore ? 22 : 18)}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--color-fog)"
              opacity={isCore ? 0.9 : 0.6}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
