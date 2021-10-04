//Q1- Build JavaScript Objects
var myDog = {
  name: "chiku",
  legs: 4,
  tails: 1,
  friends: ["men", "women", "child"],
};

//Q2- Accessing Object Properties with Dot Notation
var testObj = {
  hat: "ballcap",
  shirt: "jerse",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

//Q3- Accessing Object Properties with Bracket Notation
var testObj = {
  entree: "hamburger",
  drink: "water",
};
var entreeValue = testObj["entree"];
var drinkValue = testObj["drink"];
console.log(entreeValue);
console.log(drinkValue);

//Q4- Accessing Object Properties with Bracket Notation

var testObj = {
  entree: "hamburger",
  drink: "water",
};
var entreeValue = testObj["entree"];
var drinkValue = testObj["drink"];
console.log(entreeValue);
console.log(drinkValue);

//Q5- Accessing Object Properties with Variables

var myObj = {
  playerNumber: 16,
  playersName: "motana",
};
var player = "playersName";
console.log(myObj[player]);

//Q6- Updating Object Properties

var myDog = {
  name: "coder",
  legs: 4,
  tails: 1,
  friends: ["men", "women", "child"],
};
myDog.name = "Happy coder";
console.log(myDog);

//Q7-Add New Properties to a JavaScript Object

var myDog = {
  name: "coder",
  legs: 4,
  tails: 1,
  friends: ["men", "women", "child"],
};
myDog.bark = "woof";
console.log(myDog);

//Q8-Delete Properties from a JavaScript Object

var myDog = {
  name: "coder",
  legs: 4,
  tails: 1,
  friends: ["men", "women", "child"],
};
delete myDog.tails;
console.log(myDog);

//Q9- Using Objects for Lookups

var phoneticLookup = {
  alpha: "adams",
  bravo: "Bostan",
  charli: "chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank",
  "": undefined,
};

//Q10- Testing Objects for Properties

var checkObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
  city: "seattle",
};
checkObj.hasOwnProperty("gift")
  ? console.log(checkObj["gift"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("pet")
  ? console.log(checkObj["pet"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("house")
  ? console.log(checkObj["house"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("city")
  ? console.log(checkObj["city"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("district")
  ? console.log(checkObj["district"])
  : console.log("string Not Found");
var checkObj2 = {
  pet: "kitten",
  bed: "sleigh",
};
checkObj2.hasOwnProperty("gift")
  ? console.log(checkObj2["gift"])
  : console.log("string Not found");

/*const checkProp = (obj) => {
  var checkObj = { gift: "pony", pet: "kitten", bed: "sleigh" };
  console.log(checkObj.hasOwnProperty(obj));
};
checkProp("gift");*/

//Q11- Manipulating Complex Objects

var myMusic = [
  {
    artist: "baillsh",
    title: "lovely",
    relese_year: 2018,
    format: ["CD", "PD"],
  },
];

//Q12- Accessing Nested Objects

var myStorage = {
  boxProperty: {
    gloveBoxContents: {
      glove: "maps",
    },
  },
};
console.log(myStorage.boxProperty.gloveBoxContents.glove);

//Q13- Accessing Nested Arrays

var myTree = [
  {
    firstTrees: "flower",
    tree: ["lotus", "chamily"],
  },
  {
    sectondTree: "fruits",
    tree: ["mango", "pine", "apple"],
  },
];

console.log(myTree[1].tree[1]);

//Q14- Record Collection
var checkObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
  city: "seattle",
};
checkObj.hasOwnProperty("gift")
  ? console.log(checkObj["gift"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("pet")
  ? console.log(checkObj["pet"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("house")
  ? console.log(checkObj["house"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("city")
  ? console.log(checkObj["city"])
  : console.log("string Not Found");
checkObj.hasOwnProperty("district")
  ? console.log(checkObj["district"])
  : console.log("string Not Found");
var checkObj2 = {
  pet: "kitten",
  bed: "sleigh",
};
checkObj2.hasOwnProperty("gift")
  ? console.log(checkObj2["gift"])
  : console.log("string Not found");

//Q15- Iterate with JavaScript While Loops

var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

//Q-16 Iterate with JavaScript For Loops

var myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}
console.log(myArray);

//Q17- Iterate Odd Numbers With a For Loop

var myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);

//Q18- Count Backwards With a For Loop

var myArray = [];
for (let i = 9; i > 1; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

//Q19-Iterate Through an Array with a For Loop

var myArray = [2, 5, 6, 7];
var sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log(sum);

//Q20-Iterate Through an Array with a For Loop

var myArray = [2, 5, 6, 7];
var sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log(sum);

//Q21- Nesting For Loops

function multipleAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  console.log(product);
  return product;
}
multipleAll([[1], [2], [3]]);
multipleAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
multipleAll([
  [5, 1],
  [0.2, 4, 0.5],
  [3, 9],
]);

//22  Replace Loops using Recursion

const sum = (arr , n) => --n<0 ? 0 :sum(arr,n) +arr[n]
console.log(sum[1], 0);
console.log(sum[2,3,4],1);
console.log(sum[2,3,4,5],3);

//Q23- Generate Random Fractions with JavaScript

var randomFraction = Math.random();
console.log(rendomFraction);

//Q24- It's great that we can generate random decimal numbers, but it's even more useful if we
//use it to generate random whole numbers.

for (let i = 1; i < 10; i++) {
  //logic part

  var randomFraction = Math.random() * 10;
  var randomWholeNumber = Math.floor(randomFraction);
  console.log(randomWholeNumber);

}

//Q25-Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax){
  console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + min);
  }
randomRange(5,9);

//Q26- Use the parseInt Function

const  convertToInteger = (str) => {
  var INTEGER = parseInt(str);
  return INTEGER;
}
console.log(convertToInteger("57"));
console.log(convertToInteger("77"));
console.log(convertToInteger("jamesBound"));

//Q27 Use the Conditional (Ternary) Operator

function checkEqual(num1 , num2){
  return a==b?"Equal" : "Not Equal";
}
console.log(checkEqual(1,2));
console.log(checkEqual(1,1));
console.log(checkEqual(1,-1));

//Q28- Use Multiple Conditional (Ternary) Operators

function checkSign(num){
  return (num == 0)? "Zero" : (num>0) ? "Positive" : "Negitive"
}
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

//Q29- Use Recursion to Create a Countdown

function countDown(n) {
  if (n > 10) {
    return [];
  } else {
    const countArray = countDown(n + 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countDown(-1));
console.log(countDown(10));
console.log(countDown(5));

//Q30- Use Recursion to Create a Countdown

function countDown(n) {
  if (n > 10) {
    return [];
  } else {
    const countArray = countDown(n + 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countDown(-1));
console.log(countDown(10));
console.log(countDown(5));

// Q31- Use Recursion to Create a Range of Numbers

const rangeOfNumber = (startNum, endNum) => {
  if (startNum === endNum) {
    return [startNum];
  }else{
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6,9));
console.log(rangeOfNumbers(4, 4));

//Q32- Use Recursion to Create a Countdown

function countDown(n) {
  if (n > 10) {
    return [];
  } else {
    const countArray = countDown(n + 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countDown(-1));
console.log(countDown(10));
console.log(countDown(5));

// Q33- Use Recursion to Create a Range of Numbers

const rangeOfNumber = (startNum, endNum) => {
  if (startNum === endNum) {
    return [startNum];
  }else{
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6,9));
console.log(rangeOfNumbers(4, 4));
