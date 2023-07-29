import Image from "next/image";
import React from "react";
import Logo from "../IMG/6.png";

export default function Navbar() {
  return (
    <div className="">
      <ul className="flex justify-between items-center px-8 bg-[#427AB4] text-white">
        <Image src={Logo} className="h-[80px] w-[80px]" />
        <div className="flex gap-5  uppercase">
          <li>About</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact us</li>
        </div>
      </ul>
    </div>
  );
}
