export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-112px)] grid grid-cols-1 md:grid-cols-8 items-center text-center ">
      <div className="flex flex-col justify-center md:justify-end col-span-2">
        <p className="responsive-font text-end">Phi Truong</p>
        <div className="flex flex-col items-end text-2xl">
          <p>Live and work in Ho Chi Minh City</p>
          <p>Available for a full-time position</p>
        </div>
      </div>

      <div className="col-span-4 flex items-center justify-center">
        <div className="w-[550px] h-[550px] bg-blue-500 rounded-full aspect-ratio"></div>
      </div>

      <div className="flex flex-col justify-center md:justify-end col-span-2">
        <p className="responsive-font text-left">Front End Developer</p>
      </div>
    </div>
  );
}
