import { getElementById } from "./getElement.js";
const loading = getElementById("loading");

export const isLoading = (status) => {
  status ? loading.classList.remove("hidden") : loading.classList.add("hidden");
};
