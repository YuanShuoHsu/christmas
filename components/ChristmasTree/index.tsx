"use client";

import TreeLayers from "@/components/ChristmasTree/TreeLayers";
import TreeShadow from "@/components/ChristmasTree/TreeShadow";
import TreeTrunk from "@/components/ChristmasTree/TreeTrunk";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";

const ChristmasTree = () => {
  const displayName = useChristmasTreeStore((state) => state.displayName);
  const nameToShow = displayName.trim();

  return (
    <div
      aria-label="3D Christmas tree"
      className="relative top-[-150px] w-[300px] h-[300px] transform-3d before:content-['⭐'] before:absolute before:top-[-120px] before:left-[calc(50%-30px)] before:text-[4em] transform-[rotateX(-20deg)_rotateY(30deg)] animate-tree-spin motion-reduce:animate-none"
      role="img"
    >
      <TreeLayers />
      <TreeTrunk />
      <TreeShadow />
      {nameToShow ? (
        <span className="pointer-events-none absolute left-1/2 top-[34px] z-10 -translate-x-1/2 -rotate-2 select-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/25 px-4 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
            >
              ✦
            </span>
            <span className="max-w-[220px] truncate text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-200 to-emerald-500 [background-size:200%_100%] animate-christmas-shine motion-reduce:animate-none [text-shadow:0_0_12px_rgba(255,215,0,0.55),0_0_22px_rgba(34,197,94,0.30),0_0_24px_rgba(239,68,68,0.25)]">
              {nameToShow}
            </span>
            <span
              aria-hidden="true"
              className="text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
            >
              ✦
            </span>
          </span>
        </span>
      ) : null}
    </div>
  );
};

export default ChristmasTree;
