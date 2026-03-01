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



