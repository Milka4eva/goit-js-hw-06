const categories = document.querySelectorAll('.item');
console.log("Number of categories: ", categories.length);

const titleAn = document.querySelectorAll('h2');
console.log("Category: ", titleAn[0].innerHTML);

const elementListAn = categories[0].querySelector('ul');
const elementItemsAn = elementListAn.children;
console.log("Elements: ", elementItemsAn.length);

const titlePr = document.querySelectorAll('h2');
console.log("Category: ", titlePr[1].innerHTML);

const elementListPr = categories[1].querySelector('ul');
const elementItemsPr = elementListPr.children;
console.log("Elements: ", elementItemsPr.length);

const titleTech = document.querySelectorAll('h2');
console.log("Category: ", titleTech[2].innerHTML);

const elementListTech = categories[2].querySelector('ul');
const elementItemsTech = elementListTech.children;
console.log("Elements: ", elementItemsTech.length);
