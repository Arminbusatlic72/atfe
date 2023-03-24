import Image from "next/image";

function Card({ recruiter }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 recruiter-card">
      <a href="#">
        <Image
          className="shadow rounded-full max-w-full h-auto align-middle border-none card__image"
          src="/img.jpg"
          alt="recruiter"
          height={80}
          width={80}
        />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {recruiter.testimonial}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recruiter.name}
        </h5>
        <span>{recruiter.position}</span>
      </div>
    </div>
  );
}
export default Card;
