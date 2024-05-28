import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

function Card({ val }) {
  return (
    <div
      className={`group text-white h-[60vh] ${val.width} p-5 bg-zinc-800 rounded-lg flex flex-col justify-between gap-[20vh] ${val.hovercolor} transition-colors`}
    >
      <div className="upper-card  group-hover:scale-95 transition-all">
        <div className="flex items-center justify-between text-sm mb-8">
          <h3>{val.upper1}</h3>
          <MdArrowRightAlt />
        </div>

        <h2 className="w-[20vw] text-2xl">{val.upper2}</h2>
      </div>

      <div className="lower-card">
        {val.islowerheading === true && (
          <div className="lower-up text-[5vw] font-medium">
            {val.lowerheading}
          </div>
        )}
        <div className="lower-down">
          {val.islowerbutton === true && (
            <button className="px-5 py-3 border-[1.2px] font-semibold border-white text-md rounded-3xl hover:bg-white hover:text-violet-600 transition-colors">
              {val.lowerbutton}
            </button>
          )}
          {val.islowerparagraph === true && (
            <p className="text-sm text-zinc-300">{val.lowerparagraph}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
