import { useFetch } from "./lib/useFetch.js";
import { getElementById } from "./lib/getElement.js";
import { mealCard } from "./components/mealCard.js";
import { detailsAPI, mealsAPI, searchMealsAPI } from "./lib/API.js";
import { showMeals } from "./lib/showMeals.js";

/* --------------------------- HTML Document Model -------------------------- */
const searchInput = getElementById("search-input");
const searchBtn = getElementById("search-btn");
const mealSection = getElementById("meal-section");
/* ------------------------------- Load Meals ------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
  const getMeals = (data) => showMeals(data, mealSection, mealCard);
  useFetch(mealsAPI, getMeals);
});
/* ------------------------------ Search Meals ------------------------------ */
searchBtn.addEventListener("click", function () {
  const searchValue = searchInput.value;
  useFetch(searchMealsAPI + searchValue, searchMeals);
});
window.addEventListener("keydown", function (e) {
  if (e.key != "Enter") return;
  const searchValue = searchInput.value;
  useFetch(searchMealsAPI + searchValue, searchMeals);
});
const searchMeals = (data) => {
  mealSection.innerHTML = "";
  showMeals(data, mealSection, mealCard);
};
/* ---------------------------- Show meal details --------------------------- */
mealSection.addEventListener("click", function (e) {
  const mealId = e.target.getAttribute("data-meal-id");
  if (!mealId) return;
  useFetch(detailsAPI + mealId, showDetails);
});

const showDetails = (data) => {
  console.log(data);
};

// getElementById("lk").addEventListener("click", function (e) {});
// getElementById("kl").getAttribute;
