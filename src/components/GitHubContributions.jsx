import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const USERNAME = "dawgdevv";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const GHCHART_FALLBACK = `https://ghchart.rshah.org/26a641/${USERNAME}`;
const GITHUB_PROFILE = `https://github.com/${USERNAME}`;

const levelClass = {
  0: "bg-transparent border border-line/20",
  1: "bg-[#161b22] border border-[#0e4429]",
  2: "bg-[#0e4429] border border-[#0e4429]",
  3: "bg-[#26a641] border border-[#26a641]",
  4: "bg-[#39d353] border border-[#39d353]",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function GitHubContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((json) => {
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const contributions = data?.contributions ?? [];
  const total = data?.total?.lastYear ?? null;

  // Pad start so first column starts on Sunday (GitHub grid alignment)
  const startWeekday = contributions[0] ? new Date(contributions[0].date).getDay() : 0;
  const padded = startWeekday
    ? [...Array(startWeekday).fill(null).map((_, i) => ({ date: `pad-start-${i}`, count: 0, level: 0 })), ...contributions]
    : contributions;

  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));

  const monthLabels = weeks.map((week) => {
    const f = week.find((d) => d.date && d.date.endsWith("-01"));
    return f ? new Date(f.date).toLocaleDateString("en-US", { month: "short" }) : "";
  });

  if (loading) {
    return (
      <section className="w-full space-y-3" aria-label="GitHub contributions loading">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-black uppercase leading-none tracking-tight">Contributions</h2>
          <span className="text-xs font-semibold opacity-60">loading…</span>
        </div>
        <div className="overflow-hidden rounded-lg border border-line/20 p-3">
          <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
            {Array.from({ length: 7 * 26 }).map((_, i) => (
              <div key={i} className="h-[10px] w-[10px] animate-pulse rounded-[2px] bg-paper/10" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !contributions.length) {
    return (
      <section className="w-full space-y-3" aria-labelledby="contributions-heading">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="contributions-heading" className="text-lg font-black uppercase leading-none tracking-tight">
            Contributions
          </h2>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="text-xs font-bold lowercase underline decoration-1 underline-offset-4 opacity-70 hover:opacity-100">
            @{USERNAME} ↗
          </a>
        </div>
        <div className="overflow-x-auto rounded-lg border border-line/20 p-2">
          <img src={GHCHART_FALLBACK} alt={`GitHub contribution graph for ${USERNAME}`} loading="lazy" className="w-full min-w-[640px] max-w-none" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full space-y-3" aria-labelledby="contributions-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="contributions-heading" className="text-lg font-black uppercase leading-none tracking-tight">
          Contributions
        </h2>
        <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="text-xs font-bold lowercase underline decoration-1 underline-offset-4 opacity-70 hover:opacity-100">
          @{USERNAME} ↗
        </a>
      </div>

      {total !== null && <p className="-mt-1 text-xs font-bold uppercase tracking-wide opacity-60">{total.toLocaleString()} in last year</p>}

      <div className="relative overflow-x-auto rounded-lg border border-line/20 p-2 sm:p-3">
        <div className="flex gap-[3px] text-[10px] font-semibold uppercase tracking-wide opacity-40">
          <div className="w-[14px] shrink-0" aria-hidden="true" />
          <div className="flex gap-[3px]">
            {monthLabels.map((label, i) => (
              <span key={i} className="w-[10px] shrink-0 overflow-visible text-left">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-1 flex gap-[3px]">
          <div className="flex w-[14px] shrink-0 flex-col gap-[3px] text-[10px] font-semibold leading-none opacity-30">
            <span className="h-[10px] leading-[10px]">&nbsp;</span>
            <span className="h-[10px] leading-[10px]">M</span>
            <span className="h-[10px] leading-[10px]">&nbsp;</span>
            <span className="h-[10px] leading-[10px]">W</span>
            <span className="h-[10px] leading-[10px]">&nbsp;</span>
            <span className="h-[10px] leading-[10px]">F</span>
            <span className="h-[10px] leading-[10px]">&nbsp;</span>
          </div>

          <div
            className="grid grid-flow-col grid-rows-7 gap-[3px]"
            role="img"
            aria-label={`GitHub contribution graph for ${USERNAME}`}
            onMouseLeave={() => setHover(null)}
          >
            {weeks.map((week, wi) =>
              week.map((day, di) => {
                const isPad = day.date.startsWith("pad");
                if (isPad) {
                  return (
                    <div key={`${day.date}-${wi}-${di}`} className={`h-[10px] w-[10px] rounded-[2px] ${levelClass[0]}`} aria-hidden="true" />
                  );
                }
                return (
                  <motion.div
                    key={`${day.date}-${wi}-${di}`}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHover({ date: day.date, count: day.count, x: rect.left + rect.width / 2, y: rect.top });
                    }}
                    whileHover={{ scale: 1.5, zIndex: 2 }}
                    whileTap={{ scale: 1.25 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className={`h-[10px] w-[10px] cursor-pointer rounded-[2px] ${levelClass[day.level] ?? levelClass[0]} will-change-transform`}
                  />
                );
              })
            )}
          </div>
        </div>
        <AnimatePresence>
          {hover && (
            <motion.div
              key={`${hover.date}-${hover.x}`}
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.7 }}
              style={{ left: hover.x, top: hover.y - 10 }}
              className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-full bg-paper px-2.5 py-1 text-[11px] font-bold text-ink shadow-lg will-change-transform"
            >
              {hover.count} on {formatDate(hover.date)}
              <span className="absolute left-1/2 top-full h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] font-bold uppercase tracking-widest opacity-50">
          <span>Less</span>
          <span className="flex gap-[3px]">
            <span className={`h-[10px] w-[10px] rounded-[2px] ${levelClass[0]}`} />
            <span className={`h-[10px] w-[10px] rounded-[2px] ${levelClass[1]}`} />
            <span className={`h-[10px] w-[10px] rounded-[2px] ${levelClass[2]}`} />
            <span className={`h-[10px] w-[10px] rounded-[2px] ${levelClass[3]}`} />
            <span className={`h-[10px] w-[10px] rounded-[2px] ${levelClass[4]}`} />
          </span>
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
