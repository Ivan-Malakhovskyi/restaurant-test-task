"use client";

import Image from "next/image";
import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ModalWindow from "./Global/Modal/ModalWindow";

import icon from "/public/icons/menu.svg";
import { socialList } from "./constants";

const navigation = [
  { id: 1, title: "Menu", path: "/menu" },
  { id: 2, title: "Home", path: "/" },
];

const desktopNavigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 3, title: "Menu", path: "/menu" },
  { id: 4, title: "Contacts", path: "/contacts" },
];

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const handleToggleClick = () => {
    setShowModal(!showModal);
  };

  const handleLinkClick = (path: string) => {
    setShowModal(false);
    router.push(path);
  };

  return (
    <>
      <ul className="md:flex justify-between md:gap-8 hidden">
        {desktopNavigation.map(({ id, title, path }) => {
          const isActive = pathName === path;

          return (
            <li key={id}>
              <Link
                href={path}
                className={`py-6 hover:text-mainGreen focus:text-mainGreen transition ease-out duration-300 ${
                  isActive ? "text-mainGreen" : ""
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
        <ul className="flex items-center gap-5">
          {socialList.map(({ id, icon }) => (
            <li key={id}>
              <Link href="/">
                <Image src={icon} width={20} height={20} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </ul>

      <div className="md:hidden">
        {" "}
        <button type="button" className="ml-auto" onClick={handleToggleClick}>
          <Image src={icon} width={29} height={29} alt="" />{" "}
        </button>
        {showModal && (
          <ModalWindow
            onClose={handleToggleClick}
            maxwidth="302"
            maxheight="633"
          >
            <ul className=" text-right mt-[60px] mb-[300px]">
              {navigation.map(({ id, title, path }) => {
                const isActive = pathName === path;

                return (
                  <li key={id}>
                    <Link
                      href={path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(path);
                      }}
                      className={`mb-5 text-lg font-normal  transition ease-out duration-300 ${
                        isActive ? "text-mainYellow" : "text-black"
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mx-[54px] ">
              <p className="text-center mb-5 relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-mainYellow after:mt-1">
                Contacts
              </p>

              <a href="tel:+380 (77) 77 77 777" className="mb-5">
                +380 (77) 77 77 777
              </a>
              <ul className="flex gap-[40px] flex-wrap justify-center items-center">
                {socialList.map(({ id, icon }) => (
                  <li key={id}>
                    <Link href="/">
                      <Image src={icon} width={20} height={20} alt="" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ModalWindow>
        )}
      </div>
    </>
  );
};

export default Navigation;
