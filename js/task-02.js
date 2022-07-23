const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const liItem = () => {
  for (const element of ingredients) {
    const newItem = document.createElement("li");
    newItem.textContent = element;
    newItem.classList.add("item")
    list.append(newItem);
  }
};
console.log(liItem());