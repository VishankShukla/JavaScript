// &&	AND	(x < 10 && y > 1) is true	
// ||	OR	(x === 5 || y === 5) is false	
// !	NOT	!(x === y) is true

// example
let isLogIn = true;
let isPaid = false;

console.log(isLogIn && isPaid);

console.log(isLogIn || isPaid);


let x = 6;
let y = 3;
let z = (x < 10 && y > 1)

console.log(z);


// The Nullish Coalescing Operator (??)
let name = null;
let text = "missing";
let result = name ?? text;

console.log(result);

