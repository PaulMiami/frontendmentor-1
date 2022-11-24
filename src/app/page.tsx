import type React from "react";
import Button from "@ui/Button";
import Item from "@ui/Item";
import Testimonial from "@ui/Testimonial";
import Menu from "@ui/Menu";
import Testimonials from "@ui/Testimonials";

export default function Home() {
  return (
    <>
      <Menu />
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for sotfware teams to plan day-to-day tasks
              white keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button name="Get Started" showOnMobile={true}></Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="images/illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container flex flex-col px4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What&rsquo;s different about Manage?
            </h2>
            <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            <Item
              bubbleText="01"
              title="Track company-wide progress"
              body="See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again."
            />
            <Item
              bubbleText="02"
              title="Advanced built-in reports"
              body="Set internal delivery estimates and track progress toward company 
              goals. Our customisable dashboard helps you build out the reports 
              you need to keep key stakeholders informed."
            />
            <Item
              bubbleText="03"
              title="Everything you need in one place"
              body="Stop jumping from one service to another to communicate, store files, 
              track tasks and share documents. Manage offers an all-in-one team 
              productivity solution."
            />
          </div>
        </div>
      </section>
      {/* testimomials */}
      <section id="testimomials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* header */}
          <h2 className="text-4xl font-bold text-center">What they’ve said</h2>
          {/* testimonials */}
          <Testimonials />
          <div className="my-16">
            <Button name="Get Started" showOnMobile={true} />
          </div>
        </div>
      </section>
      {/* call to action */}
      <section id="callToAction" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
          {/* heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today.
          </h2>
          <Button name="Get Started" showOnMobile={true} inverseColor={true} />
        </div>
      </section>
      {/* footer */}
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 space-y-8 mx-auto md:flex-row md:space-y-0">
          {/* logo, socials */}

          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my text-center text-white md:items-start md:hidden">
              Copyright &copy; 2020. All Rights Reserved
            </div>
            <div>
              <img src="images/logo-white.svg" className="h-8" alt="" />
            </div>
            {/* socials */}
            <div className="flex justify-center space-x-8 md:space-x-4">
              <a href="#" className="">
                <img src="images/icon-facebook.svg" alt="" className="h-8" />
              </a>
              <a href="#" className="">
                <img src="images/icon-youtube.svg" alt="" className="h-8" />
              </a>
              <a href="#" className="">
                <img src="images/icon-twitter.svg" alt="" className="h-8" />
              </a>
              <a href="#" className="">
                <img src="images/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              <a href="#" className="">
                <img src="images/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* list */}
          <div className="flex justify-around mx-auto space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* search */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <Button name="Go" showOnMobile={true}></Button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2020. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
