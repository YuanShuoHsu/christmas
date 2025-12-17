"use client";

import TreeLayers from "@/components/ChristmasTree/TreeLayers";
import TreeShadow from "@/components/ChristmasTree/TreeShadow";
import TreeTrunk from "@/components/ChristmasTree/TreeTrunk";

const ChristmasTree = () => (
  <div
    aria-label="3D Christmas tree"
    className="relative top-[-150px] w-[300px] h-[300px] transform-3d before:content-['⭐'] before:absolute before:top-[-120px] before:left-[calc(50%-30px)] before:text-[4em] transform-[rotateX(-20deg)_rotateY(30deg)] animate-tree-spin motion-reduce:animate-none"
    role="img"
  >
    <TreeLayers />
    <TreeTrunk />
    <TreeShadow />
  </div>
);

export default ChristmasTree;
