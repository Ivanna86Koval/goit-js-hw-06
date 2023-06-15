const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const arrayIngredients = ingredients.map((el) => {
  const itemEl = document.createElement("li");

  itemEl.innerHTML = `${el}`;
  itemEl.classList.add("item");

  return itemEl;
});
ingredientsEl.append(...arrayIngredients);
console.log(ingredients);
