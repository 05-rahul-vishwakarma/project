import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col justify-center place-items-center h-dvh bg-[#fbfaf3] ">
      <Image src={"/riding.gif"} alt="hello" width={250} height={250} />
    
    
      <div className="capitalize font-bold tracking-wide text-center text-[.8rem] flex  items-center text-[gray] ">
        or ghumna h ??
      </div>


      <div className=" w-[14rem] flex justify-between px-2 mt-2 ">
        <Link
          href="/yes/meToo/yes"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          No
        </Link>
        <Link
          href="/yes/meToo/yes/last"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className="text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          Yes
        </Link>
      </div>
    </div>
  );
}

export default page;
