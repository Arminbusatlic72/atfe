import Slider from "./Slider";
function SliderSection() {
  const slides = [
    { title: "slide 1", location: "London", salary: "30-70 $ Per Day", setting: "SAN", id: 1 },
    { title: "slide 2", location: "Liverpool", salary: "100-110 $ Per Day", setting: "SAN", id: 2 },
    { title: "slide 3", location: "London", salary: "30-70 $ Per Day", setting: "SAN",id: 3 },
    { title: "slide 4", location: "London", salary: "30-70 $ Per Day", setting: "SAN",id: 4 },
    { title: "slide 5", location: "London", salary: "30-70 $ Per Day", setting: "SAN",id: 5 },
    { title: "slide 6", location: "London", salary: "30-70 $ Per Day", setting: "SAN",id: 6 }
  ];
  const sliderContainerStyles = {
    width: "100%",
    height: "500px",
    margin: "30px auto"
  };
  return (
    <section className="container mx-auto px-4 pt-8 text-center min-h-screen">
      <h2 className="text-black text-6xl heading">Latest Jobs</h2>
      <div className="slider-container" style={sliderContainerStyles}>
        <Slider slides={slides} />
      </div>
    </section>
  );
}
export default SliderSection;
