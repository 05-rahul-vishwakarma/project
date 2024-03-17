import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    // <div className="h-vh flex flex-col items-center pb-[10rem] bg-[#fcfcfc] ">
    //   <Image src={"/love.gif"} alt="hello" width={250} height={250} />
    //   <p className="font-semibold text-[.6rem] text-[gray] " >I Love you bacha <br /> humlog humesa sath rhenge na bacha? <br /> hnnn gadha promise </p>
    //   <Image src={"/fight1.gif"} alt="hello" width={250} height={250} className="mt-4 " />
    //   <Image src={"/fight.gif"} alt="hello" width={250} height={250} className="mt-4 " />
    //   <Image src={"/sorry.gif"} alt="hello" width={250} height={250} className="mt-4 " />
    //   <p className="font-semibold text-[.6rem] text-[gray] " >Sorry bacha maan jaao na   </p>
    //   <Image src={"/sorry2.gif"} alt="hello" width={250} height={250} className="mt-4 " />
    //   <Image src={"/sad.gif"} alt="hello" width={250} height={250} className="mt-4 " />
    //   <p className="font-semibold text-[.6rem] text-[gray] " >Sorry bacha maaf kr dena kvhi </p>
    //   <Image src={"/bye2.gif"} alt="hello" width={250} height={250} className="mt-4 " />      
    //   <Image src={"/sad2.gif"} alt="hello" width={250} height={250} className="mt-4 " />
    //    <h1 className="font-bold text-pink-600 " >Bye bacha ache se rhna khush rhna bye</h1>
   
    // </div>
    <>
        <div className="flex flex-col justify-center place-items-center h-dvh ">
      <Image src={"/love.gif"} alt="hello" width={250} height={250} />
      <p className="font-semibold text-[.6rem] text-[gray] " >I Love you bacha <br /> humlog humesa sath rhenge na bacha? <br /> hnnn gadha promise </p>
      <div className=" w-[14rem] flex  px-2 mt-2 ">
        <Link
          href="/sorry"
          style={{ boxShadow: "0 0 5px 0 #dc2626" }}
          className=" relative  leading-3 text-center bg-red-600 px-2 py-2 font-semibold text-[.8rem] rounded-md w-[100%] text-[#ffffff] "
        >
          Click me
        </Link>
      </div>
    </div>
    </>
  );
}
