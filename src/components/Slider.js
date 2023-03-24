import { useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderStyles = {
    height: "100%",
    width: "100%",
    display: "flex",
    position: "relative",
    border: "1px solid black"
  };
  const slideStyles = {
    height: "100%",
    width: "33%"
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    zIndex: "1",
    cursor: "pointer",
    color: "black"
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    zIndex: "1",
    cursor: "pointer",
    color: "black"
  };
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
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        Klick left
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        Klick Right
      </div>

      {visibleSlides.map((slide) => (
        <div
          key={slide.id}
          class="max-w-sm p-6 bg-white border border-gray-300 rounded-3xl shadow dark:bg-gray-900 dark:border-gray-900 mx-5 card"
        >
          <a href="#">
            <div className="card__title-holder">
              <h5 class="card__title">{slide.title}</h5>
            </div>
          </a>
          <ul>
            <li></li>
          </ul>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Slider;
