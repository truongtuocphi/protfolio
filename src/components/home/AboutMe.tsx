"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement?.textContent) return;

    const words = textElement.textContent.split(" ");
    textElement.innerHTML = words
      .map((word) => `<span>${word}</span>`)
      .join(" ");

    console.log(textElement);
  }, []);

  return (
    <div
      ref={textRef}
      className="responsive-font-base font-light text-start px-4 lg:px-28"
    >
      <span className="ml-32"></span>
      <span className="text-[#F1DAD9]">
        I&apos;m a Vietnam digital designer and web developer with over 10 years
        of experience. At the crossroads of{" "}
        <b className="font-semibold">design, motion</b> and{" "}
        <b className="font-semibold">web development,</b> the diversity of my
        skills allows me to approach design challenges from multiple
        perspectives. I&apos;m currently available for a full-time position.
      </span>
    </div>
  );
};

export default AboutMe;
