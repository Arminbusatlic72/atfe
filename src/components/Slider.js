import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

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

  // Calculate the index range of slides to display
  const start = currentIndex;
  const end =
    start + slidesToShow - 1 >= slides.length
      ? slides.length - 1
      : start + slidesToShow - 1;
  const visibleSlides = slides.slice(start, end + 1);

  return (
    <div className="slider">
      <div className="slider__arrow--prev" onClick={goToPrevious}>
        <Image src="/icon-arrow-next.svg" width={30} height={30} />
      </div>
      <div className="slider__arrow--next" onClick={goToNext}>
        <Image src="/icon-arrow-prev.svg" width={30} height={30} />
      </div>

      {visibleSlides.map((slide) => (
        <div
          key={slide.id}
          className="max-w-sm p-6 bg-white border border-gray-300 rounded-3xl shadow dark:bg-gray-900 dark:border-gray-900 mx-5 card"
        >
          <a href="#">
            <div className="card__title-holder">
              <h5 className="card__title">{slide.title}</h5>
            </div>
          </a>
          <ul className="card__list">
            <li className="card-list__item">
              <Image
                src="/icon-location.svg"
                width={40}
                height={40}
                className="card__icon"
              />
              <div>
                <span className="card__span">Location:</span>
                {slide.location}
              </div>
            </li>
            <li className="card-list__item">
              <Image
                src="/icon-piggy.svg"
                width={40}
                height={40}
                className="card__icon"
              />
              <div>
                <span className="card__span">Salary:</span>
                {slide.salary}
              </div>
            </li>
            <li className="card-list__item">
              <Image
                src="/icon-house.svg"
                width={40}
                height={40}
                className="card__icon"
              />
              <div>
                <span className="card__span">Setting:</span>
                {slide.setting}
              </div>
            </li>
          </ul>
          <a href="#" className="btn-primary card__button">
            View Job
          </a>
        </div>
      ))}
    </div>
  );
};

export default Slider;
