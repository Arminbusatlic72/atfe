import Button from "./Button";
function ReferSection() {
  return (
    <>
      <Button
        color="primary"
        label="View Job"
        url="/"
        customClass="card__button"
      />
      <Button color="secondary" label="View Job" type="internal" url="/" />
      <Button color="tertiary" label="View Job" type="internal" url="/" />
    </>
  );
}

export default ReferSection;
