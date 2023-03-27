import { useState, useEffect } from "react";
import Image from "next/image";

const MeetOurTeamSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [visibleSlides, setVisibleSlides] = useState([]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the window object is defined
      if (typeof window !== "undefined") {
        const newSlidesToShow = window.innerWidth >= 768 ? 3 : 1;
        setSlidesToShow(newSlidesToShow);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial number of slides to show
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const endIndex = currentIndex + slidesToShow;
    if (endIndex > slides.length) {
      setVisibleSlides([
        ...slides.slice(currentIndex),
        ...slides.slice(0, endIndex % slides.length)
      ]);
    } else {
      setVisibleSlides(slides.slice(currentIndex, endIndex));
    }
  }, [currentIndex, slides, slidesToShow]);

  return (
    <div className="slider">
      <div className="slider__arrow--prev" onClick={goToPrevious}>
        <Image
          src="/icon-arrow-next.svg"
          width={30}
          height={30}
          alt="icon-arrow"
          style={{
            width: 30,
            height: 30
          }}
        />
      </div>
      <div className="slider__arrow--next" onClick={goToNext}>
        <Image
          src="/icon-arrow-prev.svg"
          width={30}
          height={30}
          alt="icon-arrow"
          style={{
            width: 30,
            height: 30
          }}
        />
      </div>

      {visibleSlides.map((slide) => (
        <div
          key={slide.id}
          className="p-6 bg-red-100 text-center meet-our-team-slider-card relative"
        >
          <Image
            src={slide.img.startsWith("/") ? slide.img : `/${slide.img}`}
            width={500}
            height={500}
            alt="profile-image"
            className="rounded-full mb-5"
          />

          <a
            href="{slide.linkedin}"
            className="meet-our-team-slider-card__link"
          >
            <Image
              src="/ATmeetOurTeamLinkedin.png"
              width={100}
              height={100}
              alt="linkedin"
              style={{
                width: 100,
                height: 100
              }}
            />
          </a>

          <div className="text-center meet-our-team-slider-card__title-holder">
            <h5 className="text-orange headings text-bold text-3xl meet-our-team-slider-card__name">
              {slide.name}
            </h5>
            <h6 className="text-white text-bold headings text-2xl meet-our-team-slider-card__position">
              {slide.position}
            </h6>
          </div>
          <a
            href="`mailto:${slide.email}`"
            className="text-white headings text-bold text-2xl"
          >
            {slide.email}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MeetOurTeamSlider;
