function greet(name){
   console.log(`Hello ${name}!`);
}
greet("Vishank Shukla");

/*1. Write a function named `makeTea' that takes one parameter, `type0fTea', and returns a string like `"Making green tea" when called with '"green tea".
Store the result in a variable named `teaOrder'.*/
function makeTea(type0fTea){
   return `Making ${type0fTea}!`;
};
console.log(makeTea("Green Tea"));

/*2. Create a function named `orderTea' that takes one parameter, `teaType'. Inside this function, create another function named `confirmOrder' that returns a message like '"Order confirmed for chai"'.
Call `confirmOrder' from within `orderTea' and return the result. */

function orderTea(teaType){
   function confirmOrder(){
      return `Order confirmed for ${teaType}`
   }
   return confirmOrder();
}
console.log(orderTea("Black Tea"));

/*3. Write an arrow function named `calculateTotal' that takes two parameters: `price' and `quantity'. The
function should return the total cost by multiplying the `price and `quantity'.
Store the result in a variable named `totalCost'.*/

const calculateTotal = (price,quantity) => price*quantity;
let totalCost = calculateTotal(299,5);
console.log(totalCost);
