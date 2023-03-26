import Link from "next/link";

function Button({
  label,
  color = "primary",
  type = "internal",
  url,
  inputType,
  customClass
}) {
  const colorVariants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn-tertiary"
  };

  if (type === "external") {
    return (
      <a className={`${colorVariants[color]} ${customClass}`} href={url}>
        {label}
      </a>
    );
  } else if (type === "internal") {
    return (
      <Link className={`${colorVariants[color]} ${customClass}`} href={url}>
        {label}
      </Link>
    );
  } else if (type === "input") {
    return (
      <input
        type={inputType}
        className={`${colorVariants[color]} ${customClass}`}
        value={label}
      />
    );
  }
}

export default Button;
