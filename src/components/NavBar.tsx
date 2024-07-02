import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import logo from "/public/icons/Logo.svg";

const NavBar = () => {
  return (
    <MaxWidthWrapper>
      <ul className="flex items-center justify-center">
        {" "}
        <li>
          <Link
            href="/"
            className="font-Italianno  text-[40px] font-normal ml-[32px] py-[15px] mr-[70px]"
          >
            <Image src={logo} width={200} height={50} alt="" />
          </Link>
        </li>
        <li className="ml-auto ">
          {" "}
          <nav>
            {" "}
            <Navigation />
          </nav>
        </li>
      </ul>
    </MaxWidthWrapper>
  );
};

export default NavBar;
