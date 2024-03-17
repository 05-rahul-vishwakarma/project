"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="flex flex-col justify-center place-items-center h-dvh w-screen relative ">
      <Image src={"/inbye.gif"} alt="hello" width={250} height={250} />
      <h1 className="font-bold tracking-wide text-center text-[.8rem] flex items-center uppercase ">
        Or bye bolegi kutti <p className="text-[1.3rem] ">🤨</p>{" "}
      </h1>
      <h1 className="font-bold tracking-wide text-center text-[.8rem] flex items-center uppercase ">
        Hii bolo mera bachwa{" "}
      </h1>
      
      <Link 
      style={{ boxShadow: "0 0 5px 0 #dc2626" }}
      href={'/yes'} className="text-center bg-red-600  mt-4 h-[2rem]  px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff]">
        Hnn
      </Link>
      <div className=" ">
        <button
          className="text-center bg-red-600 absolute left-0 bottom-0 h-[2rem]  px-2 py-1 font-semibold text-[.8rem] rounded-md w-[40%] text-[#ffffff] "
          style={{
            top: position.y + "px",
            left: position.x + "px",
          }}
          onClick={handleClick}
        >
          Nhh
        </button>
      </div>

    </div>
  );
}

export default Page;
