//  var myVar = "Alan said \ petter is learning \ ";
// console.log(myVar);

// var result;
// function myfun(a,b){
//     // var a = 5;
//     // var b = 5;
//     result = a+b;

//     return result;
// }

// myfun(5,3);
// console.log(result);

// var sum ;
// function addition(num1,num2){
//     sum = num1+num2;
//     return sum;
// }
// addition(10,10) ;
// console.log(sum);

//anoynmus finction
// (function (){
//     console.log("hello world");
// })();

// var res ;
// var t = 8;
// (function (){
//    for(let i=1;i<10;i++){
//        res=i*t;
//        console.log(`${t} * ${i} : ` + res);
//    }
// })(); // table using anyomus function

//returns arĀuments received
// function myFunction(a, b) {
//     console.log(arguments.length); // 2
// }
// myFunction(5,6);

// function myfun(a,b,c){
//     return arguments.length;
// }
// console.log(myfun(4,5,6));

//default paramaeter

// function add(a=5,b=2){
//     return a+b;
// }
// console.log(add());

// function sub(a=10,b=10){
//    return a-b;
// }
// console.log(sub(30,20));

//pure function(gives same input will always return the same output)

// var tax = 20;
// function calculateTax(productPrice){
//     return productPrice*(tax/100)+productPrice;
// }
// console.log(calculateTax(5000));

//Arrow function

// const hello = () => {
//     console.log("hello world");
// }
// hello();

// const hello = () => {
//     return "hello world" ;
// }
// console.log(hello());

// let add = (a,b) => {
//     return a+b;
// }
// console.log(add(5,6));

// const name = (val) => {
//     return "hello " + val ;
// }
// console.log(name("Shrikant"));

// const table = (t) => {
//     for(let i=1; i<=10; i++){
//         console.log(t*i);
//     }
// }
// table(7);

//Scope global Scope and local Scope

// var num = 10;
// (function(){
//     var num2 = 20;
//     console.log("inside function num :"  +num);
//     console.log("inside function num2 :"  +num2);
// }) () ;
// console.log("OutSide Function :" +num);
//console.log("OutSide Function num2 :" +num2); // cant access outside finction element

//Number

// var x = "sam";
// console.log(isNaN(x));
// var x = "8";
// console.log(isNaN(x));
//toSting
// var num = 10 ;
// console.log(num.toString());

//toFixed()

// var Decimal = 4.658;
// console.log(Decimal.toFixed(1));

// console.log(Number(true));
// console.log(Number(10));
// console.log(Number("10,33"));

// console.log(parseInt("10.33"));
// console.log(parseFloat("10.33"));

// console.log(Math.round(1.2));
// console.log(Math.sqrt(144));
// console.log(Math.pow(2,3));
// console.log(Math.random(0));
// console.log(Math.abs(-5.5));

//String
//Escape Characters
//  console.log("wr are here for u \"Shrikant\" please come here");
// console.log("hello \"Shrikant\" how are you");

//length
// let text = "shrikant";
// console.log(text.length);

//indexOf
// let str = "Shrikant Ashokrao Kanthale";
// console.log(str.indexOf("Ashokrao"));

//Search()
// let str = " Shri Sam Kshit Hannah";
// console.log(str.search("Kshit")); //10

// //Slice()
// let str = " Shri Sam Kshit Hannah";
// console.log(str.slice(10));
// console.log(str.slice(10,-7));

//subString()
// let str = " Shri Sam Kshit Hannah";
// console.log(str.substring(5,15));

//replace()
// let text = " hello Shrikant and hello Shrikant";
// let text1 = text.replace("Shrikant" , "sam");
// console.log(text1);

// let t1 = "sam sam";
// let t2 = t1.replace("sam" , "tom");
// console.log(t2);

//replaceAll()
// let t1 = "sam sam";
// let t2 = t1.replaceAll("sam" , "tom");
// console.log(t2);

//concat

// let t1 = "hello";
// let t2 = " Shrikant";
// // console.log(t1+t2); using + opperator
// let t3 = t1.concat(" ","Shrikant");
// console.log(t3);

// let t1 = "hi Sam";
// let t2 = " hows the josh !"
// console.log(t1.concat(" ","hows the josh !"));

//trim()
// let t1 = "  Shri kant  ";
// console.log(t1.trim());

//chartAt()
// let t1 = "SHRIKANT";
// console.log(t1.charAt(5));

//split()
// let t1 = "SHRIKANT";
// console.log(t1.split());

//Arrays

// const cars = ["tata" , "tesla" , "BMW"];
// console.log(cars);
// console.log(cars[1]);
// console.log(cars.length);
// console.log(cars.push("Audi"));
// console.log(cars);

// const cars = ["tata" , "tesla" , "BMW"];
// var text=0;
// for(let car of cars) {
//     text += cars;
// }
// console.log(text);

