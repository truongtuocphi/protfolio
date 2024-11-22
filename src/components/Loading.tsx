import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = ({ onComplete }: { onComplete?: () => void }) => {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation: Slide up the loading screen
      gsap.to(loadingRef.current, {
        y: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 1, // Wait for 2 seconds before animating
        onComplete: onComplete, // Trigger the callback when animation ends
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed top-0 left-0 w-full h-screen bg-blue-500 flex items-center justify-center z-50"
    >
      <div className="text-5xl text-white font-bold">Loading...</div>
    </div>
  );
};

export default Loading;
