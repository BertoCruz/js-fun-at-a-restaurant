
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

function refundOrder(orderNum, deliveryOrders){
  var index;

  for(var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNum){
      var index = i;
    }
  }

  deliveryOrders.splice(index, 1);
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var items = [];

  for(var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(", ");
}

// I KNOW I CAN MAKE THIS ONE BETTER! I WILL WANT TO
// COME BACK TO THIS ONE TO REFACTOR.
function searchOrder(deliveryOrders, item) {
  var question = [];

  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === item){
      question.push(deliveryOrders[i].item)
    }
  }

  return question.includes(item);
}
