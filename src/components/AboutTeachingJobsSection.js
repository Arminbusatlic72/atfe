import Image from "next/image";
function AboutTeachingJobs() {
  return (
    <section className="bg-gray-400">
      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1 bg-gray-100 p-4">
            <Image src="/about-teaching-jobs.png" width={500} height={500} />
          </div>
          <div className="md:col-span-1 bg-gray-200 p-4">
            <h3 className="text-red px-6 mb-5 font-bold">
              Are you passionate about the education and looking for rewarding
              career in teaching?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nisl libero, suscipit faucibus laoreet ac, condimentum sit amet
              enim. Sed ullamcorper facilisis ex, posuere vulputate veli
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutTeachingJobs;
