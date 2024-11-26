"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Logo from "@/components/ui/Logo";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const menuItems: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Work", link: "/work" },
  { title: "About", link: "/about" },
];

const Navbar = () => {
  const pathName = usePathname();
  const dotRef = useRef<HTMLDivElement | null>(null);

  const getMenuId = (path: string) => {
    if (path === "/") {
      return "menu-home";
    }

    return `menu-${path.replace("/", "")}`;
  };

  useEffect(() => {
    const activeItemMenu = document.querySelector(
      `#menu-${getMenuId(pathName)}`
    ) as HTMLElement;
    const dot = dotRef.current;

    if (activeItemMenu instanceof HTMLElement && dot) {
      const { offsetLeft, offsetWidth } = activeItemMenu;

      gsap.to(dot, {
        x: offsetLeft + offsetWidth / 2 - dot.offsetWidth / 2,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [pathName]);

  return (
    <div className="h-28 flex justify-between items-center py-5">
      <Logo />
      <nav className="relative">
        <ul className="flex items-center gap-6 text-2xl">
          {menuItems.map((menu, index) => (
            <li key={index} id={`menu-${getMenuId(menu.link)}`}>
              <Link className="relative" href={menu.link}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          ref={dotRef}
          className="absolute size-2 rounded-full bg-blue-700"
        ></span>
      </nav>
    </div>
  );
};

export default Navbar;
