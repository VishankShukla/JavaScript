// storeing second element in variable firstTea
let teaFlavors = new  Array("green tea" , "black tea","oolong tea");
let firstTea = teaFlavors[1];
console.log(firstTea);

// storeing third element in variable favoriteCity
let cities = ["London","Tokyo","Paris","New York"];
let favoriteCity = cities[2];
console.log(favoriteCity);

// changeing second element
let teaTypes = ["herbal tea","White tea","masala chai"];
teaTypes[1]="jasmine tea";
console.log(teaTypes);

// Push Method
let citiesVisited = ["Mumbai","Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited.length);
console.log(citiesVisited);

// remove last element from the array and store in differnt element
let teaOrders = ["chai","iced tea","matcha","earl grey"];
let lastOrder = teaOrders.pop();
console.log(lastOrder);
console.log(teaOrders);

// soft copy of the array(when the array change also the soft copy change )
let popularTea = ["green tea","oolong tea","chai"];
const softCopyTeas= popularTea;
popularTea.pop();
console.log(softCopyTeas);
console.log(popularTea);

// hard copy of the array
let topcities =["Berlin","Singapore","New York"];
let hardCopyCities =[...topcities];
// let hardCopyCities =topcities.slice();
topcities.pop();
console.log(hardCopyCities);
console.log(topcities);

// Merge Two Array
let europeancities =["Paris","Rome"];
let asiancities =["Tokyo","Bankok"];
let worldCities = europeancities.concat(asiancities);
console.log(worldCities);
console.log(typeof(worldCities));


// find length of the array and store "
let teaMenu =["masala chai","oolong tea","green tea"];
let menuLength = teaMenu.length;
console.log(menuLength);

// check element present in the array
let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

