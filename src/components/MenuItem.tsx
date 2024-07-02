import Image from "next/image";
import React, { FC } from "react";
import test from "../../../public/images/chief.jpeg";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { IMenuData } from "../types";

interface IMenuItemProps {
  meals: IMenuData;
  idx?: number;
}

const MenuItem: FC<IMenuItemProps> = ({ meals, idx }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = meals;

  return (
    <li className="font-normal w-full  text-[35px] mb-[20px] relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-mainYellow after:mt-1">
      {" "}
      <div
        className={`flex flex-col md:flex-row items-center ${
          Number(idx) % 2 !== 0 && "md:flex-row-reverse"
        }`}
      >
        {" "}
        <div className="flex-shrink-0 md:w-1/2">
          {" "}
          <Image
            src={strCategoryThumb}
            width={380}
            height={194}
            alt=""
            className="mb-[10px] md:w-[538px] md:h-[274px]"
          />
        </div>
        <div className="md:w-1/2">
          {" "}
          <p className="font-Italianno text-center font-normal text-[35px] mb-2">
            {strCategory}
          </p>
          <p className="font-normal text-[11px]  text-ellipsis max-w-[540px]">
            {strCategoryDescription}.
          </p>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
