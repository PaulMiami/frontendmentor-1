"use client";

import React, { useState } from "react";
import clsx from "clsx";

import Button from "./Button";

const menuItem = ["Pricing", "Product", "About", "Careers", "Community"];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerLineClass =
    "h-0.5 w-6 my-0.5 bg-black transition ease transform duration-300";

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          {menuItem.map((m) => (
            <a href={"#"} key={m} className="hover:text-darkGrayishBlue">
              {m}
            </a>
          ))}
        </div>
        <Button name="Get Started"></Button>
        {/* hamburger icon */}
        <button
          id="menu-btn"
          className="h-6 w-6  flex flex-col justify-center items-center group md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div
            className={clsx(
              hamburgerLineClass,
              isOpen && "rotate-45 translate-y-1.5"
            )}
          ></div>
          <div
            className={clsx(hamburgerLineClass, isOpen && "opacity-0")}
          ></div>
          <div
            className={clsx(
              hamburgerLineClass,
              isOpen && "-rotate-45 -translate-y-1.5"
            )}
          ></div>
        </button>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className={clsx(
            "absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md",
            isOpen && "flex",
            !isOpen && "hidden"
          )}
        >
          {menuItem.map((m) => (
            <a href="#" key={m}>
              {m}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
