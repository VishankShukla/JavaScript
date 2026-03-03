console.log("Loop Challenges");

/*1. Write a `for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"]' and stops the loop when it finds '"chai"'.
Store all teas before '"chai" in a new array named selectedTeas'.*/

let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let it =0; it<teaCollection.length; it++){
    if(teaCollection[it]==="chai"){
        break;
    }
    selectedTeas.push(teaCollection[it]);
}
console.log(selectedTeas);

/*2. Write a `for' loop that loops through the array ["London", "New York", "Paris", "Berlin"]' and skips `"Paris"'.
Store the other cities in a new array named visitedCities'.*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for(let k=0;k<cities.length;k++){
    if(cities[k]==="Paris"){
        continue;
    }
    visitedCities.push(cities[k]);
}
console.log(visitedCities);

/*
3. Use a `for-of' loop to iterate through the array `[1, 2, 3, 4, 5]' and stop when the number '4' is found.
Store the numbers before `4' in an array named `smal lNumbers' .
*/
let numbers = [1,2, 3, 4, 5];
let smallnumbers = [];
for (const it of numbers) {
    if(it === 4){
        break;
    }
    smallnumbers.push(it);
}
console.log(smallnumbers);

/*
4. Use a `for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"]' and skip '"herbal tea"".
Store the other teas in an array named `preferredTeas'.
*/
let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas =[];
for (const it of tea) {
    if(it === "herbal tea"){
        continue;
    }
    preferredTeas.push(it);
}
console.log(preferredTeas);

/*
5. Use a `for-in' loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin" is
found and store all previous cities' populations in a new object named `cityPopulations .
let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};
*/

let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};

let cityNewPopulations = {};
for (const cities in citiesPopulation) {
    if(cities === "Berlin"){
        break;
    }
    cityNewPopulations[cities]=citiesPopulation[cities];
}
console.log(cityNewPopulations);

/*
6. Use a for-in' loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named 'largeCities .
let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
}
*/

let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
let largeCities = {};
for (const city in worldCities) {
  if(worldCities[city]<3000000){
    continue;
  }
  largeCities[city]=worldCities[city];
}
console.log(largeCities);

/*
7. Write a forEach loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]'.
Stop the loop when `"chai" is found, and store all previous tea types in an array named `availableTeas'.
*/

let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let foundChai = false;
teas.forEach(tea => {
    if(tea === "chai"){
        foundChai = true;
    }
    if (!foundChai) {
        availableTeas.push(tea);
    }
});
console.log(availableTeas);

/*
8. Write a `forEach' loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]'.
Skip `"Sydney" and store the other cities in a new array named `traveledCities'.
*/
let citicollection = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
citicollection.forEach(city => {
    if(city === "Sydney"){
        return;
    }
    traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a `for' loop that iterates through the array [2, 5, 7, 9]'.
Skip the value '7' and multiply the rest by 2. Store the results in a new array named `doubledNumbers'.
*/

let number = [2, 5, 7, 9];
let doubledNumbers = [];
for(let i=0;i<number.length;i++){
    if(number[i]===7){
        continue;
    }
    doubledNumbers.push(number[i]*2);
}
console.log(doubledNumbers);

/*
10. Use a `for-of' loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]'
and skip when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas'.
*/
let teaCollections = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const str of teaCollections) {
    if(str.length > 10){
        continue;
    }
    shortTeas.push(str);
}
console.log(shortTeas);



