import Logo from "./Logo";
// import SocialMediaMenu from "./Social-media-menu-footer";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="mx-auto w-full container p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Logo
                src="/sign-white.svg"
                alt="Act Logo"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="mb-6 md:mb-0 flex justify-center content-center">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-white">Follow us on social media</h4>
            <a href="/" className="flex items-center">
              {/* <SocialMediaMenu /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
