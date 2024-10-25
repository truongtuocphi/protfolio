"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    handleStart();

    const timer = setTimeout(() => {
      handleComplete();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
};

export default PageWrapper;
