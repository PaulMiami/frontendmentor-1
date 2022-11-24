"use client";

import React from "react";
import Button from "./Button";
import { MouseEvent } from "react";

export default function Menu() {
  const hamburgerClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle("open");

    const menu = document.getElementById("menu");
    menu?.classList.toggle("flex");
    menu?.classList.toggle("hidden");
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href={"#"} className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href={"#"} className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href={"#"} className="hover:text-darkGrayishBlue">
            About
          </a>
          <a href={"#"} className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href={"#"} className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <Button name="Get Started"></Button>
        {/* hamburger icon */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={hamburgerClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
}
