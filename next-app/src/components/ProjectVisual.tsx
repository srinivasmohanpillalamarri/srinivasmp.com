import type { ComponentType } from 'react';
import type { ProjectMotif } from '@/data/resume';

const A = 'var(--accent)';

/* Cells that read as "passed" in the coverage grid — fixed, not random. */
const PASSED = new Set([0, 2, 3, 6, 7, 8, 11, 12, 14, 16, 18, 21, 22]);
const CHECKED = new Set([6, 12, 18]);

/** Autonomous test coverage — a grid of cases, most passing, under a scan line. */
function TestMatrix() {
  const cells = [];
  for (let i = 0; i < 25; i++) {
    const r = Math.floor(i / 5);
    const c = i % 5;
    const x = 46 + c * 42;
    const y = 46 + r * 42;
    cells.push(
      <g key={i}>
        <rect
          x={x} y={y} width="34" height="34" rx="9"
          fill={PASSED.has(i) ? A : 'none'}
          fillOpacity={PASSED.has(i) ? 0.14 : 0}
          stroke={A}
          strokeWidth="1.25"
          opacity={PASSED.has(i) ? 0.55 : 0.22}
        />
        {CHECKED.has(i) && (
          <path
            d={`M${x + 10} ${y + 17.5} l4.5 4.5 l9 -9`}
            fill="none" stroke={A} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            opacity="0.9"
          />
        )}
      </g>
    );
  }
  return (
    <g>
      {cells}
      <line x1="30" y1="172" x2="270" y2="172" stroke={A} strokeWidth="1.5" opacity="0.75" />
    </g>
  );
}

/** One prompt fanning out into many generated bots. */
function Conversation() {
  const leaves = [
    [78, 78], [150, 62], [222, 78],
    [58, 150], [242, 150],
    [78, 222], [150, 238], [222, 222],
  ];
  return (
    <g>
      {leaves.map(([x, y], i) => (
        <line
          key={`l${i}`}
          x1="150" y1="150" x2={x} y2={y}
          stroke={A} strokeWidth="1.25" opacity={0.22 + (i % 3) * 0.12}
        />
      ))}
      {leaves.map(([x, y], i) => (
        <circle
          key={`c${i}`}
          cx={x} cy={y} r={i % 3 === 0 ? 15 : 11}
          fill="none" stroke={A} strokeWidth="1.25" opacity={0.4 + (i % 3) * 0.15}
        />
      ))}
      <circle cx="150" cy="150" r="26" fill={A} opacity="0.16" />
      <circle cx="150" cy="150" r="26" fill="none" stroke={A} strokeWidth="1.5" opacity="0.85" />
    </g>
  );
}

/** Hands-free voice capture — a waveform with propagation arcs. */
function Voice() {
  const bars = [26, 52, 88, 132, 74, 108, 150, 96, 60, 118, 82, 44, 24];
  return (
    <g>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={58 + i * 15}
          y={150 - h / 2}
          width="6" height={h} rx="3"
          fill={A}
          opacity={0.28 + ((i * 3) % 5) * 0.14}
        />
      ))}
      {[86, 112].map((r, i) => (
        <g key={r} opacity={0.3 - i * 0.1}>
          <path
            d={`M${150 - r} 150 A ${r} ${r} 0 0 1 ${150 - r * 0.5} ${150 - r * 0.87}`}
            fill="none" stroke={A} strokeWidth="1.25" strokeLinecap="round"
          />
          <path
            d={`M${150 + r} 150 A ${r} ${r} 0 0 0 ${150 + r * 0.5} ${150 + r * 0.87}`}
            fill="none" stroke={A} strokeWidth="1.25" strokeLinecap="round"
          />
        </g>
      ))}
    </g>
  );
}

