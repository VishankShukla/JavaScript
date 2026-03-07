// Parent object
let computer = {
    cpu: 14
};

// Child object
let lenvo = {
    screen: "HD",

    // Setting prototype of lenvo to computer
    // This means lenvo can access properties of computer
    __proto__: computer
};

// Printing the prototype of lenvo (which is computer)
console.log("lenvo", lenvo.__proto__);



// Generic car object (parent)
let GenricCar = {
    tyers: 4
};

// Tesla object (child)
let tesla = {
    Driver: "AI"
};

// Setting prototype of tesla to GenricCar
// Now tesla inherits properties from GenricCar
Object.setPrototypeOf(tesla, GenricCar);

// Getting prototype of tesla (which is GenricCar)
console.log("tesla", Object.getPrototypeOf(tesla));


// Because of prototype inheritance
// tesla can access tyers even though it is not inside tesla
// console.log(tesla.tyers); // 4