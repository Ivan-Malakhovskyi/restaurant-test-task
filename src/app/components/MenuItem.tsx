import Image from "next/image";
import React from "react";
import test from "../../../public/images/chief.jpeg";
import MaxWidthWrapper from "./MaxWidthWrapper";

const MenuItem = () => {
  return (
    <MaxWidthWrapper>
      {" "}
      <ul className="flex flex-col justify-center items-center">
        <li className=" font-normal text-[35px] mb-[20px] relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-mainYellow after:mt-1">
          {" "}
          <p className="text-center font-Italianno font-normal text-[35px] mb-2">
            Pasta Bolognese
          </p>
          <div>
            {" "}
            <Image
              src={test}
              width={380}
              height={194}
              alt=""
              className="mb-[10px]"
            />
            <p className="text-center font-normal text-[11px]">
              Bring a large pot of water to a boil. Add kosher salt to the
              boiling water, then add the pasta. Cook according to the package
              instructions, about 9 minutes.\r\nIn a large skillet over
              medium-high heat, add the olive oil and heat until the oil starts
              to shimmer. Add the garlic and cook, stirring, until fragrant, 1
              to 2 minutes...
            </p>
          </div>
        </li>
      </ul>
    </MaxWidthWrapper>
  );
};

export default MenuItem;
