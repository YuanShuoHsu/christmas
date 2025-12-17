import {
  faceIndices,
  layerIndices,
  treeOrnamentsConfig,
} from "@/constants/christmasTree";

export type TreeOrnament = {
  id: string;
  layerIndex: (typeof layerIndices)[number];
  faceIndex: (typeof faceIndices)[number];
  x: number;
  y: number;
  size: number;
};

const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const randomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const createId = () => {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export const generateTreeOrnaments = (): TreeOrnament[] => {
  const ornaments: TreeOrnament[] = [];

  const {
    edgePadding,
    maxPerFace,
    minPerFace,
    sizeMax,
    sizeMin,
    triangleHalfWidth,
    triangleHeight,
    yMax,
    yMaxLimit,
    yMin,
  } = treeOrnamentsConfig;

  for (const layerIndex of layerIndices) {
    for (const faceIndex of faceIndices) {
      const perFaceCount = getRandomInt(minPerFace, maxPerFace);

      for (let index = 0; index < perFaceCount; index += 1) {
        const size = getRandomInt(sizeMin, sizeMax);

        const safeYMax = Math.min(yMaxLimit, yMax);
        const safeYMin = Math.min(yMin, safeYMax);

        const tMin = safeYMin / triangleHeight;
        const tMax = safeYMax / triangleHeight;
        const u = randomFloat(tMin * tMin, tMax * tMax);
        const t = Math.sqrt(u);
        const y = Math.round(t * triangleHeight);

        const maxHalfWidth = triangleHalfWidth * t - size / 2 - edgePadding;
        const x =
          maxHalfWidth <= 0
            ? 0
            : getRandomInt(-Math.floor(maxHalfWidth), Math.floor(maxHalfWidth));

        ornaments.push({
          id: createId(),
          layerIndex,
          faceIndex,
          x,
          y,
          size,
        });
      }
    }
  }

  return ornaments;
};
