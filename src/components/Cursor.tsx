"use client";

import { useEffect } from "react";

const Cursor: React.FC = () => {
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

        setTimeout(() => {
          circle.style.left = `${e.pageX - width / 2}px`;
          circle.style.top = `${e.pageY - height / 2}px`;
        }, 100);
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
        transition: "transform 0.4s, background 0.4s",
      }}
    />
  );
};

export default Cursor;
