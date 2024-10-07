import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="mt-auto  flex justify-between">
        {/* <span>LOGO</span> */}
        <Link
          href={"/"}
        >
          <Image 
          src='/namelogo.png'
          alt="hello"
          height={0}
          width={100}
          />
        </Link>
        <p className="text-slate-600 mt-10 mr-10 "><FaRegCopyright className="inline mt-[-3px]" />  All rights reserved.</p>
      </div>
      <p className="text-center text-slate-600  ">Made with <FaHeart className="inline text-red-500"/> by raajz</p>

    </footer>
  );
};

export default Footer;
