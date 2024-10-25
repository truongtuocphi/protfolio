"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
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
    }, 1000);

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
