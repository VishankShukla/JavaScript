function Person(name ,age , add){
    this.name = name;
    this.age = age;
    this.add = add;
}
let firstPerson = new Person("xyz",20,"world");
let secondPerson = new Person("abc",21,"anotherWorld");

console.log(firstPerson);
console.log(secondPerson);
// Person { name: 'xyz', age: 20, add: 'world' }
// Person { name: 'abc', age: 21, add: 'anotherWorld' }

function Car (make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota","Camry");
let myNewCar = new Car("Tata","Safari");

console.log(myCar);
console.log(myNewCar);
// Car { make: 'Toyota', model: 'Camry' }
// Car { make: 'Tata', model: 'Safari' }

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is cup of ${this.type}`
    }
}
let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea.describe());//this is cup of Lemon Tea

function Animal(species){
    this.species = species; 
}
Animal.prototype.sound = function(){
    return `${this.species} make a sound`;
}
let Dog = new Animal("Dog");
console.log(Dog); //Animal { species: 'Dog' }
console.log(Dog.sound()); //Dog make a sound

let Cat = new Animal("Cat");
console.log(Cat); //Animal { species: 'Cat' }
console.log(Cat.sound()); //Cat make a sound




