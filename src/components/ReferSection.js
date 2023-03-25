import Button from "./Button";
function ReferSection() {
  return (
    <section className="refer-section">
      <div className="containermx-auto px-4 pt-8 text-center">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2">
            <h2>Reffear a friend</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
            <Button label={"Start Refering"} url={"/"} color={"tertiary"} />
          </div>
          <div class="w-full md:w-1/2">Column 2 content</div>
        </div>
      </div>
    </section>
  );
}

export default ReferSection;
