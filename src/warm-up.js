// Read the instructions for each of the warm up exercises carefully. This may
// seem repetitious or pedantic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.

//------------------------- Variables -------------------------//

console.log("V A R I A B L E S\n")
// Initialize three new variables, "food", "type" and "inStock", and assign values to them with
// a food's name, type and number of items in stock.

var food = "Tacos";
var type = "Entree";
var inStock = 14;
var isFavorite = false;
var shouldOrderMore = false;


console.log("My initial inStock is " + inStock);

// Reassign (not initialize) your "inStock" variable from above. We got a new shipment!
// Use a built in math operator to make
// the inStock count double what it currently is.

function updateInStock() {
  inStock = inStock * 2;
  console.log("We doubled our stock to " + inStock);
}

updateInStock();
console.log("---------------------\n")

// Reassign (not initialize) your "inStock" variable from above. You got hungry and needed a snack!
// Use a built in math operator to decrement the inStock count by 1.
function eatSnack(){
  inStock = inStock - 1;
  console.log("I got hungry! so we're down 1, we're now at " + inStock);
}

eatSnack();
console.log("---------------------\n")

// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the food you chose is your favorite food or not

function findMyFavorite(food) {
  if(food === "Rice Bowls") {
    isFavorite = true;
    console.log(`YOP! ${food}!!`);
  } else {
    isFavorite = false;
    console.log(`Blegh, ${food}! Get this out of my face!`);
  }
}

findMyFavorite("Pizza");
findMyFavorite("Rice Bowls");
console.log("---------------------\n")

// Create a new variable named "shouldOrderMore", and use a comparison operator to
// assign a boolean value to this variable. If "inStock" is less than 20, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator.

function reOrder() {
  if(inStock < 20) {
    shouldOrderMore = true;
    console.log("OH! We should definitely restock!")
  } else if(inStock >= 20) {
    shouldOrderMore = false;
    console.log("Nope, our stock is looking good!")
  }
}

reOrder();
console.log("---------------------")

//------------------------- Conditionals -------------------------//

// Express the following in code: If the variable "stockCount" is greater or equal to 1, log
// the statement 'I'm going to eat some [food]!', otherwise, log the statement
// 'We need to get some more [food].'
console.log("C O N D I T I O N A L S\n")

var stockCount = 5;

function checkStockCount(){
  if(stockCount >= 1) {
    console.log(`I'm going to eat some ${food}!`);
  } else if(stockCount < 1) {
    console.log(`We need to get some more ${food}!!`);
  }
}

checkStockCount();
console.log("---------------------\n")

// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite food is [food]!'. Otherwise, log the
// statement 'I recently ate [food]'. In either case, the value stored in
// the "food" variable should be included in the logged statement.
if(isFavorite === true){
  console.log(`My favorite food is ${food}!`);
} else {
  console.log(`I recently ate ${food}`);
}

console.log("---------------------")

//------------------------- Arrays -------------------------//
console.log("A R R A Y S\n")

// Create a new variable "vegetables" and assign it to an Array of 5 different
// vegetables, represented by their names as Strings.

var vegetables = ["Broccoli", "Carrots", "Onions", "Bell Peppers", "Asparagus"];

// Write the code to access the 3rd element of the Array, using bracket
// notation.

console.log(vegetables[2]);

// Create a new variable "fruits" and assign it to an Array of 7
// different fruits.

var fruits = ["Cucumbers", "Tomatoes", "Avocados", "Pomegranate", "Mangos", "Plantains", "Dragon Fruit"];

// Write the code to access the 5th element of the array, using bracket notation.

console.log(fruits[4]);
console.log("---------------------")

//------------------------- Objects -------------------------//
console.log("O B J E C T S\n")
// Create a new variable called "groceryStore" and assign to it an object literal with two
// keys: name, and isOpen. The value for name should the string 'King Soopers'
// (or your favorite grocery store), and
// the value for isOpen should be true. Which other key value pairs would make sense to add
// to this object?

var groceryStore = {
  name : "Dani",
  isOpen : false
};

console.log(groceryStore.name);
console.log(groceryStore.isOpen);

// Write the code to add the key of location, with the value of 'Denver, Colorado'. Use dot
// notation to do this. DO NOT modify your code from above.
groceryStore.location = "Denver, CO";
console.log(groceryStore.location);
