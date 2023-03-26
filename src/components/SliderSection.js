import Slider from "./Slider";
import Button from "./Button";
function SliderSection() {
  const slides = [
    {
      title: "slide 1",
      location: "London",
      salary: "30-70 $ Per Day",
      setting: "SAN",
      id: 1
    },
    {
      title: "slide 2",
      location: "Liverpool",
      salary: "100-110 $ Per Day",
      setting: "SAN",
      id: 2
    },
    {
      title: "slide 3",
      location: "London",
      salary: "30-70 $ Per Day",
      setting: "SAN",
      id: 3
    },
    {
      title: "slide 4",
      location: "London",
      salary: "30-70 $ Per Day",
      setting: "SAN",
      id: 4
    },
    {
      title: "slide 5",
      location: "London",
      salary: "30-70 $ Per Day",
      setting: "SAN",
      id: 5
    },
    {
      title: "slide 6",
      location: "London",
      salary: "30-70 $ Per Day",
      setting: "SAN",
      id: 6
    }
  ];

  return (
    <section className="container mx-auto px-4 text-center slider-section">
      <h2 className="text-black text-6xl slider-section__heading">
        Latest Jobs
      </h2>
      <div className="slider-container">
        <Slider slides={slides} />
        <Button url={"/"} label={"View more"} color={"secondary"} />
      </div>
    </section>
  );
}
export default SliderSection;
