"use client";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";

const DisplayNameBanner = () => {
  const displayName = useChristmasTreeStore((state) => state.displayName);
  const nameToShow = displayName.trim();
  if (!nameToShow) return null;

  return (
    <div className="absolute p-2 max-w-[220px] bg-white/25 backdrop-blur-sm border border-white/50 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.22)] flex items-center gap-2 pointer-events-none select-none">
      <span
        aria-hidden="true"
        className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
      >
        ✦
      </span>
      <span className="truncate text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-red-500 via-fuchsia-400 to-sky-400 bg-size-[200%_100%] animate-christmas-shine motion-reduce:animate-none">
        {nameToShow}
      </span>
      <span
        aria-hidden="true"
        className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
      >
        ✦
      </span>
    </div>
  );
};

export default DisplayNameBanner;
