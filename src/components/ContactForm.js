import Button from "./Button";
function ContactForm() {
  return (
    <form className="flex flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-6">
        <label htmlFor="name" className="block font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="border border-gray px-3 py-5 mb-4 w-full rounded-xl drop-shadow-lg"
        />
        <label htmlFor="telephone" className="block font-medium mb-2">
          Telephone
        </label>
        <input
          id="telephone"
          type="tel"
          name="telephone"
          className="border border-gray px-3 py-5 mb-4 w-full rounded-xl drop-shadow-lg"
        />
        <label htmlFor="email" className="block font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray px-3 py-5 mb-4 w-full rounded-xl drop-shadow-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <label htmlFor="comment" className="block font-medium mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          className="border border-gray px-3 py-5 mb-4 w-full rounded-xl h-40 drop-shadow-lg"
        ></textarea>
        <Button
          label="Submit"
          type="input"
          inputType="submit"
          color="secondary"
        />
      </div>
    </form>
  );
}
export default ContactForm;
