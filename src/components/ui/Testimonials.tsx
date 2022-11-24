import React from "react";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div className="flex flex-col mt-24 md:flex-row space-x-6">
      <Testimonial
        imgage="images/avatar-anisha.png"
        name="Anisha Li"
        body="“Manage has supercharged our team’s workflow. The ability to
      maintain visibility on larger milestones at all times keeps
      everyone motivated.”"
      />
      <Testimonial
        hideOnMobile={true}
        imgage="images/avatar-ali.png"
        name="Ali Bravo"
        body="“We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”"
      />
      <Testimonial
        hideOnMobile={true}
        imgage="images/avatar-richard.png"
        name="Richard Watts"
        body="“Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”"
      />
      <div className="flex flex-row justify-center space-x-1">
        <span className="dot selected"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
