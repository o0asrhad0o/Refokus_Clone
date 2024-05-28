import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "53%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "48%",
      left: "54%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "40%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "45%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 4:
        imagesShow([]);
        break;
      case 5:
        imagesShow([0]);
        break;
      case 6:
        imagesShow([0, 1]);
        break;
      case 7:
        imagesShow([0, 1, 2]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3]);
        break;
      case 9:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 10:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-white text-[30vw] font-sans font-medium select-none leading-none tracking-tight overflow-hidden">
          work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map((elem, index) => {
            return (
              elem.isActive && (
                <img 
                  key = {index}
                  style={{ top: elem.top, left: elem.left }}
                  className="absolute h-60 rounded-lg top-[${elem.top}] left-[${elem.top}] -translate-x-[50%] -translate-y-[50%]`}"
                  src={elem.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
