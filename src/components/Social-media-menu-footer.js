import Image from "next/image";
import Link from "next/link";

function SocialMediaMenu() {
  const socialMedia = [
    { url: "/", icon: "/icon-insta.svg" },
    { url: "/", icon: "/icon-fb.svg" }
  ];

  return (
    <ul className="flex footer-menu__nav-list">
      {socialMedia.map((socialMedia, i) => (
        <li key={i} className="flex item-center px-2 content-center">
          <Link href={socialMedia.url} passHref>
            <Image src={socialMedia.icon} width={30} height={30} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaMenu;
