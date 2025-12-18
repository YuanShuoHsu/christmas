"use client";

import { useEffect } from "react";

import ChristmasTree from "@/components/ChristmasTree";
import DisplayNameBanner from "@/components/DisplayNameBanner";
import PhotoUploadControls from "@/components/PhotoUploadControls";
import SceneSizeControls from "@/components/SceneSizeControls";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";
import { useSceneStore } from "@/providers/sceneStoreProvider";

const Home = () => {
  const clearPhoto = useChristmasTreeStore((state) => state.clearPhoto);
  const sceneScale = useSceneStore((state) => state.sceneScale);

  useEffect(() => {
    return () => clearPhoto();
  }, [clearPhoto]);

  return (
    <main className="min-h-dvh flex flex-col bg-[#e8ffe8] overflow-hidden">
      <div
        className="relative flex-1 flex justify-center items-center transition-transform duration-200 will-change-transform"
        style={{
          transform: `scale(${sceneScale})`,
          transformOrigin: "center",
        }}
      >
        <ChristmasTree />
        <DisplayNameBanner />
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2">
        <PhotoUploadControls />
        <SceneSizeControls />
      </div>
    </main>
  );
};

export default Home;
