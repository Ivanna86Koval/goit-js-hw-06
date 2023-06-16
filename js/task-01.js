/*const categoriesEl = document.querySelector("#categories");
const numbersOfCategories = categoriesEl.children.length;
console.log(`Number of categories: ${numbersOfCategories}`);

const x = [...categoriesEl.children].forEach((el) => {
  const titleOfCategory = el.children[0].textContent;
  const totalEl = el.children[1].length;

  console.log("Category:", titleOfCategory);
  console.log("Elements:", totalEl);
});*/

const ul = Array.from(document.querySelector("#categories").children);
for (let elem of ul) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
}

/*const categoriesEl = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesRef = document.querySelectorAll("h2");
arrayTitlesCategoriesRef.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});*/
