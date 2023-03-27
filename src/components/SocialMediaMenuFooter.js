import Image from "next/image";
import Link from "next/link";

function SocialMediaMenu() {
  const socialMedia = [
    { url: "/", icon: "/icon-insta.svg" },
    { url: "/", icon: "/icon-fb.svg" },
    { url: "/", icon: "/icon-linkedin.svg" }
  ];

  return (
    <ul className="flex footer-menu__nav-list">
      {socialMedia.map((socialMedia, i) => (
        <li key={i} className="flex item-center px-4 content-center">
          <Link href={socialMedia.url}>
            <Image src={socialMedia.icon} width={40} height={40} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaMenu;
