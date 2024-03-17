import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col justify-center place-items-center h-dvh ">
      <Image src={"/sad.gif"} alt="hello" width={250} height={250} />
      <h1 className="font-bold tracking-wide text-center w-[70%]  text-[.8rem] flex items-center text-[gray] ">
        Sorry bacha bahut bada life h maaf kr dena bacha 
        <p className="text-[1.3rem] ">
          {" "}
          {/* <Image src={"/dance.gif"} alt="" width={30} height={20} />{" "} */}
        </p>{" "}
      </h1>

      <div className=" w-[14rem] flex  px-2 mt-2 ">
        <Link
          href="/sorry_two"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" relative  leading-3 text-center bg-red-600 px-2 py-2 font-semibold text-[.8rem] rounded-md w-[100%] text-[#ffffff] "
        >
          Click me
        </Link>
      </div>
    </div>
  );
}

export default page;
