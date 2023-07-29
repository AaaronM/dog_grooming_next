import React from "react";
import Image from "next/image";
import Heroimg from "../IMG/4.png";

export default function Main() {
  return (
    <div>
      <div className="bg-[#FFAE12] h-[450px] flex  justify-evenly items-center p-[100px]">
        <div className="text-white">
          <h1 className=" font-bold text-[40px]">Pretty Paws Palace</h1>
          <p className="text-[25px]">Where Doggie Perfection Takes Place!</p>
        </div>
        <div className="">
          <Image src={Heroimg} className="h-[450px] bg-cover " />
        </div>
      </div>
    </div>
  );
}
