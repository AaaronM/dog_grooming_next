import React from "react";
import Image from "next/image";
import Aboutimg from "../IMG/3.png";

export default function About() {
  return (
    <div>
      <div className="flex justify-between p-[200px] gap-[100px] h-[500px]  items-center">
        <div>
          <Image src={Aboutimg} className="h-[350px] w-[450px]" />
        </div>
        <div className="">
          <h2 className="text-[30px] mb-[20px]">
            Tailored Care for LA's Finest Canines
          </h2>
          <p className="flex flex-shrink text-[18px]">
            Welcome to Pretty Paws Palace, <br /> your go-to destination for
            top-notch dog grooming services in the heart of Los Angeles.
          </p>
        </div>
      </div>
    </div>
  );
}
