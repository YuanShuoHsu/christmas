"use client";

import TreeLayers from "@/components/ChristmasTree/TreeLayers";
import TreeShadow from "@/components/ChristmasTree/TreeShadow";
import TreeTrunk from "@/components/ChristmasTree/TreeTrunk";

const ChristmasTree = () => (
  <div
    aria-label="3D Christmas tree"
    className="relative top-[-135px] w-[270px] h-[270px] transform-3d before:content-['⭐'] before:absolute before:top-[-108px] before:left-[calc(50%-27px)] before:text-[3.6em] transform-[rotateX(-20deg)_rotateY(30deg)] animate-tree-spin motion-reduce:animate-none"
    role="img"
  >
    <TreeLayers />
    <TreeTrunk />
    <TreeShadow />
  </div>
);

export default ChristmasTree;
