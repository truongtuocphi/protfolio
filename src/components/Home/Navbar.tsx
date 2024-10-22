import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";

const menuItems = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  { title: "WORK", link: "/work" },
];

export default function Navbar() {
  return (
    <nav className="h-28 flex justify-between items-center py-5">
      <Logo />

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
