import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <section className="flex flex-col items-center pb-[37px]">
      <h2 className=" text-center font-Italianno font-normal text-[35px] mb-[20px] relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-mainYellow after:mt-1">
        Menu
      </h2>
      <MenuItem />
      <button
        type="button"
        className="uppercase px-20 py-[10px] border border-mainYellow rounded text-sm font-normal"
      >
        MORE
      </button>
    </section>
  );
};

export default Menu;
