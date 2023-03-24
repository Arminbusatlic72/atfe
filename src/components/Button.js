import Link from "next/link";

function Button({ label, color = "primary", type = "internal", url }) {
  const colorVariants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn-tertiary",
  };

  if (type === "external") {
    return (
      <a className={colorVariants[color]} href={url}>
        {label}
      </a>
    );
  } else {
    return (
      <Link className={colorVariants[color]} href={url}>
        {label}
      </Link>
    );
  }
}

export default Button;
