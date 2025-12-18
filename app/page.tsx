"use client";

import { useEffect } from "react";

import ChristmasTree from "@/components/ChristmasTree";
import DisplayNameBanner from "@/components/DisplayNameBanner";
import PhotoUploadControls from "@/components/PhotoUploadControls";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";

const Home = () => {
  const clearPhoto = useChristmasTreeStore((state) => state.clearPhoto);

  useEffect(() => {
    return () => clearPhoto();
  }, [clearPhoto]);

  return (
    <main className="min-h-dvh flex flex-col bg-[#e8ffe8] overflow-hidden">
      <div className="relative flex-1 flex justify-center items-center">
        <ChristmasTree />
        <DisplayNameBanner />
      </div>
      <PhotoUploadControls />
    </main>
  );
};

export default Home;
