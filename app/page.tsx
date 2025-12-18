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
    <main className="relative min-h-screen w-screen overflow-hidden bg-[#e8ffe8] flex flex-col justify-center items-center">
      <PhotoUploadControls />
      <div className="relative flex flex-col items-center">
        <ChristmasTree />
        <DisplayNameBanner />
      </div>
    </main>
  );
};

export default Home;
