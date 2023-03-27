import Image from "next/image";
import Button from "./Button";
function StartYourJourneySection() {
  return (
    <section className="start-journey-section bg-red-100">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-gray-100 p-4">
            <Image
              src="/AT Website Components-16.png
            "
              width={500}
              height={500}
              alt="start-your-journey"
            />
          </div>
          <div className="w-full md:w-2/3 bg-gray-200 p-4">
            <h2 className="text-yellow-100 pb-8 font-headings pb-6 font-bold text-lg lg:text-2xl">
              Start your Accelerate journey today.
            </h2>
            <p className="text-white font-headings pb-8 font-light text-lg lg:text-2xl">
              In addition to our array of vacancies, we also provide helpful
              resources to help you land your dream teaching job.
            </p>
            <p className="text-white font-headings pb-8 font-light text-lg lg:text-2xl">
              Our specialist team offer cover letter writing tips, interview
              preparation guidance, and career advice from experienced educators
              and top tier CPD courses.
            </p>

            <Button label={"Send CV"} url={"/"} color={"tertiary"} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default StartYourJourneySection;
