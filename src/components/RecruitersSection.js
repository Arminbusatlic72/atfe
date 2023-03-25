import Card from "./RecruiterSectionCard";
import Button from "./Button";
function RecruiterSection() {
  const recruiters = [
    {
      name: "John Doe",
      position: "Recruiter",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      //   imgSrc: "/img.jpg"
    },
    {
      name: "Jane Doe",
      position: "Recruiter",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      //   imgSrc: "/img.jpg"
    },
    {
      name: "Greg Doe",
      position: "Recruiter",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      //   imgSrc: "/img.jpg"
    }
  ];
  return (
    <section className="recruiters-section">
      <div className="container mx-auto px-4 pt-8">
        <h2 className="text-white text-6xl text-center recruiter-section__heading">
          5* Recruiters
        </h2>
        <h3 className="text-center recruiter-section__subheading">
          Here is your prove
        </h3>
        <div className="flex mx-auto justify-between flex-wrap recruiter-section__card-holder">
          {recruiters.map((recruiter) => (
            <Card key={recruiter.name} recruiter={recruiter} />
          ))}
        </div>
        <div className="container text-center mb-5">
          <Button
            label={"Accelerate your journey"}
            url={"/"}
            color={"tertiary"}
          />
        </div>
      </div>
    </section>
  );
}
export default RecruiterSection;
