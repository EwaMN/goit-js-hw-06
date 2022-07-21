const numberOfCategories = document.querySelectorAll("ul#categories>li").length;
const Category = document.querySelectorAll("h2");
const Elements = document.querySelectorAll(".item>ul");

console.log("Number of categories:",numberOfCategories);
for (let i = 0; i < numberOfCategories; i++) {
    console.log("Category:", Category[i].textContent);
    console.log("Elements:", Elements[i].children.length);
} 