import { isLoading } from "./loading.js";

export const useFetch = async (url, cb) => {
  isLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
  } catch (error) {
    console.log(error);
  }
  isLoading(false);
};