// const arr = [1,2,3,4,5]
// for(let i=0 ; i<=arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(arr);

//callBackFunction

// function greet(name,callme){
//     console.log('hi ' + name);
//     callme();
// }
// function callme(){
//     console.log("im in call back");
// }
// greet('Sam',callme);

// function greet(name,callback){
//     console.log('hi '+name);
//     callback();
// }
// function callme(){
//     console.log("im in call back");
// }
// greet("sam ",callme);

// function add(number,callback){
//     console.log("ADDITION = " + number + 8 );
//     callback();
// }
// function main(){
//     console.log("eND");
// }
// add(8,main);

// spreadOperator
// var a1 = [1,2,3];
// var a2 = [3,4,5];
// a1 = [...a2, ...a1];
// console.log(a1);

// var arr1 = ["Shri",22,"male"];
// var arr2 = ["hannah",26,"Female"];
// console.log(arr1 = [...arr1, ...arr2]);

// //Array
// const myArr = ["BMW","TATA","Tesla"];
// console.log(myArr.toString());  // convert array into string
// console.log(myArr.join());      // join array
// console.log(myArr.push(56,52)); // push element into array
// console.log(myArr);
// console.log(myArr.pop());   // remove element into array (last element will be remove from array)
// console.log(myArr);
// myArr.shift();               //remove element from array at the top of element
// console.log(myArr);
// myArr.unshift("BMW");
// console.log(myArr);            // add element into the array at top of array(start of array);
// myArr.splice(2, 1, "lemmon");  //add new element into the array at perticular index
// console.log(myArr);
// // var del = myArr.splice(0,1);   // u can also remove element using splice
// // console.log(del);
// let sli = myArr.slice(0,1);  //return perticular array element
// console.log(sli);
// console.log(myArr.push(12));
// console.log(myArr.sort()); // sort string and number first priorty number

// // const num = [40,100,200,37];
// // console.log(num.sort(function(a,b){return a-b}));

// console.log(myArr.reverse()); //return reverse array element of an array

//OBJECT

// var person = {
//     "name": "sam",
//     "age" : 22,
//     "location":"england",
// }
// // console.log(person);
// // console.log(person.location);          //call object using dot operator
// // console.log(person.location.concat(" in southpaw"));
// // console.log(person["name"]);           // call object using square bracket
// // person.job = "cricketer";       // add new key value pair into the existing object
// // console.log(person);
// person.friend = ["moien","tom","dhoni"]; // add new single key in multiple values
// //console.log(person);
// console.log(person.friend);
// console.log(person.friend[1]);           //return perticular ele from multiple values in key

// var loc = person["location"];           // return element using new variable
// console.log(loc);

// person.name = "sam curran";             //return modify values name
// console.log(person);

// var myObj = {
//     "name" : "DJ",
//     "lastName":"Bravo",

//     fullName : function (){
//         return this.name + " " + this.lastName;
//     }
// };
// console.log(myObj.fullName());

// var person = {
//     "name" : "faf",

//     fullname : function(){
//         return this.name + " " + "DuPlessies";
//     }
// };
// console.log(person.fullname());

// var person = {
//   name: "sam",
//   age: 22,
//   location: "england",
// };

// console.log(Object.keys(person));       //return all keys from object which is declared
// console.log(Object.values(person));     //return all values from object
// console.log(Object.entries(person));    //return all strucerses

//MAP

// var map = new Map();             // create Map
// map.set(1,"num1");              // set value in map (insert values in vap)
// map.set("Str","Shri");         
// map.set(true,"boolean")
// console.log(map.get(1));        // return value from map using key  
// console.log(map.get("Str"));    
// console.log(map.get(true));
// console.log(map.size);         // return size of map

// console.log(map.has(true))     // return value true or false if the key exist
// console.log(map.has("sam"));
// var hi = map.keys();           // return all key from map
// console.log(hi);
// var hii = map.values();
// console.log(hii);               // returns all values from map 
// var hiii = map.entries();
// console.log(hiii);              // return all enteries from map

// console.log(map.delete(1));     // delete properties from map
// var remove = map.clear();
// console.log(remove);       // remove everything from map        


//SET 

var set = new Set();     //creat set 
set.add(3);                 // add value in set integer string boolean
set.add("shri");
set.add(true);
set.add(3);                // repeated value will be add again but size will reamin same
console.log(set);
console.log(set.size);       // return size of set

set.add({name:"sam", lastName:"curran"});      // add key value pair in set
console.log(set);      

console.log(set.has(3));                // return value either true or fals if element present in set then true otherwise it will fales
set.clear();                           // it will remove element 
console.log(set.size);  

const num = [5,2,9,5];
let set1 = new Set(num);
const uniq = Array.from(set1);
console.log(uniq);

             












