import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-addBgColor pt-[10px] pb-[21px] ">
      <div className="flex">
        <h3 className="relative mx-auto font-Italianno text-[27px] font-normal">
          Opening hours{" "}
          <span className="absolute left-0 bottom-0 w-full h-[1px] border-[1px] transition bg-transparent ease-out duration-700 border-mainYellow"></span>
        </h3>
      </div>
      <div className="text-center mt-4 mb-[30px]">
        {" "}
        <p className="text-[11px] font-normal mb-2 last:mb-0">
          Mon - Sat: 11:00 - 23:00
        </p>
        <p className="text-[11px] font-normal mb-2 last:mb-0">
          Sun: 11:00 - 19:00
        </p>
        <p className="text-[11px] font-normal mb-2 last:mb-0">
          Food in the restaurant and takeaway!
        </p>
      </div>

      <ul className="flex justify-around border-b-[1px] w-full border-b-mainYellow">
        <li>
          {" "}
          <div className="flex">
            <h3 className="relative font-Italianno text-[27px] font-normal">
              Location
              <span className="absolute left-0 bottom-0 w-full h-[1px] border-[1px] transition bg-transparent ease-out duration-700 border-mainYellow"></span>
            </h3>
          </div>
          <div className=" mt-4 mb-[30px]">
            {" "}
            <p className="text-[11px] font-normal mb-2 last:mb-0">
              130 Fulton St
            </p>
            <p className="text-[11px] font-normal mb-2 last:mb-0">New York</p>
            <p className="text-[11px] font-normal mb-2 last:mb-0">
              NY 10038, USA
            </p>
          </div>
        </li>
        <li>
          <div className="flex">
            <h3 className="relative font-Italianno text-[27px] font-normal">
              Sociale
              <span className="absolute left-0 bottom-0 w-full h-[1px] border-[1px] transition bg-transparent ease-out duration-700 border-mainYellow"></span>
            </h3>
          </div>
          <div className=" mt-4 mb-[30px]">
            {" "}
            <Link
              href="/"
              className="text-[11px] block font-normal mb-2 last:mb-0"
            >
              Instagram
            </Link>
            <Link
              href="/"
              className="text-[11px] block font-normal mb-2 last:mb-0"
            >
              Facebook
            </Link>
            <Link
              href="/"
              className="text-[11px] block font-normal mb-2 last:mb-0"
            >
              Twitter
            </Link>
          </div>
        </li>
      </ul>

      <p className="text-center text-[11px] font-normal mt-[18px]">
        Copyright &#169;2021 by Bonbons Chocolate
      </p>
    </footer>
  );
};

export default Footer;
