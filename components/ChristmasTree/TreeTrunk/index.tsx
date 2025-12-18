import { faceIndices } from "@/constants/christmasTree";

import { cssVar } from "@/utils/cssVar";

const TreeTrunk = () => (
  <div className="absolute top-0 left-0 w-full h-full transform-3d">
    {faceIndices.map((i) => (
      <span
        key={i}
        aria-hidden="true"
        className="absolute top-[315px] left-[calc(50%-27px)] w-[54px] h-full bg-linear-to-r from-[#bb4622] to-[#df7214] origin-bottom border-b-10 border-b-[#00000055] transform-[rotateY(calc(90deg*var(--i)))_translateZ(27px)]"
        style={cssVar("--i", i)}
      />
    ))}
  </div>
);

export default TreeTrunk;
