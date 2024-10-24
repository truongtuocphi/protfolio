"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Logo: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const logoElements: JSX.Element[] = [];

  for (let i = 1; i <= 3; i++) {
    logoElements.push(
      <Link key={i} href="/">
        <Image
          alt="logo"
          src={`${
            i === 2
              ? "/images/signature_blue.png"
              : "/images/signature_default.png"
          }`}
          className="h-auto w-auto cursor-pointer"
          width={100}
          height={100}
        />
      </Link>
    );
  }

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
        {logoElements}
      </div>
    </div>
  );
};

export default Logo;
