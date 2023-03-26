function TeachingJobsSection() {
  return (
    <section className="teaching-jobs-section relative">
      <div className="container mx-auto px-4 pt-8">
        <h2 className="text-light-blue text-6xl text-center mb-5 teaching-jobs-section__heading">
          Teaching Jobs
        </h2>
        <h4 className="text-center mb-5">
          Whether you are an early career teacher or an experienced educator,
          there are a range of opportunities for you.
        </h4>
        <div className="md:flex md:flex-row md:space-x-4">
          <div className="md:w-1/2 bg-gray-100 p-4">
            <label htmlFor="input1" className="font-extrabold">
              I am looking for a...
            </label>
            <select
              id="input1"
              name="input1"
              className="w-full block appearance-none bg-white border border-gray drop-shadow-lg rounded-xl p-2 pr-8 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 teaching-jobs-section__input"
              placeholder="Teaching assistant"
            >
              <option value="option1">Teaching assistant</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="md:w-1/2 bg-gray-200 p-4">
            <label htmlFor="input2" className="font-extrabold">
              Role in...
            </label>
            <select
              id="input2"
              name="input2"
              className="w-full block appearance-none bg-white border border-gray drop-shadow-lg rounded-xl p-2 pr-8 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 teaching-jobs-section__input"
              placeholder="Primary schools"
            >
              <option value="option1">Primary schools</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeachingJobsSection;
