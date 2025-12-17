import type { CSSProperties } from "react";

export const cssVar = (name: string, value: number | string) =>
  ({ [name]: value }) as CSSProperties;
