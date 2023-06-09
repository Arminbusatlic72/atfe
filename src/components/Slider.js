import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
const Slider = ({ slides }) => {
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
        <Image src="/icon-arrow-next.svg" width={30} height={30} />
      </div>
      <div className="slider__arrow--next" onClick={goToNext}>
        <Image src="/icon-arrow-prev.svg" width={30} height={30} />
      </div>

      {visibleSlides.map((slide) => (
        <div
          key={slide.id}
          className="p-6 bg-gray rounded-3xl shadow mx-5 card"
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
          <Button
            url={"/"}
            label={"View Job"}
            color={"primary"}
            customClass={"card__button"}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
