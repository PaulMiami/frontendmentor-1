import React from "react";

import clsx from "clsx";

interface Props {
  name: string;
  showOnMobile?: boolean;
  inverseColor?: boolean;
}

export default function Button(props: Props) {
  return (
    <a
      href="#"
      className={clsx(
        "p-3 px-6 pt-2 rounded-full baseline shadow-2xl",
        !props.showOnMobile && "hidden md:block",
        props.inverseColor
          ? "text-brightRed bg-white hover:bg-gray-900"
          : "text-white bg-brightRed hover:bg-brightRedLight"
      )}
    >
      {props.name}
    </a>
  );
}
