import Image from "next/image";
function GetInTouchSection() {
  return (
    <section className="py-16 bg-light-blue-100 get-in-touch-section">
      <div className="container mx-auto px-4 pt-8 relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 md:pr-4">
            <h3 className="text-white headings font-bold text-5xl mb-5">
              Get in touch directly
            </h3>
            <div className="mb-5">
              <Image
                src="/icon1.png"
                height={60}
                width={60}
                className="inline-block mr-5"
              />
              <span className="text-white text-3xl">0113 397 1441</span>
            </div>
            <div className="mb-5">
              <Image
                src="/icon1.png"
                height={60}
                width={60}
                className="inline-block mr-5"
              />
              <span className="text-white text-3xl">
                info@accelerateteaching.co.uk
              </span>
            </div>
          </div>
          <div className="w-full md:w-2/5 md:pl-4">
            <Image src="/video-placeholder.jpg" height={500} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default GetInTouchSection;
