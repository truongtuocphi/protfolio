import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="h-28 flex justify-between items-center py-5">
      <Link href={"/"} className="hover:text-blue-500">
        PHI TRUONG
      </Link>

      <ul className="flex items-center gap-6">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link href={"/work"}>WORK</Link>
        </li>
      </ul>
    </nav>
  );
}
