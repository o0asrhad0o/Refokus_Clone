import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1.2px] border-zinc-700  ">
      <div className="nleft flex gap-20 items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={index}
                className="text-sm text-white flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full "
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <div className="nright">
        <Button />
      </div>
    </div>
  );
}

export default Nav;
