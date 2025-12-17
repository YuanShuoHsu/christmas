"use client";

import { useEffect } from "react";

import ChristmasTree from "@/components/ChristmasTree";
import PhotoUploadControls from "@/components/PhotoUploadControls";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";

const Home = () => {
  const clearPhoto = useChristmasTreeStore((state) => state.clearPhoto);

  useEffect(() => {
    return () => clearPhoto();
  }, [clearPhoto]);

  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-[#e8ffe8] flex justify-center items-center">
      <PhotoUploadControls />
      <ChristmasTree />
    </main>
  );
};

export default Home;
