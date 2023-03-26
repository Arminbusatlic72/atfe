import EnquiryForm from "./EnquiryForm";
function EnquiryFormSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 pt-0">
        <h2 className="text-red-100 text-6xl mb-5 font-extrabold text-center refer-section__heading">
          Have an enquiry?
        </h2>
        <p className="mb-14 text-black text-center font-headings text-lg lg:text-2xl">
          Get in touch below.
        </p>
        <EnquiryForm />
      </div>
    </section>
  );
}
export default EnquiryFormSection;
