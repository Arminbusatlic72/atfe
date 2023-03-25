import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroVideo = ({ videoSrc, imageSrc }) => {
  imageSrc = "/img.jpg";
  videoSrc = "/video.mp4";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(
      Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    );
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center py-0 px-3">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {isMobile ? (
          <Image src={imageSrc} alt="Image" width={600} height={600} />
        ) : (
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="video-content space-y-2">
        <h1 className="font-light text-6xl heading text-white font-extrabold">
          Inspire. Educate. Accelerate
        </h1>
      </div>
    </section>
  );
};

export default HeroVideo;
