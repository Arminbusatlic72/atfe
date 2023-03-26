import React from "react";
import Image from "next/image";

function Hero({ backgroundImage, headingTextHighlighted, headingText }) {
  return (
    <div class="relative">
      <img
        className="md:aspect-[70/30] aspect-square object-cover"
        src={backgroundImage}
        alt="Image of a girl"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-5xl md:text-7xl font-bold font-headings">
          <span className="hero-section__highlighted">
            {headingTextHighlighted}
          </span>{" "}
          {headingText}
        </h2>
      </div>
    </div>
  );
}

export default Hero;
