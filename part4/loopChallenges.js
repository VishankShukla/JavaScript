// while loop sum of 5 number
let i=1,sum=0;
while(i<=5){
    sum+=i;
    i++;
}
console.log(sum);

// while loop that count down 5 to 1 ; store in array named countDown
let CountDown=[];
let j=5;
while(j>0){
    CountDown.push(j);
    j--;
}
console.log(CountDown);

// do while loop prompts a user to enter their favorite tea type until they enter "Stop";
/*let teaCollection = [];
let tea;
do {
    tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
    if(tea !== "stop"){
        teaCollection.push(tea);
    }
    
} while (tea !== "stop");
console.log(teaCollection);
*/
// add 1 to 3 using do while loop
let resultAdd =0;
let k =1;
do {
    resultAdd+=k;
    k++;
} while (k<=3);
console.log(resultAdd);

// multiply the every element of the array using for loop by 2
let newCollection =[6,3,5,3];
let multipliedNumber = [];
for(let it=0;it<newCollection.length;it++){
    multipliedNumber.push(newCollection[it]*2);
}
console.log(newCollection);
console.log(multipliedNumber);

