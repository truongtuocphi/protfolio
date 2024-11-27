"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const logoSources = [
  "/images/signature_default.png",
  "/images/signature_blue.png",
  "/images/signature_default.png",
];

const Logo = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const box = boxRef.current;

    if (box) {
      const moveIn = () => {
        gsap.to(box, {
          y: -69,
          duration: 0.2,
          ease: "power1.out",
        });
      };

      const moveOut = () => {
        gsap.to(box, {
          y: -120,
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
    <div className="w-34 h-16 overflow-hidden">
      <div ref={boxRef} className="flex flex-col gap-3">
        {logoSources.map((src, index) => (
          <Link key={index} href="/">
            <Image
              alt="logo"
              src={src}
              className="h-auto w-auto cursor-pointer"
              width={100}
              height={100}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Logo;
