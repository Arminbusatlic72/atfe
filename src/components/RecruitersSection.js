import Card from "./RecruiterSectionCard";
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
    <section className="container mx-auto px-4 pt-8">
      <h2 className="text-black text-6xl slider-section__heading text-center">
        Recruiters
      </h2>
      <div>
        {recruiters.map((recruiter) => (
          <Card key={recruiter.name} recruiter={recruiter} />
        ))}
      </div>
    </section>
  );
}
export default RecruiterSection;
