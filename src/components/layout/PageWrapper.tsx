"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/Loading";

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
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <section className="max-w-[2176px] px-4 md:px-12 lg:px-[128px] xl:px-[128px] mx-auto">
      {loading && <Loading />}
      {children}
    </section>
  );
};

export default PageWrapper;
