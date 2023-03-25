import React from "react";
import Image from "next/image";

function Hero({ backgroundImage, headingText }) {
  return (
    <div
      className="relative h-96"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-4xl font-bold">{headingText}</h2>
      </div>
    </div>
  );
}

export default Hero;
