function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name : itemName,
    price : itemPrice,
    type : itemType
  };
}

function addIngredients(topping, ingredients) {
  if(ingredients.includes(topping)){
    ingredients.pop();
  }
    ingredients[ingredients.length] = topping;
    console.log(ingredients);
    return ingredients;
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  var dec = (price/100)*10;
  return price - dec;
}

function createRecipe(title, ingredients, menuItemType) {
return {
  title : title,
  ingredients : ingredients,
  type : menuItemType
};
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
