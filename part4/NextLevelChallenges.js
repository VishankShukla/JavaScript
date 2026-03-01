console.log("Loop Challenges");

/*1. Write a `for' loop that loops through the array
["green tea", "black tea", "chai", "oolong tea"]' and
stops the loop when it finds '"chai"'.
Store all teas before '"chai" in a new array named
selectedTeas'.*/

let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let it =0; it<teaCollection.length; it++){
    if(teaCollection[it]==="chai"){
        break;
    }
    selectedTeas.push(teaCollection[it]);
}
console.log(selectedTeas);

