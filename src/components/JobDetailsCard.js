import Image from "next/image";
function JobDetailsCard() {
  return (
    <div className="p-10 bg-white job-details-card">
      <h4 className="text-3xl mb-5">Job Details</h4>
      <div className="block max-w-sm p-6 bg-gray shadow hover:bg-gray-100">
        <ul className="job-details-card__list">
          <li className="job-details-card-list__item">
            <Image
              src="/icon-location.svg"
              width={40}
              height={40}
              alt="icon-location"
              className="card__icon"
            />
            <div>Huddersfield, Yorkshire.</div>
          </li>
          <li className="job-details-card-list__item">
            <Image
              src="/icon-piggy.svg"
              width={40}
              height={40}
              alt="icon-piggy"
              className="card__icon"
            />
            <div>£75 - £90</div>
          </li>
          <li className="job-details-card-list__item">
            <Image
              src="/icon-piggy.svg"
              width={40}
              height={40}
              alt="icon-piggy"
              className="card__icon"
            />
            <div>Temporary</div>
          </li>
          <li className="job-details-card-list__item">
            <Image
              src="/icon-house.svg"
              width={40}
              height={40}
              alt="icon-house"
              className="card__icon"
            />
            <div>Primary</div>
          </li>
          <li className="job-details-card-list__item">
            Job reference - 0000000
          </li>
        </ul>
      </div>
    </div>
  );
}
export default JobDetailsCard;
