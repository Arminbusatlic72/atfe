import JobDetailsCard from "./JobDetailsCard";
import Button from "./Button";

import Image from "next/image";
function ApplySection() {
  return (
    <section className="apply-section">
      <Image src="/ATJobsHero.jpg" width={1600} height={500} alt="jobs-hero" />
      <div className="container mx-auto px-4 pt-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1 bg-gray-100 p-4">
            <JobDetailsCard />
          </div>
          <div className="md:col-span-1 bg-gray-200 p-4">
            <p>
              Attention all aspiring Teaching Assistants in Wakefield! Are you
              passionate about helping pupils reach their full potential in
              numeracy? We are seeking a talented and dedicated TA to support
              students in Key Stages 3 and 4 at a Secondary School in Wakefield.
              As a TA in this Secondary school, you will play a critical role in
              helping pupils develop a strong foundation in numeracy and prepare
              for their GCSE exams. You will work closely with teachers to
              provide individual and small group support, as well as helping to
              plan and deliver engaging lessons that make math more accessible
              and enjoyable.
            </p>
            <p className="font-bold">The ideal candidate will have</p>
            <ul>
              <li>
                Strong numeracy skills and a good understanding of the national
                curriculum for Key Stages 3 and 4
              </li>
              <li>
                The ability to explain mathematical concepts clearly and
                concisely
              </li>
              <li>
                Patience, empathy and a genuine interest in helping pupils
                succeed
              </li>
              <li>
                Experience of working in a school setting or with young people
              </li>
            </ul>
            <Button label={"Apply"} color={"secondary"} url={"/"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplySection;
