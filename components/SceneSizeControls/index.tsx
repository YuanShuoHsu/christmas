"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useSceneStore } from "@/providers/sceneStoreProvider";

const SceneSizeControls = () => {
  const sceneScale = useSceneStore((state) => state.sceneScale);
  const increaseSceneScale = useSceneStore((state) => state.increaseSceneScale);
  const decreaseSceneScale = useSceneStore((state) => state.decreaseSceneScale);

  const scalePercent = Math.round(sceneScale * 100);

  return (
    <aside aria-label="場景大小控制" className="p-4">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border/50 bg-background/70 p-4 shadow-lg backdrop-blur">
        <Button
          aria-label="縮小場景"
          onClick={decreaseSceneScale}
          size="sm"
          type="button"
          variant="outline"
        >
          <Minus />
          縮小
        </Button>
        <Button
          aria-label="放大場景"
          onClick={increaseSceneScale}
          size="sm"
          type="button"
          variant="outline"
        >
          <Plus />
          放大
        </Button>
        <span className="text-sm tabular-nums text-muted-foreground">
          {scalePercent}%
        </span>
      </div>
    </aside>
  );
};

export default SceneSizeControls;

