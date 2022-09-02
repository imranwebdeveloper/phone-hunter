export const mealCard = (meal) => {
  const card = `<div class="bg-white shadow border rounded max-w-sm ">
          <div>
            <img
              class=""
              src=${meal.strMealThumb}
              alt=""
            />
          </div>
          <div class="py-2">
            <p class="text-gray-800 text-center font-bold py-1">
              ${meal.strMeal.slice(0, 20)}
            </p>
            <p class="text-black px-2 text-sm">
              ${meal.strInstructions.slice(0, 60)}
            </p>
          </div>
          <div class="flex justify-center mb-4">
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 rounded px-6 py-1 meals-btn"
              data-meal-id=${meal.idMeal}
            >
              Read more
            </button>
          </div>
        </div> `;
  return card;
};
