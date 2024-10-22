"use client";

import Link from "next/link";
import { useRef } from "react";

const Logo: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={boxRef}>
      <Link href={"/"} className="hover:text-blue-500 font-medium text-3xl">
        PHI TRUONG.
      </Link>
    </div>
  );
};

export default Logo;
