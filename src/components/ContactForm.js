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
          className="border border-gray-400 px-3 py-2 mb-4 w-full"
        />
        <label htmlFor="telephone" className="block font-medium mb-2">
          Telephone
        </label>
        <input
          id="telephone"
          type="tel"
          name="telephone"
          className="border border-gray-400 px-3 py-2 mb-4 w-full"
        />
        <label htmlFor="email" className="block font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray-400 px-3 py-2 mb-4 w-full"
        />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <label htmlFor="comment" className="block font-medium mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          className="border border-gray-400 px-3 py-2 mb-4 w-full h-40"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ContactForm;
