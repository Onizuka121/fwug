"use client";
import { useState } from "react";
import NavLink from "./nav-link";
import Link from "next/link";
import { myFont } from "./ui/span";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={`${myFont.className} fixed top-0 left-1/2 border-4 border-black transform -translate-x-1/2 xl:w-3/5 lg:w-full mt-2 clearNav z-50 justify-center bg-[#F8E197] items-center p-4 ${
        navOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex w-full px-8 mx-auto md:px-12 md:items-center md:justify-between flex-row lg:px-32 max-w-7xl">
        <Link
          href="/"
          className={`${myFont.className} mr-10 shakeX text-shadow text-[#65B1E0] text-5xl`}
        >
          $FWUG
        </Link>

        <div className="flex flex-row items-center ml-14 justify-between text-[#65B1E0]">
          <button
            className={`menu-icon ${navOpen ? "open" : ""} rounded-lg md:hidden focus:outline-none focus:shadow-outline `}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>

        <nav className="items-center flex-grow hidden gap-10 drop-shadow-xl shadow-black p-4 px-5 md:px-0 md:pb-0 md:flex justify-end md:flex-row lg:p-0 md:mt-0">
          <NavLink href="subscribe">Subscribe</NavLink>
          <NavLink href="roadmap">Roadmap</NavLink>
          <NavLink href="raydium">Raydium</NavLink>
          <NavLink href="telegram">Telegram</NavLink>
        </nav>
      </div>
      <div className={`md:hidden py-7 ${navOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center justify-start gap-10 text-xl">
          <li>
            <a
              className="text-[#65B1E0] text-2xl p-3 transition rounded-xl"
              href="#subscribe"
              onClick={() => setNavOpen(!navOpen)}
            >
              Subscribe
            </a>
          </li>
          <li>
            <a
              className="text-[#65B1E0] text-2xl p-3 transition rounded-xl"
              href="#roadmap"
              onClick={() => setNavOpen(!navOpen)}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              className="text-[#65B1E0] text-2xl p-3 transition rounded-xl"
              href="#raydium"
              onClick={() => setNavOpen(!navOpen)}
            >
              Raydium
            </a>
          </li>
          <li>
            <a
              className="text-[#65B1E0] text-2xl p-3 transition rounded-xl"
              href="#telegram"
              onClick={() => setNavOpen(!navOpen)}
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
