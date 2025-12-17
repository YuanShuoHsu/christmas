"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useChristmasTreeStore } from "@/providers/christmasTreeStoreProvider";

const PhotoUploadControls = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const displayName = useChristmasTreeStore((state) => state.displayName);
  const photoName = useChristmasTreeStore((state) => state.photoName);
  const photoUrl = useChristmasTreeStore((state) => state.photoUrl);
  const clearPhoto = useChristmasTreeStore((state) => state.clearPhoto);
  const randomizeOrnaments = useChristmasTreeStore(
    (state) => state.randomizeOrnaments,
  );
  const setDisplayName = useChristmasTreeStore((state) => state.setDisplayName);
  const setPhotoFromFile = useChristmasTreeStore(
    (state) => state.setPhotoFromFile,
  );
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
        <Input
          aria-label="名字"
          className="max-w-30"
          onChange={(event) => setDisplayName(event.currentTarget.value)}
          placeholder="輸入名字"
          type="text"
          value={displayName}
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
        <span className="text-sm">{photoName || "選一張圖片當裝飾"}</span>
      </div>
    </aside>
  );
};

export default PhotoUploadControls;
