import React from "react";
import Button from "./Button";

function Product({ val, index, handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      className={`group relative w-full ${val.hoverColor} transition-all hover:scale-105 `}
    >
      <div className="max-w-screen-xl mx-auto py-10 group-hover:py-16 flex items-center justify-between gap-2 ">
        <h1 className=" text-white font-sans text-5xl capitalize font-medium text-center ">
          {val.title}
        </h1>

        <video
          className="window absolute opacity-0 group-hover:opacity-100 w-[27rem] h-[20rem] left-[44%] -top-[10%] -translate-x-[50%] rounded-lg transition-all object-cover overflow-hidden"
          autoPlay muted loop src={val.videourl}
        ></video>

        <div className="desc w-1/3">
          <p className="text-white text-[1vw] font-sans text-left mb-7 ">
            {val.description}
          </p>
          {val.isbuttonvisible && (
            <div className="flex gap-3">
              {val.islive === true && <Button title="Live Website" />}
              {val.caseStudy === true && <Button title="Case Study" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
// hover:bg-[${val.hoverColor}]
