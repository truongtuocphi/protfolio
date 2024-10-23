"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

const Logo: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;

    if (box) {
      const moveIn = () => {
        gsap.to(box, {
          y: -50,
          duration: 0.2,
          ease: "power1.out",
        });
      };

      const moveOut = () => {
        gsap.to(box, {
          y: -90,
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
    <div className="w-34 h-14 overflow-hidden">
      <div ref={boxRef} className="flex flex-col gap-3">
        <Link href={"/"} className="font-medium text-3xl">
          <Image
            alt="logo"
            src="/images/signature_default.png"
            className="h-auto w-auto"
            width={100}
            height={100}
          />
        </Link>
        <Link href={"/"} className="font-medium text-blue-500 text-3xl">
          <Image
            alt="logo"
            src="/images/signature_blue.png"
            className="h-auto w-auto"
            width={100}
            height={100}
          />
        </Link>
        <Link href={"/"} className="font-medium text-3xl">
          <Image
            alt="logo"
            src="/images/signature_default.png"
            className="h-auto w-auto"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
