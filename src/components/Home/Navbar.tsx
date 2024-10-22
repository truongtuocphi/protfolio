import Link from "next/link";
import React from "react";

const menuItems = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  { title: "WORK", link: "/work" },
];

export default function Navbar() {
  return (
    <nav className="h-28 flex justify-between items-center py-5">
      <Link href={"/"} className="hover:text-blue-500 text-3xl">
        PHI TRUONG
      </Link>

      <ul className="flex items-center gap-6 text-2xl">
        {menuItems.map((menu, index) => (
          <li key={index}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
