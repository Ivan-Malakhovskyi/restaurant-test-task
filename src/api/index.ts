import axios from "axios";

const BASE_URL = `https://www.themealdb.com/api/json`;

export const getAll = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/v1/1/categories.php`);

    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const findByQuery = async (query: string) => {
  try {
    const { data } = await axios.get(`/v1/1/search.php?s=${query}`);
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};
