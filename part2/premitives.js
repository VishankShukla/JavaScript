// numbers
let number =5;
let anotherNumber = new Number(120);

console.log(anotherNumber.valueOf());

console.log(anotherNumber);
console.log(number);


console.log(typeof(number));//number
console.log(typeof(anotherNumber));//object

// Boolean
let isTrue = true;
let isFalse = false;

console.log(typeof(isTrue));
console.log(typeof(isFalse));

// null and undifined

let firstName ;
console.log(firstName); //undefined
console.log(typeof(firstName)); //undefined


let lastName = null;
console.log(lastName); //null
console.log(typeof(lastName)); //object


// String
let fName="Vishank";
let lName='shukla';
console.log(fName + lName);

let oldGreet = "hello"+" "+fName;
console.log(oldGreet);

let newGreet =`Hello ${fName} !`;
console.log(newGreet);


// Symbol 

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false









