import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="overflow-hidden relative h-screen flex flex-col justify-center items-center bg-[#f8f9f8]  ">
      <div className="flex flex-col justify-center place-items-center  ">
        <Image
          src={"/aww_mera_bacha.gif"}
          alt="hello"
          width={250}
          height={250}
        />
        <h1 className="font-bold tracking-wide text-center text-[.8rem] flex items-center ">
          Aww MERA BACHA <p className="text-[1.3rem] ">😍🥰</p>{" "}
        </h1>
        <p className="font-bold tracking-wide text-center text-[.6rem] flex items-center uppercase text-[#80808091] ">
          SEE ON THE RIGHT CORNER
        </p>
      </div>

      <div className="w-[5rem] h-[15%]  absolute bottom-0 right-0  ">
        <div className="mr-auto ml-auto w-[90%] " >
          <Image src={"/loveme.gif"} alt="" height={50} width={50} />
          <p className="text-[.5rem] font-semibold text-[#c23232] ">
            Do you love me?
          </p>
        </div>
        <div className="flex justify-between px-2 mt-2 ">
          <Link
            href="/no"
            className="text-[.5rem] text-center bg-red-600 p-2 py-1 font-semibold  rounded-md w-[40%] text-[#ffffff] "
          >
            Nhhh
          </Link>
          <Link
            href="/yes"
            className="text-[.5rem] text-center bg-red-600 px-2 py-1 font-semibold  rounded-md w-[40%] text-[#ffffff] "
          >
            Hnnn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
