import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col justify-center place-items-center h-dvh " >
     <Image src={"/by.gif"} alt="hello" width={250} height={250} />
      <h1 className="font-bold tracking-wide text-center text-[.8rem] flex items-center ">KUTTI BYE BOLTI H <p className="text-[1.3rem] " >🤨</p> </h1>
      <h1 className="font-bold tracking-wide text-center text-[.8rem] flex items-center uppercase ">Hii bolo motki  </h1>
      <div className=" w-[14rem] flex justify-between px-2 mt-2 ">
        <Link
          href="/by/bye"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
           bye 
        </Link>
        <Link
          href="/hi"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className="text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          hii
        </Link>
      </div>
    </div>
  );
}

export default page;