// const myStr ="I am a \"double quoted\" string inside \"double quotes\" "
// console.log(myStr);

// let  myStr = 'hey rahul "how\'s the josh"';
// console.log(myStr)

// var lastName = "Kanthale";
// var  firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName);

// var lastName = "kanthale" ;
// var lastNameLength = lastName.length;
// console.log(lastNameLength);

// var lastName = "Ada" ;
// var thirdLetterOfLastName = lastName[2];
// console.log("q33." + thirdLetterOfLastName);

// var lastName = "Kanthale" ;
// var lastLetter = lastName[lastName.length-1];
// console.log("Q34. " +lastLetter);

// var myAdjuctive = "hot";
// var myverb = "laughed";
// var myAdverb = "Silly";
// var sentence = "It was really " + myAdjuctive + ", and we " + myverb + " ourselves " +
// myAdverb + ".";
// console.log("Q36. " +sentence);

// var myOutfit = "outerSweter";
// function myFun(){
//     var myOutfit="Sweater";
//     console.log(myOutfit);
//     return myOutfit;
// }
// myFun();
// console.log(myOutfit);

// function  timesFive(mul){
//     return mul*5;
// }
// console.log(timesFive(5));

// function compare(myVal){
//     if(myVal ==  "12"){
//         return "Equal";
//     }
//     else{
//         return "unEqual";
//     }
// }
// console.log(compare(12));

// var arr = [10,20,30]
// function nextLine(items){
//     arr.push(items);
//     console.log(arr);
//     arr.shift();
//     console.log(arr.unshift(5));
//     return arr.shift();
// }

// nextLine(100)
// console.log(arr.shift(0));

// var arr = [10,20,30,40];
// function nextLine(items){
//     arr.push(items);
//     console.log(arr);
//     return arr.splice(1,1);

// }
// nextLine(100);
// console.log(arr.splice(0,1));

// let number = 99 ;
// const testnotEqual = (a) => {
//     if(number !== a){
//         return "notEqual";
//     }
//     else{
//         return "Equal";
//     }
// }
// console.log(testnotEqual(99));

// const testLessOrEqual = (num) => {
//     if(num<=24){
//         return "smaller than 24";
//     }
//     else{
//         return `greater than ${num}`;
//     }
// }
// console.log(testLessOrEqual(23));

// const testlogicalAnd = (val) => {
//     if(val>=25 && val<=50){
//         return "YES";
//     }
//     else {
//         return "NO";
//     }
// }
// console.log(testlogicalAnd(38));

// const testLogicalOr = (val) => {
//     if(val>=5 || val<=10){
//         return "inside" ;
//     }
//     else {
//         return "outside"
//     }
// }
// console.log(testLogicalOr(7));

// const searchString = (str) => {
//     let count = 0;

// }

// console.log(searchString(searchWord("The quick brown fox" ,"fox")))

// var myString = "Vs code is a popular code editor"

// const searchWord = (word) => {
// return myString.search(word);
// }

// console.log(searchWord("is"));

// var N = 18;

// if(N<0){
//     console.log("ERROR!! please enter a positive number");
// }
// else if(N==0){
//     console.log("ERROR!! please enter a greater than zero number");
// }
// else {
//     var i , sequence ;
//     for(i=1; i<=N; i++){
//         sequence = i*i;

//     }
//     console.log(sequence);
// }

// const seriesNum = (n) => {
//     if(n<0){
//         return "ERROR!! please enter a positive number";
//     }
//     else if(n==0){
//         return "ERROR!! please enter a greater than zero number";
//     }
//     else {
//         var i , sequence ;
//         for(i=1; i<=n; i++){
//             sequence = i*i;

//         }
//         return sequence ;
//     }
//    }

//    console.log(seriesNum(18));
// Write a JavaScript program to find the most frequent item of an array.

// File name suggestion: frequent.js

// TestData:

// console.log(frequent([3, ‘a’, ‘a’, ‘a’, 2, 3, ‘a’, 3, ‘a’, 2, 4, 9, 3])); // a ( 5 times )

// console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time )

// console.log(frequent([5, 2, 3, 1, 2, 4, 1])); // 2 ( 2 times ) 12:34 pm

// const frequent = (arr,num) => {
//     let count = 0 ;
//     let index = 0;

// }

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m;
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;

// const switchofStuff = (val) => {
//         switch (val) {
//           case 'a' :
//             console.log("apple");
//             break;
//           case 'b' :
//             console.log("bird");
//             break;
//           case 'c' :
//             console.log("cat");
//             break;
//           default:
//             console.log("Stuff");
//         }
//       }
// switchofStuff('a');
// switchofStuff('d');

// const isLess = (a, b) => {
//   console.log(a < b);
// };
// isLess(10, 15);
// isLess(15, 10);

