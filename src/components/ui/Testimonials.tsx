"use client";
import React, { MouseEvent, useState } from "react";

import clsx from "clsx";

import Testimonial from "./Testimonial";

interface Testimonial {
  name: string;
  image: string;
  testimonial: string;
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const useTestimonial = (
  params: Omit<Testimonial, "setIsHidden">
): Testimonial => {
  const [state, setState] = useState(params.isHidden);
  return {
    name: params.name,
    image: params.image,
    testimonial: params.testimonial,
    isHidden: state,
    setIsHidden: setState,
    className: params.className,
  };
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    useTestimonial({
      name: "Anisha Li",
      image: "images/avatar-anisha.png",
      testimonial: `“Manage has supercharged our team’s workflow. The ability to
      maintain visibility on larger milestones at all times keeps
      everyone motivated.”`,
      isHidden: false,
    }),
    useTestimonial({
      name: "Ali Bravo",
      image: "images/avatar-ali.png",
      testimonial: `“We have been able to cancel so many other subscriptions since using 
      Manage. There is no more cross-channel confusion and everyone is much 
      more focused.”`,
      isHidden: true,
    }),
    useTestimonial({
      name: "Richard Watts",
      image: "images/avatar-richard.png",
      testimonial: `“Manage allows us to provide structure and process. It keeps us organized 
      and focused. I can’t stop recommending them to everyone I talk to!”`,
      isHidden: true,
    }),
    useTestimonial({
      name: "Shanai Gough",
      image: "images/avatar-shanai.png",
      testimonial: `“Their software allows us to track, manage and collaborate on our projects 
      from anywhere. It keeps the whole team in-sync without being intrusive.”`,
      isHidden: true,
      className: "md:hidden",
    }),
  ];

  const onClick = (
    e: MouseEvent<HTMLSpanElement>,
    currentTestimonial: Testimonial
  ) => {
    if (currentTestimonial.isHidden) {
      testimonials.forEach((t) => t.setIsHidden(true));
      currentTestimonial.setIsHidden(false);
    }
  };

  return (
    <>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {testimonials.map((t) => (
          <Testimonial
            key={t.name}
            hideOnMobile={t.isHidden}
            imgage={t.image}
            name={t.name}
            body={t.testimonial}
            class={t.className}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center space-x-2 pt-8 md:hidden">
        {testimonials.map((t) => (
          <button
            key={t.name}
            className={clsx(
              "dot h-2 w-2 rounded-full outline-brightRed outline outline-2 selected",
              t.isHidden ? "bg-brightRed" : "bg-white"
            )}
            onClick={(e) => onClick(e, t)}
            aria-label="testimonial"
          ></button>
        ))}
      </div>
    </>
  );
}
