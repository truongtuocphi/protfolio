"use client";

import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const circle = document.getElementById("circle") as HTMLElement;

    const updateCursorPosition = (e: MouseEvent) => {
      if (circle) {
        const height = circle.offsetHeight || 0;
        const width = circle.offsetWidth || 0;

        const target = e.target as HTMLElement;

        if (target.tagName === "A") {
          circle.classList.add("big");
          circle.style.pointerEvents = "none";
        } else {
          circle.classList.remove("big");
        }

        circle.style.left = `${e.clientX - width / 2}px`;
        circle.style.top = `${e.clientY - height / 2}px`;
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      id="circle"
      style={{
        position: "fixed",
        border: "2px solid white",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        top: "-10rem",
        left: "-10rem",
        boxShadow: "0 0 10px white",
        transition:
          "top 0.1s ease, left 0.1s ease, transform 0.4s, background 0.4s",
        pointerEvents: "none",
      }}
    />
  );
};

export default Cursor;
