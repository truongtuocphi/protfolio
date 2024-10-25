"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Sử dụng usePathname từ next/navigation
import Loading from "@/components/Loading"; // Component loading của bạn

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Lấy pathname hiện tại

  useEffect(() => {
    // Kích hoạt loading khi bắt đầu thay đổi URL
    const handleStart = () => {
      setLoading(true);
    };

    // Tắt loading khi hoàn tất chuyển trang
    const handleComplete = () => {
      setLoading(false);
    };

    // Mỗi khi pathname thay đổi, ta kích hoạt loading
    handleStart();

    // Tắt loading sau khi thay đổi hoàn tất
    const timer = setTimeout(() => {
      handleComplete();
    }, 500); // Đặt thời gian 500ms để mô phỏng quá trình load (tùy chỉnh theo nhu cầu)

    return () => {
      clearTimeout(timer); // Xóa timer khi component unmount
    };
  }, [pathname]); // Theo dõi sự thay đổi của URL (pathname)

  return (
    <>
      {loading && <Loading />} {/* Hiển thị loading khi đang tải */}
      {children}
    </>
  );
};

export default PageWrapper;
