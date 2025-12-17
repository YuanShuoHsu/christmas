import Image from "next/image";

import { useChristmasTreeStore } from "@/stores/christmasTreeStoreProvider";

import { cssVar } from "@/utils/cssVar";
import type { TreeOrnament } from "@/utils/treeOrnaments";

interface TreeOrnamentsProps {
  layerIndex: TreeOrnament["layerIndex"];
  faceIndex: TreeOrnament["faceIndex"];
}

const TreeOrnaments = ({ layerIndex, faceIndex }: TreeOrnamentsProps) => {
  const ornaments = useChristmasTreeStore((state) => state.ornaments);
  const photoUrl = useChristmasTreeStore((state) => state.photoUrl);
  if (!photoUrl) return null;

  const layerOrnaments = ornaments.filter(
    (ornament) =>
      ornament.layerIndex === layerIndex && ornament.faceIndex === faceIndex,
  );
  if (layerOrnaments.length === 0) return null;

  return (
    <>
      {layerOrnaments.map((ornament) => (
        <span
          aria-hidden="true"
          className="absolute top-0 left-1/2 overflow-hidden rounded-full bg-white/35 border-2 border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.25)] w-[calc(var(--size,44)*1px)] h-[calc(var(--size,44)*1px)] transform-[translateZ(1px)_translateX(calc(-50%+var(--x,0)*1px))_translateY(calc(var(--y,75)*1px))] pointer-events-none"
          key={ornament.id}
          style={{
            ...cssVar("--x", ornament.x),
            ...cssVar("--y", ornament.y),
            ...cssVar("--size", ornament.size),
          }}
        >
          <Image
            alt=""
            className="h-full w-full object-cover"
            height={ornament.size}
            src={photoUrl}
            unoptimized
            width={ornament.size}
          />
        </span>
      ))}
    </>
  );
};

export default TreeOrnaments;