// var testObj = {
//   hat: "ballcap",
//   shirt: "jerse",
// };
// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;
// console.log(hatValue);
// console.log(shirtValue);

// var testObj = {
//   entree: "hamburger",
//   drink: "water",
// };
// var entreeValue = testObj["entree"];
// var drinkValue = testObj["drink"];
// console.log(entreeValue);
// console.log(drinkValue);

// var myDog = {
//         name: "coder",
//         legs: 4,
//         tails: 1,
//         friends: ["men", "women", "child"],
// };
// myDog.name="Happy coder";
// console.log(myDog);

// var ourDog = {
//         "name": "Camper",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["everything!"]
// };
// ourDog.bark = "bow-wow";
// console.log(ourDog);
// const checkProp = (obj) => {
//   var checkObj = { gift: "pony", pet: "kitten", bed: "sleigh" };
//   console.log(checkObj.hasOwnProperty(obj));
// };
// checkProp("gift");

// var myMusic = [
//   {
//     "artist": "baillsh",
//     "title": "lovely",
//     "relese_year": 2018,
//     "format": ["CD", "PD"],
//   },
// ];
// var mus = myMusic.artist ;
// console.log(mus);

// var testObj = {
//   "hat": "ballcap",
//   "shirt": "jerse",
// };
// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;
// console.log(hatValue);
// console.log(shirtValue);

// var myStorage = {
//         "boxProperty" :{
//             "gloveBoxContents":{
//               "glove" : "maps"
//             },
//         },
//     };
// console.log(myStorage.boxProperty.gloveBoxContents.glove);

// var myTree = [
//   {
//     firstTrees: "flower",
//     tree: ["lotus", "chamily"],
//   },
//   {
//     sectondTree: "fruits",
//     tree: ["mango", "pine", "apple"],
//   },
// ];

// console.log(myTree[1].tree[1]);

// var myArray = [];
// var i = 5;
// while(i>=0){
//     myArray.push(i);
//     i--
// }
// console.log(myArray);

// var ourArray = [];
// var i = 0;
// while(i < 5) {
// console.log(ourArray.push(i));
// i++;
// }
// // console.log(ourArray);

// var myArray = [];
// for(let i = 1 ; i<=5 ; i++){
//     myArray.push(i);
// }
// console.log(myArray);

// var myArray = [];
// for(let i = 1 ; i<10 ; i+=2){
//     myArray.push(i);
// }
// console.log(myArray);

// var myArray = [];
// for(let i = 9 ; i>1 ; i-=2){
//     myArray.push(i);
// }
// console.log(myArray);

// var arr = [10, 9, 8, 7, 6];
// var total = 0;
// for (var i = 0; i < arr.length; i++) {
//      total+=arr[i];
// }
// console.log(total)

// var myArray = [2,5,6,7];
// var sum = 0;
// for(let i=0 ; i<myArray.length ; i++){
//     sum+=myArray[i];
// };
// console.log(sum);

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     var result=arr[i][j];
//   }
// }
// console.log(result);

// var mul;
// const multipleAll = (arr) => {
//       for(let i = 0;i<arr.length;i++){
//               for(let j = 0;j<arr[i].length;j++){
//                       console.log(arr[i]*[j]);
//               }
//       }
// }
// multipleAll([5],[10],[3]);
// // console.log(mul);

// const multipleAll = (arr) => {
//   var product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];;
//     }
//   }
//   console.log(product);
//   return product;
// };
// multipleAll([1, 2], [3, 4], [5, 6, 7]);

// function multipleAll(arr){
//         let product = 1;
//         for(let i=0;i<arr.length;i++){
//                 for(let j=0;j<arr[i].length;j++){
//                         product *= arr[i][j];
//                 }
//         }
//         console.log(product);
//         return product;
// }
// multipleAll([[1],[2],[3]]);

// for (let i = 0; i <= 10; i++) {
//   var randomWholeNumber = Math.random() * 10;
//   var result = Math.floor(randomWholeNumber);
//   console.log(result);
// }
// function call(min, max){
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }
// call(5,9);

// const convertToInteger = (str) => {
//   var INTEGER = parseInt(str);
//   return INTEGER;
// };
// console.log(convertToInteger("57"));
// console.log(convertToInteger("77"));
// console.log(convertToInteger("JamesBond"));

// function countup(n) {
//   if (n <= 10) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));
// console.log(countup(21));
// console.log(countup(10));

// function countDown(n) {
//   if (n > 10) {
//     return [];
//   } else {
//     const countArray = countDown(n + 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countDown(-1));
// console.log(countDown(10));
// console.log(countDown(5));

// console.log("first line \n\t \ second line \n third line");

// function countDown(n) {
//   if (n > 10) {
//     return [];
//   } else {
//     const countArray = countDown(n + 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countDown(-1));
// console.log(countDown(10));
// console.log(countDown(5));
