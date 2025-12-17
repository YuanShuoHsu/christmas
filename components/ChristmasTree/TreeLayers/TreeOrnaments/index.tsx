import Image from "next/image";

import { cssVar } from "@/utils/cssVar";
import type { TreeOrnament } from "@/utils/treeOrnaments";

interface TreeOrnamentsProps {
  layerIndex: number;
  ornaments: TreeOrnament[];
  photoUrl: string | null;
}

const TreeOrnaments = ({
  layerIndex,
  ornaments,
  photoUrl,
}: TreeOrnamentsProps) => {
  if (!photoUrl) return null;

  const layerOrnaments = ornaments.filter(
    (ornament) => ornament.layerIndex === layerIndex,
  );
  if (layerOrnaments.length === 0) return null;

  return (
    <>
      {layerOrnaments.map((ornament) => (
        <span
          key={ornament.id}
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full origin-bottom transform-[rotateY(calc(90deg*var(--i)))_rotateX(30deg)_translateZ(173px)_translateZ(1px)]"
          style={cssVar("--i", ornament.faceIndex)}
        >
          <span
            className="pointer-events-none absolute top-0 left-1/2 overflow-hidden rounded-full bg-white/35 border-2 border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.25)] w-[calc(var(--size,44)*1px)] h-[calc(var(--size,44)*1px)] transform-[translateX(-50%)_translateX(calc(var(--x,0)*1px))_translateY(calc(var(--y,75)*1px))]"
            style={{
              ...cssVar("--x", ornament.x),
              ...cssVar("--y", ornament.y),
              ...cssVar("--size", ornament.size),
            }}
          >
            <Image
              src={photoUrl}
              alt=""
              width={ornament.size}
              height={ornament.size}
              className="h-full w-full object-cover"
              unoptimized
            />
          </span>
        </span>
      ))}
    </>
  );
};

export default TreeOrnaments;
