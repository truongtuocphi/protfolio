import { useEffect, useRef } from "react";
import { useLottie } from "lottie-react";
import LoadingAnimation from "/animations/loading.json";
import gsap from "gsap";

const options = {
  animationData: LoadingAnimation,
  loop: true,
};

const Loading = ({ onComplete }: { onComplete?: () => void }) => {
  const { View } = useLottie(options);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(loadingRef.current, {
        y: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 2,
        onComplete: onComplete,
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed top-0 left-0 w-full h-screen bg-blue-500 flex items-center justify-center z-50"
    >
      <div className="text-5xl text-white font-bold">{View}</div>
    </div>
  );
};

export default Loading;
