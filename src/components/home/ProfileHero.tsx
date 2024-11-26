import Image from "next/image";

const ProfileHero = () => {
  return (
    <div className="w-full h-[calc(100vh-112px)] grid grid-cols-1 md:grid-cols-8 items-center text-center ">
      <div className="flex flex-col justify-center md:justify-end col-span-2">
        <p className="responsive-font-xl text-end">Phi Truong</p>
        <div
          className="flex flex-col items-end text-base"
          style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
        >
          <span>Live and work in Ho Chi Minh City</span>
          <span>Available for a full-time position</span>
        </div>
      </div>

      <div className="col-span-4 flex items-center justify-center">
        <div className="w-[550px] h-[550px] p-2 border-[3px] border-blue-500 rounded-full -z-20">
          <div className="relative w-full h-full bg-blue-500 rounded-full ">
            <Image
              src={"/images/user.png"}
              className="absolute w-auto h-auto"
              fill
              alt={"Logo"}
              sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-end col-span-2">
        <span className="responsive-font-base text-left">
          Fresher Front-end Web Developer
        </span>
      </div>
    </div>
  );
};

export default ProfileHero;
