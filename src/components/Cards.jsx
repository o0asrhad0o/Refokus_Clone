import React from "react";
import Card from "./Card";

const card1 = [{
  width: "basis-1/3",
  upper1: "Up Next: News",
  upper2: "Insights and behind the scenes",
  lowerheading: "",
  islowerheading: false,
  lowerbutton: "",
  islowerbutton: false,
  lowerparagraph: "Explore what drives our team",
  islowerparagraph: true,
  hovercolor: "hover:bg-zinc-700"
},];

const card2 = [{
  width: "basis-2/3",
  upper1: "Get in Touch",
  upper2: "Let's get to it, together.",
  lowerheading: "Start a Project",
  islowerheading: true,
  lowerbutton: "Contact us",
  islowerbutton: true,
  lowerparagraph: "",
  islowerparagraph: false,
  hovercolor: "hover:bg-violet-600"
},];

function Cards() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto bg-zinc-900 py-32 flex gap-1">
        {card1.map((elem, index) => <Card key={index} val={elem}/>)}
        {card2.map((elem, index) => <Card key={index} val={elem}/>)}
      </div>
    </div>
  );
}

export default Cards;
