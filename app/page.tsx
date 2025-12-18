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
      <section
        className="relative flex-1 flex justify-center items-center transition-transform duration-200 will-change-transform"
        style={{
          transform: `scale(${sceneScale})`,
          transformOrigin: "center",
        }}
      >
        <ChristmasTree />
        <DisplayNameBanner />
      </section>
      <aside
        aria-label="控制面板"
        className="p-4 w-full max-w-5xl flex justify-center items-stretch gap-4"
      >
        <PhotoUploadControls />
        <SceneSizeControls />
      </aside>
    </main>
  );
};

export default Home;
