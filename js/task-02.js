const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');
ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  list.append(listItem);
});

