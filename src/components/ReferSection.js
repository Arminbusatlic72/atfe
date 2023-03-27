import Button from "./Button";
import Image from "next/image";
function ReferSection() {
  return (
    <section className="refer-section">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-light-blue-100 text-6xl mb-5 font-bold refer-section__heading">
              Reffear a friend
            </h2>
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
            <p className="text-light-blue-100 font-bold mb-5">Lorem ipsum</p>
            <Button label={"Start Refering"} url={"/"} color={"tertiary"} />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/ATrefer-friend.png"
              width={500}
              height={500}
              style={{
                width: 500,
                height: 500
              }}
              alt="refer-friend"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferSection;
