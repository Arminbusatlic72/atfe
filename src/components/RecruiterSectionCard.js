import Image from "next/image";

function RecruiterSectionCard({ recruiter }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 recruiter-card">
      <a href="#">
        <Image
          className="shadow rounded-full max-w-full h-auto align-middle border-none recruiter-card__image"
          src="/img.jpg"
          alt="recruiter"
          height={80}
          width={80}
          style={{
            width: 80,
            height: 80
          }}
        />
      </a>
      <div className="p-5 mt-10">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 recruiter-card__testimonial">
          {recruiter.testimonial}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-100 recruiter-card__name">
          {recruiter.name}
        </h5>
        <span>{recruiter.position}</span>
      </div>
    </div>
  );
}
export default RecruiterSectionCard;
