import Image from "next/image";
function JobDetailsCard() {
  return (
    <div className="job-details-card">
      <h4>Job Details</h4>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <ul className="card__list">
          <li className="card-list__item">
            <Image
              src="/icon-location.svg"
              width={40}
              height={40}
              className="card__icon"
            />
            <div>hi</div>
          </li>
          <li className="card-list__item">
            <Image
              src="/icon-piggy.svg"
              width={40}
              height={40}
              className="card__icon"
            />
            <div>hi</div>
          </li>
          <li className="card-list__item">
            <Image
              src="/icon-house.svg"
              width={40}
              height={40}
              className="card__icon"
            />
            <div>hi</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default JobDetailsCard;
