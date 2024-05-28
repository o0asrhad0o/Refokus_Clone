import React, { useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setproducts] = useState([
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      isbuttonvisible: false,
      islive: true,
      caseStudy: false,
      hoverColor: "hover:bg-[#030472]",
      videourl: "../src/assets/TTR project video 4_3_H.264.webm",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      isbuttonvisible: false,
      islive: true,
      caseStudy: false,
      hoverColor: "hover:bg-[#3831A5]",
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      isbuttonvisible: false,
      islive: true,
      caseStudy: false,
      hoverColor: "hover:bg-[#19824A]",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      isbuttonvisible: false,
      islive: true,
      caseStudy: true,
      hoverColor: "hover:bg-[#312579]",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      isbuttonvisible: false,
      islive: true,
      caseStudy: true,
      hoverColor: "hover:bg-[#FF7254]",
    },
  ]);

  const handleMouseEnter = (index) => {


    setproducts((prevProducts) =>
      prevProducts.map((product, ind) => ({
        ...product,
        isbuttonvisible: true,
      }))
    );
  };

  const handleMouseLeave = (index) => {

    setproducts((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        isbuttonvisible: false,
      }))
    );
  };


  return (
    <div className="w-full relative mt-10 overflow-hidden">
      {products.map((prod, index) => {
        return (
          <Product key={index} index={index} val={prod} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
        );
      })}
      {/* <div className=" absolute w-full h-full top-0 pointer-events-none">
      <div className="window absolute w-[25rem] h-[18rem] bg-sky-100 left-[44%] -top-[2%] -translate-x-[50%]">
        <div className="w-full h-full bg-sky-300"></div>
        
      </div>
    </div> */}
    </div>
  );
}
export default Products;
