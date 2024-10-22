import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href={"/"} className="hover:text-blue-500 font-medium text-3xl">
      PHI TRUONG.
    </Link>
  );
};

export default Logo;
