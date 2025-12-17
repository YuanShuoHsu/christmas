import { faceIndices, layerIndices } from "@/constants/christmasTree";

import { cssVar } from "@/utils/cssVar";

const Home = () => (
  <main className="min-h-screen w-screen overflow-hidden bg-[#e8ffe8] flex justify-center items-center">
    <div
      className="relative top-[-150px] w-[300px] h-[300px] transform-3d before:content-['⭐'] before:absolute before:top-[-120px] before:left-[calc(50%-30px)] before:text-[4em] transform-[rotateX(-20deg)_rotateY(30deg)] animate-tree-spin motion-reduce:animate-none"
      role="img"
      aria-label="3D Christmas tree"
    >
      {layerIndices.map((j) => (
        <div
          key={j}
          className="absolute top-0 left-0 w-full h-full transform-3d transform-[translateY(calc(100px*var(--j)))]"
          style={cssVar("--j", j)}
        >
          {faceIndices.map((i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#69c069] to-[#77dd77] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] origin-bottom border-b-10 border-b-[#00000019] transform-[rotateY(calc(90deg*var(--i)))_rotateX(30deg)_translateZ(173px)]"
              style={cssVar("--i", i)}
            />
          ))}
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-full transform-3d">
        {faceIndices.map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute top-[350px] left-[calc(50%-30px)] w-[60px] h-full bg-linear-to-r from-[#bb4622] to-[#df7214] origin-bottom border-b-10 border-b-[#00000055] transform-[rotateY(calc(90deg*var(--i)))_translateZ(30px)]"
            style={cssVar("--i", i)}
          />
        ))}
      </div>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#0002] transform-3d transform-[rotateX(90deg)_translateZ(-500px)] blur-[20px]"
      />
    </div>
  </main>
);

export default Home;
