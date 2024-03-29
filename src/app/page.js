import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex items-center h-dvh
    w-dvw justify-center  bg-[#f9f9f3] flex-col "
    >
      <Image src={"/hello.gif"} alt="hello" width={250} height={250} />
      <h1 className="font-bold tracking-wide text-center  ">BACHA 🤗</h1>

      <div className=" w-[14rem] flex justify-between px-2 mt-2 ">
        <Link
          href="/by"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
       >
          BY
        </Link>
        <Link
          href="/hi"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className="text-center bg-red-600 px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
        >
          hii
        </Link>
      </div>
    </main>
  );
}
