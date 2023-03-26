import Image from "next/image";
function PillarsSection() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-8">
        <h2 className="text-6xl text-center text-light-blue-100 font-bold headings">
          Our <span className="text-red-100 text-8xl relative top-3">3</span>{" "}
          Pillars
        </h2>
        <h4 className="text-center text-3xl headings">
          We like to think we’re different to every other agency out there,
          offering the same blanket service.
          <span className="text-light-blue-100">
            {" "}
            We’d love to show you why
          </span>
          .
        </h4>
        <div className="flex flex-col md:flex-row pt-24">
          <div className="w-full md:w-1/3 bg-gray-200 p-8 text-center">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/icon-man-learning.png"
                width={100}
                height={100}
                alt="Image 1"
              />
            </div>
            <div>
              <p className="text-3xl text-gray-700">Fair pay for teachers</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-gray-300 p-8 text-center">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/icon-bulb.png"
                width={100}
                height={100}
                alt="Image 2"
              />
            </div>
            <div>
              <p className="text-3xl text-gray-700">
                Better outcomes for everyone
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-gray-400 p-8 text-center">
            <div className="mb-4 flex justify-center px-8 items-center">
              <Image
                src="/icon-house.png"
                width={100}
                height={100}
                alt="Image 3"
              />
            </div>
            <div>
              <p className="text-3xl text-gray-700">Lower costs for schools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PillarsSection;
