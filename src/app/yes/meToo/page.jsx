import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col justify-center place-items-center h-dvh ">
      <Image src={"/loveyou.gif"} alt="hello" width={250} height={250} />
      <div className=" font-bold tracking-wide text-center text-[.8rem] flex  items-center text-[gray] ">
        Love You Too Battery{" "}
        <p className="text-[1.3rem]  ">
          {" "}
          <Image src={"/kiss-love.gif"} alt="" width={70} height={50} />{" "}
        </p>{" "}
      </div>

      <div className=" capitalize font-bold tracking-wide text-center text-[.8rem] flex  items-center text-[gray] ">
        suno ghumne chaloge
      </div>

      <div className=" w-[14rem] flex justify-between px-2 mt-2 ">
        <Link
          href="/yes/meToo/no"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          Nhhh
        </Link>
        <Link
          href="/yes/meToo/yes"
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
