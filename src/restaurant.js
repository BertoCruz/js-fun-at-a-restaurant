

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}

function createRestaurant(name) {
  return {
    name : name,
    menus : {
      breakfast : [],
      lunch : [],
      dinner : []
    }
  };
}

function addMenuItem(pizzaRestaurant, item) {

      if(!pizzaRestaurant.menus[item.type].includes(item)){

        return pizzaRestaurant.menus[item.type].push(item);
      }
}
