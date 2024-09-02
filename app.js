
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

console.log(result); 


//function
const samip1= function (name) {
    console.log(`Nepal ${name}`);
}
samip1('Samip');
//Arrow function
const samip=(name)=>{
    console.log(`Nepal ${name}`);
}
//if single function has single code then can be written as
//const samip=(name)=>console.log(`Nepal ${name}`);
//if you donot use parentthesis then {} and return should use 
//if you  use parentthesis then not {} and return should use 

samip('Samip');
//implicit return
let res;
const sum = (a, b) => {
     res = a + b;
    return res;
  };
 sum(2,3);
console.log(res);
 
//Immediate invoked
((name)=>{
    console.log(`Hello ${name}`);
    
})("Samip")

//filter and map
 let newnumber=[1,2,3,4,5,6,7,8]
 let secondnumber=newnumber.filter((num)=>num<5);
 console.log(secondnumber);
  let thirdnumber=newnumber.map((num)=>num+10);
 console.log(thirdnumber);

 let fourthnumber=newnumber.reduce((acc,curr)=>{
    console.log(`acc:${acc} curr:${curr}`);
   return acc+curr

});

 console.log(fourthnumber);

 //Immutablility and mutability
//Immutability
 let name="samip";
 let name1=name;
 name2="Nepal";
 console.log(name);
 console.log(name1);
 //Mutability
 let per={
    name2:"samip",
    age:22

 }
 let person3=per;
 person3.name2="samita";
 console.log(per);
 console.log(person3);

 //destucturinig in array or using in function
 const arr=[1,2,3,4,5];
 const [a,b,c]=arr;
 console.log(a);
 console.log(b);
 console.log(c);

 const array=["js","j","py","c"];
 const [d,e, ...f]=array;
 console.log(d);//js
 console.log(e);//j
 console.log(f);//[ 'py', 'c' ]

 function sums(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sums(1, 2, 3)); // Output: 6

 //destucturinig in object

  const person={
    firstname:"Samip",
    lastname:"Nepal",
    age:19
  }

  const {firstname,lastname,city="Ktm",age}=person;
  console.log(firstname);
 console.log(lastname);
 console.log(age);
 console.log(city);

 ////destucturinig in function

 const print=({lastname,firstname})=>(
    console.log(firstname+` `+lastname));
 print(person);

 

 

 
 


















