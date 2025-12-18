"use client";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";

const DisplayNameBanner = () => {
  const displayName = useChristmasTreeStore((state) => state.displayName);
  const nameToShow = displayName.trim();
  if (!nameToShow) return null;

  return (
    <div className="z-10 -rotate-2 pointer-events-none select-none flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/25 px-4 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
        <span
          aria-hidden="true"
          className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
        >
          ✦
        </span>
        <span className="max-w-[220px] truncate text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-red-500 via-yellow-200 to-emerald-500 [background-size:200%_100%] animate-christmas-shine motion-reduce:animate-none [text-shadow:0_0_12px_rgba(255,215,0,0.55),0_0_22px_rgba(34,197,94,0.30),0_0_24px_rgba(239,68,68,0.25)]">
          {nameToShow}
        </span>
        <span
          aria-hidden="true"
          className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
        >
          ✦
        </span>
      </span>
    </div>
  );
};

export default DisplayNameBanner;
