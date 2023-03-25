import JobDetailsCard from "./JobDetailsCard";

function ApplySection() {
  return (
    <section className="apply-section relative">
      <div className="container mx-auto px-4 pt-8 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="md:col-span-1 bg-gray-100 p-4 absolute">
            <JobDetailsCard />
          </div>
          <div class="md:col-span-1 bg-gray-200 p-4">Column 2 content</div>
        </div>
      </div>
    </section>
  );
}

export default ApplySection;
