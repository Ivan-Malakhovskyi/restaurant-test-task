"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState, useEffect, FormEvent } from "react";
import { getAll } from "@/api";
import MenuItem from "@/components/MenuItem";
import { IMenuData } from "@/types";
import toast from "react-hot-toast";
import CustomSpinner from "@/components/Global/Spinner/CustomSpinner";
import CustomToast from "@/components/Global/Toast/CustomToast";

const MenuPage = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const mealsPerPage = 5;

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setIsLoading(true);
        const { categories } = await getAll();
        setIsLoading(false);
        setMeals(categories.slice(0, mealsPerPage));
        setSearch(categories.slice(0, mealsPerPage));
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const targetValue = formData.get("search") as string;

    const result = meals.filter((item: IMenuData) =>
      item.strCategory?.toLowerCase().includes(targetValue)
    );

    setSearch(result);
    setSearchInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className="pt-10 pb-8">
      {" "}
      <MaxWidthWrapper>
        <div className="flex">
          {" "}
          <h2 className="mx-auto font-Italianno font-normal text-[35px] mb-[20px] relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-mainYellow after:mt-1">
            Menu
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="mx-auto relative w-full max-w-md flex items-center mb-7"
        >
          <input
            type="text"
            value={searchInput}
            name="search"
            onChange={handleInputChange}
            className="shadow-inputShadow p-4 h-[32px] rounded bg-white w-full"
            placeholder="Search for a meal"
          />
          <div className="absolute top-0 right-[20%] h-[80%] w-px bg-mainYellow"></div>
          <button
            type="submit"
            className="absolute top-0 right-0 h-8 px-4  text-mainGrey rounded-r"
          >
            Search
          </button>
        </form>

        <ul className="flex flex-wrap justify-center gap-6 ">
          {" "}
          {isLoading ? (
            <CustomSpinner />
          ) : (
            search.length > 0 &&
            search?.map((item: IMenuData, idx) => (
              <MenuItem key={item?.idCategory} meals={item} idx={idx} />
            ))
          )}
        </ul>
      </MaxWidthWrapper>
      <CustomToast />
    </section>
  );
};

export default MenuPage;
