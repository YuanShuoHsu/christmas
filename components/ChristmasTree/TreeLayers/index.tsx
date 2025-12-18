import TreeOrnaments from "./TreeOrnaments";

import { faceIndices, layerIndices } from "@/constants/christmasTree";

import { cssVar } from "@/utils/cssVar";

const TreeLayers = () => (
  <>
    {layerIndices.map((j) => (
      <div
        key={j}
        className="absolute top-0 left-0 w-full h-full transform-3d transform-[translateY(calc(90px*var(--j)))]"
        style={cssVar("--j", j)}
      >
        {faceIndices.map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#69c069] to-[#77dd77] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] origin-bottom border-b-10 border-b-[#00000019] transform-[rotateY(calc(90deg*var(--i)))_rotateX(30deg)_translateZ(156px)]"
            style={cssVar("--i", i)}
          >
            <TreeOrnaments layerIndex={j} faceIndex={i} />
          </span>
        ))}
      </div>
    ))}
  </>
);

export default TreeLayers;
