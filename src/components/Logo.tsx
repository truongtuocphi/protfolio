"use client";

import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

const Logo: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;

    if (box) {
      const moveIn = () => {
        gsap.to(box, {
          y: -30,
          duration: 0.2,
          ease: "power1.out",
        });
      };

      const moveOut = () => {
        gsap.to(box, {
          y: -80,
          duration: 0.2,
          ease: "power1.in",
          onComplete: () => {
            gsap.set(box, {
              y: 0,
            });
          },
        });
      };

      box.addEventListener("mouseover", moveIn);
      box.addEventListener("mouseout", moveOut);

      return () => {
        box.removeEventListener("mouseover", moveIn);
        box.removeEventListener("mouseout", moveOut);
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
        <Link href={"/"} className="font-medium text-3xl">
          PHI TRUONG.
        </Link>
      </div>
    </div>
  );
};

export default Logo;
