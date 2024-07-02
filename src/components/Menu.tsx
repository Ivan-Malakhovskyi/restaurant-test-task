"use client";

import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { getAll } from "../api";
import { IMenuData } from "../types";
import toast from "react-hot-toast";
import CustomToast from "./Global/Toast/CustomToast";
import CustomSpinner from "./Global/Spinner/CustomSpinner";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const mealsPerPage = 5;

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setIsLoading(true);
        const { categories } = await getAll();
        setIsLoading(false);
        setMeals(categories.slice(0, mealsPerPage));
        toast.success("Menu was successfully loaded");
      } catch (error) {
        console.log((error as Error).message);
        setIsError(error as Error);
        setIsLoading(false);
        toast.error("Something went wrong");
      }
    };

    fetchAll();
  }, []);

  return (
    <section className="flex flex-col items-center pb-[37px]">
      <h2 className=" text-center font-Italianno font-normal text-[35px] mb-[20px] relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-mainYellow after:mt-1">
        Menu
      </h2>

      {isLoading ? (
        <CustomSpinner />
      ) : (
        <ul className="flex flex-wrap justify-center gap-6">
          {" "}
          {meals &&
            meals?.map((item: IMenuData, idx) => (
              <MenuItem key={item?.idCategory} idx={idx} meals={item} />
            ))}
        </ul>
      )}

      {!isLoading && !isError && meals.length > 0 && (
        <button
          type="button"
          className="uppercase px-20 py-[10px] border border-mainYellow rounded text-sm font-normal"
        >
          MORE
        </button>
      )}
      <CustomToast />
    </section>
  );
};

export default Menu;
