export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-112px)] grid grid-cols-1 md:grid-cols-8 items-center text-center gap-11">
      <div className="flex justify-center md:justify-end col-span-2">
        <p className="responsive-font">Truong Tuoc Phi</p>
      </div>

      <div className="col-span-4 flex items-center justify-center">
        <div className="w-[550px] h-[550px] bg-blue-500 rounded-full aspect-ratio"></div>
      </div>

      <div className="flex justify-center md:justify-start col-span-2">
        <p className="responsive-font">Web Developer</p>
      </div>
    </div>
  );
}
