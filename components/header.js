"use client";
import { useState } from "react";
import NavLink from "./nav-link";
import Link from "next/link";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-1/2  transform -translate-x-1/2 xl:w-2/3 w-4/5 mt-2  clearNav z-50 justify-center backdrop-blur-xl items-center border-2 border-[#F8E197] p-3  ${
          navOpen ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div
          x-data="{ open: false }"
          className="flex w-full px-8 mx-auto md:px-12 md:items-center md:justify-between flex-row lg:px-32 max-w-7xl"
        >
          <img
            src="images/image21.jpg"
            alt="#_"
            className="w-10 h-10 mx-auto rounded-full "
          />
          <Link
            href="/"
            className="text-3xl ml-3 shakeX text-[#F8E197] bungee font-extrabold"
          >
            $FWUG
          </Link>

          <div className="flex flex-row items-center ml-14 justify-between text-white">
            <button
              className={`menu-icon ${
                navOpen ? "open" : ""
              } rounded-lg md:hidden focus:outline-none focus:shadow-outline `}
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>

          <nav className="items-center flex-grow hidden chakra-petch-regular gap-5 p-4 px-5 font-medium  md:px-0 md:pb-0 md:flex  justify-end  md:flex-row lg:p-0 md:mt-0">
            <NavLink href="pumpfun">Pump Fun</NavLink>
            <NavLink href="telegram">Telegram</NavLink>
          </nav>
        </div>
        <div className={"md:hidden py-7 " + (navOpen ? "block" : "hidden")}>
          <ul className="flex flex-col items-center justify-start gap-10 text-xl">
            <li>
              <a
                className="text-gray-300 p-3 transition hover:text-gray-400 rounded-xl focus:text-gray-500"
                href="#pumpfun"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                Pump Fun
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 p-3 transition hover:text-gray-400 rounded-xl"
                href="#telegram"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
