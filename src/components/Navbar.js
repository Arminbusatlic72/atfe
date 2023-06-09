import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
const samplePageLinks = [
  { text: "Teaching Jobs", url: "/teaching-jobs", id: 1 },
  { text: "TA Jobs", url: "/ta-jobs", id: 2 },
  { text: "Support staff", url: "/support-staff", id: 3 },
  { text: "Schools", url: "/schools", id: 4 },
  { text: "About Us", url: "/about", id: 5 },
  { text: "Contact Us", url: "/contact", id: 3 }
];

function Navbar() {
  /**
   * This Hook can be used for detecting clicks outside the Opened Menu
   */
  function clickOutside(ref, onClickOutside) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef();
  clickOutside(wrapperRef, () => {
    setOpen(false);
  });

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 w-full left-0 border-b border-gray">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Logo src="/act_logo.svg" alt="Act Logo" width={200} height={100} />
          </Link>
          <div>
            <Image src={"/clip-board-circle.svg"} width={70} height={70} />
            <span>Send CV</span>
          </div>
        </div>

        <div className="container flex flex-wrap mx-auto items-center justify-start md:justify-center">
          <div className="flex md:order-2">
            <button
              onClick={() => setOpen(!open)}
              onKeyDown={() => setOpen(!open)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              ref={wrapperRef}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={
              open === true
                ? "items-center justify-between visible w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {samplePageLinks.map((link, i) => (
                <li key={i} className="flex item-center content-center">
                  <Link
                    href={link.url}
                    className="text-xl block py-2 px-5 text-black bg-black-700 rounded :bg-transparent md:text-black-700 md:dark:text-black body-text"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
