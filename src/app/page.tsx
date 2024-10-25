// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-112px)] grid grid-cols-1 md:grid-cols-8 items-center text-center ">
      <div className="flex flex-col justify-center md:justify-end col-span-2">
        <p className="responsive-font-xl text-end">Phi Truong</p>
        <div
          className="flex flex-col items-end text-base"
          style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
        >
          <p>Live and work in Ho Chi Minh City</p>
          <p>Available for a full-time position</p>
        </div>
      </div>

      <div className="col-span-4 flex items-center justify-center">
        <div className="w-[550px] h-[550px] p-2 border-[3px] border-blue-500 rounded-full">
          <div className="w-full h-full bg-blue-500 rounded-full ">
            {/* <Image
              src={"/images/user.png"}
              className="absolute left-0 top-0 transform w-auto h-auto"
              fill
              alt={"Logo"}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            /> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-end col-span-2">
        <p className="responsive-font-base text-left">
          Fresher Front-end Web Developer
        </p>
      </div>
    </div>
  );
}
