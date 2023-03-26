import Image from "next/image";
function PillarsSection() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-8">
        <h2 className="text-6xl text-center">
          Our <span>3</span> Pillars
        </h2>
        <h4 className="text-center text-3xl headings">
          We like to think we’re different to every other agency out there,
          offering the same blanket service.
          <span className="text-light-blue"> We’d love to show you why</span>.
        </h4>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-gray-200 p-4">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/public/icon-man-learning.png"
                width={300}
                height={200}
                alt="Image 1"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Column 1 Title</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus quam id nibh posuere, id ullamcorper velit luctus. Donec
                faucibus nulla quis nisl interdum, vel rhoncus urna malesuada.{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-gray-300 p-4">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/icon-bulb.png"
                width={300}
                height={200}
                alt="Image 2"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Column 2 Title</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus quam id nibh posuere, id ullamcorper velit luctus. Donec
                faucibus nulla quis nisl interdum, vel rhoncus urna malesuada.{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-gray-400 p-4">
            <div className="mb-4 flex justify-center items-center">
              <Image
                src="/icon-house.png"
                width={300}
                height={200}
                alt="Image 3"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Column 3 Title</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus quam id nibh posuere, id ullamcorper velit luctus. Donec
                faucibus nulla quis nisl interdum, vel rhoncus urna malesuada.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PillarsSection;
