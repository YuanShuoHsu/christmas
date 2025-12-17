import type { CSSProperties } from "react";

import styles from "./page.module.css";

const layerIndices = [0, 1, 2, 3] as const;
const faceIndices = [0, 1, 2, 3] as const;

const cssVar = (name: string, value: number) => {
  return { [name]: value } as CSSProperties;
};

export default function Home() {
  return (
    <main className={styles.stage}>
      <div className={styles.tree} role="img" aria-label="3D Christmas tree">
        {layerIndices.map((j) => (
          <div key={j} className={styles.top} style={cssVar("--j", j)}>
            {faceIndices.map((i) => (
              <span key={i} style={cssVar("--i", i)} aria-hidden="true" />
            ))}
          </div>
        ))}
        <div className={styles.bottom}>
          {faceIndices.map((i) => (
            <span key={i} style={cssVar("--i", i)} aria-hidden="true" />
          ))}
        </div>
        <span className={styles.shadow} aria-hidden="true" />
      </div>
    </main>
  );
}
