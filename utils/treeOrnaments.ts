import { faceIndices, layerIndices } from "@/constants/christmasTree";

export type TreeOrnament = {
  id: string;
  layerIndex: (typeof layerIndices)[number];
  faceIndex: (typeof faceIndices)[number];
  x: number;
  y: number;
  size: number;
};

const randomInt = (min: number, max: number) => {
  const safeMin = Math.ceil(min);
  const safeMax = Math.floor(max);
  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
};

const createId = () => {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const generateTreeOrnaments = (): TreeOrnament[] => {
  const minCount = 50;
  const maxCount = 100;
  const count = randomInt(minCount, maxCount);

  const ornaments: TreeOrnament[] = [];

  for (let index = 0; index < count; index += 1) {
    const layerIndex = layerIndices[randomInt(0, layerIndices.length - 1)];
    const faceIndex = faceIndices[randomInt(0, faceIndices.length - 1)];

    const size = randomInt(28, 52);

    const yMin = 20 + layerIndex * 10;
    const yMax = 140 + layerIndex * 35;
    const y = randomInt(yMin, Math.min(260, yMax));

    const triangleT = y / 300;
    const maxHalfWidth = 150 * triangleT - size / 2 - 6;
    const x = maxHalfWidth <= 0 ? 0 : randomInt(-maxHalfWidth, maxHalfWidth);

    ornaments.push({
      id: createId(),
      layerIndex,
      faceIndex,
      x,
      y,
      size,
    });
  }

  return ornaments;
};
