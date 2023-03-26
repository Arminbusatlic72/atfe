import Image from "next/image";
function AboutTeachingJobs() {
  return (
    <section className="bg-gray">
      <div className="container mx-auto px-4 pt-0">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="p-4 pt-0">
            <Image
              src="/about-teaching-jobs.png"
              width={500}
              height={500}
              className="relative -bottom-11"
            />
          </div>
          <div className="p-4 flex flex-col justify-center teaching-jobs-section__about-right">
            <h3 className="text-red-100 py-3 mb-5 font-200 font-headings font-bold teaching-jobs-section__about-header">
              Are you passionate about education and looking for a rewarding
              career in teaching?
            </h3>
            <p className="font-headings pb-8 font-light text-lg lg:text-2xl">
              <span class="font-bold">Look no further!</span> We're here to help
              you navigate the challenging job market and find the perfect
              teaching job that suits your qualifications and interests.
            </p>
            <p className="font-headings font-light text-lg lg:text-2xl pb-8">
              Here at Accelerate Teaching, we connect aspiring teachers with
              schools, colleges, and other educational institutions in Leeds and
              the surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutTeachingJobs;
