import Image from "next/image";
function AboutTeachingJobs() {
  return (
    <section className="bg-gray">
      <div className="container mx-auto px-4 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1 bg-gray-100 p-4 pt-0">
            <Image
              src="/about-teaching-jobs.png"
              width={500}
              height={500}
              className="relative -bottom-11"
            />
          </div>
          <div className="md:col-span-1 bg-gray-200 p-4 flex flex-col justify-center">
            <h3 className="text-red-100 py-6 text-4xl  mb-5 font-bold font-headings">
              Are you passionate about the education and looking for rewarding
              career in teaching?
            </h3>
            <p>
              Look no further! We’re here to help you navigate the challenging
              job market and find the perfect teaching job that suits your
              qualifications and interests.
            </p>
            <p>
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
