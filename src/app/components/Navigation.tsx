import Image from "next/image";
import React from "react";
import icon from "../../../public/icons/menu.svg";

const Navigation = () => {
  return (
    <button type="button" className="ml-auto">
      <Image src={icon} width={29} height={29} alt="" />{" "}
    </button>
  );
};

export default Navigation;