/** Self-service cloud SQL — stacked stores with query flow. */
function Database() {
  return (
    <g>
      {[0, 1, 2].map((i) => {
        const y = 84 + i * 52;
        return (
          <g key={i} opacity={0.75 - i * 0.18}>
            <ellipse cx="150" cy={y} rx="66" ry="17" fill="none" stroke={A} strokeWidth="1.25" />
            <path
              d={`M84 ${y} v30 a66 17 0 0 0 132 0 v-30`}
              fill="none" stroke={A} strokeWidth="1.25"
            />
          </g>
        );
      })}
      {[-1, 1].map((d) => (
        <path
          key={d}
          d={`M${150 + d * 96} 108 v84`}
          stroke={A} strokeWidth="1.25" opacity="0.35"
          strokeDasharray="5 6"
        />
      ))}
      <circle cx="150" cy="240" r="5" fill={A} opacity="0.8" />
    </g>
  );
}

/** Legacy grid resolving into a modern one. */
function Migration() {
  const grid = (ox: number, dashed: boolean, op: number) =>
    [0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <rect
          key={`${ox}-${r}-${c}`}
          x={ox + c * 30} y={96 + r * 30}
          width="24" height="24" rx="6"
          fill="none" stroke={A} strokeWidth="1.25"
          strokeDasharray={dashed ? '3 4' : undefined}
          opacity={op}
        />
      ))
    );
  return (
    <g>
      {grid(34, true, 0.3)}
      {grid(182, false, 0.7)}
      <path
        d="M140 141 h24 m-6 -6 l6 6 l-6 6"
        fill="none" stroke={A} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.85"
      />
    </g>
  );
}

/** Multi-country rollout — connected sites of differing scale. */
function Network() {
  const nodes: [number, number, number][] = [
    [70, 96, 13], [150, 66, 9], [232, 108, 16],
    [104, 168, 10], [196, 178, 12],
    [66, 232, 8], [154, 236, 14], [236, 216, 9],
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [3, 5], [4, 6], [6, 7], [5, 6], [1, 3],
  ];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={A} strokeWidth="1.25" opacity={0.18 + (i % 4) * 0.08}
        />
      ))}
      {nodes.map(([x, y, r], i) => (
        <circle
          key={i} cx={x} cy={y} r={r}
          fill={i % 3 === 0 ? A : 'none'}
          fillOpacity={i % 3 === 0 ? 0.18 : 0}
          stroke={A} strokeWidth="1.25"
          opacity={0.45 + (i % 3) * 0.18}
        />
      ))}
    </g>
  );
}

/** Schema carried across, row by row, without loss. */
function Schema() {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <g>
      {rows.map((r) => (
        <rect
          key={`l${r}`}
          x="34" y={82 + r * 24} width="86" height="15" rx="4"
          fill={A} opacity={0.5 - r * 0.05}
        />
      ))}
      {rows.map((r) => (
        <rect
          key={`r${r}`}
          x="180" y={82 + r * 24} width="86" height="15" rx="4"
          fill="none" stroke={A} strokeWidth="1.25" opacity={0.6 - r * 0.06}
        />
      ))}
      {rows.map((r) => (
        <path
          key={`f${r}`}
          d={`M124 ${89 + r * 24} h52`}
          stroke={A} strokeWidth="1.25" opacity={0.22 + (r % 3) * 0.14}
          strokeDasharray="4 5"
        />
      ))}
    </g>
  );
}

const MOTIFS: Record<ProjectMotif, ComponentType> = {
  'test-matrix':  TestMatrix,
  'conversation': Conversation,
  'voice':        Voice,
  'database':     Database,
  'migration':    Migration,
  'network':      Network,
  'schema':       Schema,
};

/**
 * Abstract composition chosen by what the project *is* — coverage grid for the
 * test platform, waveform for the voice tool, and so on. Purely decorative.
 */
export function ProjectVisual({ motif }: { motif: ProjectMotif }) {
  const Motif = MOTIFS[motif] ?? Network;

  return (
    <div
      className="relative w-full overflow-hidden rounded-card"
      style={{
        aspectRatio: '4 / 3',
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <Motif />
      </svg>
    </div>
  );
}
