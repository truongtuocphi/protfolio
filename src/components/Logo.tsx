"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Logo: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const box = boxRef.current;

    if (box) {
      const moveRight = () => {
        gsap.to(box, {
          y: -30,
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        });
      };

      const moveLeft = () => {
        gsap.to(box, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        });
      };

      box.addEventListener("mouseover", moveRight);
      box.addEventListener("mouseout", moveLeft);

      return () => {
        box.removeEventListener("mouseover", moveRight);
        box.removeEventListener("mouseout", moveLeft);
      };
    }
  }, []);

  return (
    <div className="w-fit h-10 overflow-hidden">
      <div ref={boxRef} className="flex flex-col">
        <Link href={"/"} className="font-medium text-3xl">
          PHI TRUONG.
        </Link>
        <Link href={"/"} className="font-medium text-blue-500 text-3xl">
          PHI TRUONG.
        </Link>
      </div>
    </div>
  );
};

export default Logo;
