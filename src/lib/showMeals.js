export const showMeals = (data, parent, child) => {
  data.meals.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = child(meal);
    parent.appendChild(card);
  });
};
