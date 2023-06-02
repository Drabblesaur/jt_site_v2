import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import JTLogo from "./svg/jt_logo";

const Navbar = () => {
  const [nav, Setnav] = useState(false);

  const handleNav = () => {
    Setnav(!nav);
  };

  return (
    <nav className="left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" m-auto flex justify-between items-center pr-4 font-rubik-MonoOne">
        {/*Web Menu*/}
        <div className="flex items-center p-4">
          <Link href="/">
            <JTLogo />
          </Link>
          <ul className="hidden sm:flex text-cream">
            <li className="p-4 ease-in-out duration-200 hover:text-brand-orange">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 ease-in-out duration-200 hover:text-brand-orange">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="p-4 ease-in-out duration-200 hover:text-brand-orange">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="p-4 ease-in-out duration-200 hover:text-brand-orange">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/*Mobile Button*/}
        <div onClick={handleNav} className="block sm:hidden z-10 m-4">
          {nav ? (
            <FiX size={32} className="stroke-cream" />
          ) : (
            <FiMenu size={32} className="stroke-cocoa dark:stroke-cream" />
          )}
        </div>
        {/*Mobile Menu*/}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-cocoa text-center ease-in duration-300 text-cream"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-cocoa text-center ease-in duration-300 text-cream"
          }
        >
          <ul>
            <li
              className="p-4 text-4xl ease-in-out duration-200 hover:text-brand-orange"
              onClick={handleNav}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className="p-4 text-4xl ease-in-out duration-200 hover:text-brand-orange"
              onClick={handleNav}
            >
              <Link href="/projects">Projects</Link>
            </li>
            <li
              className="p-4 text-4xl ease-in-out duration-200 hover:text-brand-orange"
              onClick={handleNav}
            >
              <Link href="/resume">Resume</Link>
            </li>
            <li
              className="p-4 text-4xl ease-in-out duration-200 hover:text-brand-orange"
              onClick={handleNav}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
