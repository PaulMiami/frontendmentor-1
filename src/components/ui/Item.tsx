import React from "react";

interface Props {
  bubbleText: string;
  title: string;
  body: string;
}

export default function Item(prop: Props) {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      {/* heading */}
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-6 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {prop.bubbleText}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {prop.title}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="hidden mb-4 text-lg font-bold md:block">{prop.title}</h3>
        <div className="text-darkGrayishBlue">{prop.body}</div>
      </div>
    </div>
  );
}
