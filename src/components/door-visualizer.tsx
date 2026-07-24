import { useState } from "react";
import { DoorFigure } from "@/components/door-figure";
import {
  doorStyles,
  paintColors,
  woodStains,
  type DoorStyleId,
  type Finish,
} from "@/data/finishes";
import { cn } from "@/lib/utils";

type FinishMode = "paint" | "stain";

export function DoorVisualizer() {
  const [styleId, setStyleId] = useState<DoorStyleId>("shaker");
  const [mode, setMode] = useState<FinishMode>("paint");
  const [paint, setPaint] = useState<Finish>(paintColors[0]);
  const [stain, setStain] = useState<Finish>(woodStains[1]);

  const active = mode === "paint" ? paint : stain;
  const swatches = mode === "paint" ? paintColors : woodStains;
  const activeStyle = doorStyles.find((d) => d.id === styleId)!;

  return (
    <div className="grid items-start gap-10 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      {/* Preview */}
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-xs items-center justify-center rounded-md bg-secondary/60 p-8">
          <DoorFigure
            style={styleId}
            fill={active.hex}
            grain={mode === "stain"}
            className="h-[360px] w-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            title={`${activeStyle.name} door in ${active.name}`}
          />
        </div>
        <div className="mt-5 text-center">
          <p className="font-display text-2xl font-semibold text-foreground">{activeStyle.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "paint" ? "Painted" : "Stained"} · {active.name}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div>
        <p className="eyebrow text-accent">Door style</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {doorStyles.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setStyleId(d.id)}
              aria-pressed={styleId === d.id}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                styleId === d.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2">
          {(["paint", "stain"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={cn(
                "tracked rounded-md border px-4 py-2 text-[0.7rem] transition-colors",
                mode === m
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {m === "paint" ? "Paint Colours" : "Wood Stains"}
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-5 gap-2.5 sm:grid-cols-6">
          {swatches.map((s) => {
            const selected = active.id === s.id;
            return (
              <button
                key={s.id}
                type="button"
                title={`${s.name} — ${s.note}`}
                aria-label={`${s.name}, ${s.note}`}
                aria-pressed={selected}
                onClick={() => (mode === "paint" ? setPaint(s) : setStain(s))}
                className={cn(
                  "aspect-square rounded-full border transition-transform hover:scale-105",
                  selected
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-card"
                    : "border-black/10",
                )}
                style={{ backgroundColor: s.hex }}
              />
            );
          })}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">{active.name}.</span> {active.note}.{" "}
          {mode === "paint"
            ? "Hand-sprayed in a durable conversion finish."
            : "Hand-rubbed natural hardwax oil on white oak."}
        </p>
      </div>
    </div>
  );
}
