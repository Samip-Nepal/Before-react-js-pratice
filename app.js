
//Arrays
const fruits=[];
fruits.push("banana","apple","mango","Strawberry", "Cherry");
console.log(fruits.length);
console.log(Object.keys(fruits));
//can be written as
fruits.forEach((items,index) => {
    console.log(`${index}:${items}`);
});
fruits[3]="lemon";
console.log(`Hello the name of fruits ${fruits}.`);
//array to string
const fruitsstring=fruits.join(` ${Object.keys(fruits)}`);
console.log(fruitsstring);
//finding the index
const hello=fruits.indexOf("apple");
console.log(hello);
//check if the array contains the iteams or not
let hi=fruits.includes("apple");
console.log(hi);
fruits.indexOf("Banana") !== -1; // true
//push help to push iteam at last and pop remove from last

//To remove,add,replace mutliple item from last
// last=4;
/* let removeitems=fruits.splice(last);
 console.log(fruits);
 console.log(removeitems);*/

 //To remove mutliple items
 console.log(fruits);
 let removeitems=fruits.splice(3,5);
 console.log(removeitems);
//shift is use to remove the first iteam and unshift is use to add items i first

// To add multiple item two or more array
const fruit =["2apple","2banana"];
console.log(fruits.concat(fruit));

fruits.forEach((items,index,array) => {
    console.log(items,index);
});

const input=[];
 for(let x=1;x<=10;x++){
input.push([1*x,x*2,x*3,x*4,x*5]);
}
console.table(input);


//exec is use for match value
let text = "The quick brown fox jumps over the lazy dog";
let regex = /quick/;
let result = regex.exec(text);

console.log(result); // ["quick", index: 4, input: "The quick brown fox jumps over the lazy dog", groups: undefined]




















