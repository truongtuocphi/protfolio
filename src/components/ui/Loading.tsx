import { useEffect, useRef } from "react";
import { useLottie } from "lottie-react";
import LoadingAnimation from "../../../public/LoadingAnimation.json";
import gsap from "gsap";

const options = {
  animationData: LoadingAnimation,
  loop: true,
};

const Loading = () => {
  const { View } = useLottie(options);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(loadingRef.current, {
        y: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loadingRef}
      className="fixed top-0 left-0 w-full h-screen bg-blue-700 flex items-center justify-center z-50"
    >
      {View}
    </div>
  );
};

export default Loading;
