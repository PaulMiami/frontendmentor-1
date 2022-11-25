import type React from "react";

import clsx from "clsx";

interface Props {
  name: string;
  imgage: string;
  body: string;
  class?: string;
  hideOnMobile?: boolean;
}

export default function Testimonial(props: Props) {
  return (
    <div
      className={clsx(
        "flex-col items-center p-6 space-y-6 bg-veryLightGray md:w-1/3",
        props.hideOnMobile ? "hidden md:flex" : "flex",
        props.class
      )}
    >
      <img src={props.imgage} className="w-16 -mt-14" alt="" />
      <h5 className="text-lg font-bold">{props.name}</h5>
      <p className="text-sm text-darkGrayishBlue">{props.body}</p>
    </div>
  );
}
