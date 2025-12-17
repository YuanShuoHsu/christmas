"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useChristmasTreeStore } from "@/stores/christmasTreeStore";

const PhotoUploadControls = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    clearPhoto,
    photoName,
    photoUrl,
    randomizeOrnaments,
    setPhotoFromFile,
  } = useChristmasTreeStore();

  const hasPhoto = Boolean(photoUrl);

  return (
    <aside
      aria-label="聖誕樹控制面板"
      className="absolute left-0 bottom-0 z-10 p-4"
    >
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border/50 bg-background/70 p-4 shadow-lg backdrop-blur">
        <Input
          className="sr-only"
          onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            if (!file) return;
            setPhotoFromFile(file);
          }}
          ref={inputRef}
          type="file"
        />
        <Button
          onClick={() => inputRef.current?.click()}
          size="sm"
          type="button"
          variant="outline"
        >
          上傳照片
        </Button>
        {hasPhoto ? (
          <Button
            onClick={randomizeOrnaments}
            size="sm"
            type="button"
            variant="outline"
          >
            重新隨機
          </Button>
        ) : null}
        {hasPhoto ? (
          <Button
            onClick={() => {
              clearPhoto();
              if (inputRef.current) inputRef.current.value = "";
            }}
            size="sm"
            type="button"
            variant="outline"
          >
            清除
          </Button>
        ) : null}
        <span className={"text-sm"}>{photoName || "選一張圖片當裝飾"}</span>
      </div>
    </aside>
  );
};

export default PhotoUploadControls;
