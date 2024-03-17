import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col justify-center place-items-center h-dvh ">
      <Image src={"/metooNo.gif"} alt="hello" width={250} height={250} />
      <div className=" w-[80%] font-bold tracking-wide text-center text-[.rem] flex  items-center text-[gray] ">
        Jaada nh nh kregi kutti aise lekr bhaag jaayenge
        <p className="text-[1.3rem]  ">
          {" "}
        </p>{" "}
      </div>


      <div className=" w-[14rem] flex justify-between px-2 mt-2 ">
        <Link
          href="/yes/meToo/"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          Hnnn
        </Link>
        <Link
          href="/yes/meToo/"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className="text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          Hnnn
        </Link>
      </div>
    </div>
  );
}

export default page;
