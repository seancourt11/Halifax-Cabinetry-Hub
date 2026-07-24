import type { DoorStyleId } from "@/data/finishes";

type DoorFigureProps = {
  style: DoorStyleId;
  fill: string;
  /** When true, renders subtle vertical wood-grain streaks (for stains). */
  grain?: boolean;
  className?: string;
  title?: string;
};

// A lightweight, recolorable SVG cabinet door used by the visualizer and
// product cards. Shadows/highlights are presentational rgba overlays; the base
// `fill` comes from finish data.
export function DoorFigure({ style, fill, grain = false, className, title }: DoorFigureProps) {
  const W = 200;
  const H = 264;
  const gid = `grain-${style}`;

  const shade = "rgba(0,0,0,0.16)";
  const deepShade = "rgba(0,0,0,0.26)";
  const light = "rgba(255,255,255,0.22)";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          {Array.from({ length: 18 }).map((_, i) => (
            <stop
              key={i}
              offset={`${(i / 17) * 100}%`}
              stopColor="#000"
              stopOpacity={i % 2 === 0 ? 0.05 : 0}
            />
          ))}
        </linearGradient>
      </defs>

      {/* Door body */}
      <rect x="4" y="4" width={W - 8} height={H - 8} rx="3" fill={fill} />
      {grain ? <rect x="4" y="4" width={W - 8} height={H - 8} rx="3" fill={`url(#${gid})`} /> : null}
      {/* Outer edge highlight + shadow for depth */}
      <rect
        x="4"
        y="4"
        width={W - 8}
        height={H - 8}
        rx="3"
        fill="none"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="1.5"
      />

      {style === "slab" ? null : <Frame style={style} fill={fill} grain={grain} gid={gid} shade={shade} deepShade={deepShade} light={light} W={W} H={H} />}
    </svg>
  );
}

function Frame({
  style,
  fill,
  grain,
  gid,
  shade,
  deepShade,
  light,
  W,
  H,
}: {
  style: DoorStyleId;
  fill: string;
  grain: boolean;
  gid: string;
  shade: string;
  deepShade: string;
  light: string;
  W: number;
  H: number;
}) {
  // Frame width varies by style
  const fw = style === "slim-shaker" ? 16 : style === "raised-panel" ? 30 : 24;
  const px = 4 + fw;
  const py = 4 + fw;
  const pw = W - 8 - fw * 2;
  const ph = H - 8 - fw * 2;

  return (
    <g>
      {/* recess shadow around the panel opening */}
      <rect x={px - 2} y={py - 2} width={pw + 4} height={ph + 4} rx="2" fill={deepShade} />
      {/* the centre panel */}
      <rect x={px} y={py} width={pw} height={ph} rx="1.5" fill={fill} />
      {grain ? <rect x={px} y={py} width={pw} height={ph} rx="1.5" fill={`url(#${gid})`} /> : null}

      {style === "raised-panel" ? (
        <>
          {/* raised inner panel with bevel */}
          <rect x={px + 10} y={py + 10} width={pw - 20} height={ph - 20} rx="2" fill={light} />
          <rect x={px + 14} y={py + 14} width={pw - 28} height={ph - 28} rx="2" fill={fill} />
          {grain ? (
            <rect x={px + 14} y={py + 14} width={pw - 28} height={ph - 28} rx="2" fill={`url(#${gid})`} />
          ) : null}
        </>
      ) : null}

      {style === "recessed-panel" ? (
        <rect
          x={px + 6}
          y={py + 6}
          width={pw - 12}
          height={ph - 12}
          rx="1.5"
          fill="none"
          stroke={shade}
          strokeWidth="2"
        />
      ) : null}

      {style === "beaded" ? (
        <rect
          x={px + 3}
          y={py + 3}
          width={pw - 6}
          height={ph - 6}
          rx="1.5"
          fill="none"
          stroke={light}
          strokeWidth="1.4"
        />
      ) : null}

      {style === "reeded" ? (
        <g>
          {Array.from({ length: 11 }).map((_, i) => {
            const x = px + 4 + (i * (pw - 8)) / 10;
            return (
              <line
                key={i}
                x1={x}
                y1={py + 4}
                x2={x}
                y2={py + ph - 4}
                stroke={i % 2 === 0 ? shade : light}
                strokeWidth="2"
              />
            );
          })}
        </g>
      ) : null}

      {/* subtle inner-frame highlight */}
      <rect x={px} y={py} width={pw} height={ph} rx="1.5" fill="none" stroke={shade} strokeWidth="1" />
    </g>
  );
}
