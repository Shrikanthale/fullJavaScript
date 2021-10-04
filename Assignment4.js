//Q1- Practice comparing different values
const compareEquility = (a, b) => {
  a === b ? console.log("Equal") : console.log("notEqual");
};
compareEquility(5, "5");

//Q2- Comparison with the Inequality Operator
let number = 99;
const testnotEqual = (a) => {
  if (number != a) {
    return "notEqual";
  } else {
    return "Equal";
  }
};
console.log(testnotEqual("99"));

//Q3- Comparison with the Strict Inequality Operator
let number = 99;
const testnotEqual = (a) => {
  if (number !== a) {
    return "Equal";
  } else {
    return "notEqual";
  }
};
console.log(testnotEqual(99));

//Q4- Comparison with the Greater Than Operator
let number = 100;
const testGreaterThan = (a) => {
  number > a
    ? console.log(`${number} is gerater than ${a}`)
    : console.log(`${a} is greater than ${number}`);
};
testGreaterThan(10);

//Q5- Comparison with the Greater Than Or Equal To Operator
const testGreaterThanorEqual = (num) => {
  num >= 100
    ? console.log(`${num} is greater than 100`)
    : console.log(`100 is greater than ${num}`);
};
testGreaterThanorEqual(20);

//Q6-Comparison with the Less Than Or Equal To Operator
const testLessOrEqual = (num) => {
  if (num <= 24) {
    return "smaller than 24";
  } else {
    return `greater than ${num}`;
  }
};
console.log(testLessOrEqual(23));

//Q7- Comparisons with the Logical And Operator
const testlogicalAnd = (val) => {
  if (val >= 25 && val <= 50) {
    return "YES";
  } else {
    return "NO";
  }
};
console.log(testlogicalAnd(38));

//Q8-Comparisons with the Logical Or Operator
const testLogicalOr = (val) => {
  if (val >= 10 || val <= 20) {
    return "inside";
  } else {
    return "outside";
  }
};
console.log(testLogicalOr(7));

//Q9-Introducing Else Statements
let num = 30;
if (num > 10) {
  console.log("Bigger than 10");
} else {
  console.log("lower than 10");
}

//Q10.Q11- Introducing Else If Statements

const testCondition = () => {
  if (num > 100) {
    return "greater than 100";
  } else if (num < 50) {
    return "greatter than 50";
  } else {
    return "Between 50 and 100";
  }
};
console.log(testCondition(200));

//Q12- Logical Order in If Else Statements

const orderMyLogic = (num) => {
  if (num < 5) {
    return `${num} is less than 5`;
  } else if (num < 10) {
    return `${num} is less than 10`;
  } else {
    return `greater than and equal to 10`;
  }
};
console.log(orderMyLogic(7));
console.log(orderMyLogic(9));
console.log(orderMyLogic(10));

//Q13-Chaining If Else Statements

const testSize = (num) => {
  if (num < 5) {
    return "tiny";
  } else if (num < 10) {
    return "small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "large";
  } else {
    return "Huge";
  }
};
console.log(testSize(3));
console.log(testSize(9));
console.log(testSize(13));
console.log(testSize(18));
console.log(testSize(26));

//Q14- Golf Code

function golfScore(par, strokes) {
  if (strokes == 1) {
      return "Hole-in-one!";
  } else if (strokes <= par - 2) {
      return "Eagle";
  } else if (strokes == par - 1) {
      return "Birdie";
  } else if (strokes == par) {
      return "Par";
  } else if (strokes == par + 1) {
      return "Bogey";
  } else if (strokes == par + 2) {
      return "Double Bogey";
  } else {
      return "Go Home!";
  }
}
console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

//Q15-Selecting from Many Options with Switch Statements

const caseInSwitch = (val) =>{
  switch(val) {
    case 1 :
      console.log("alpha") ;
      break;
    case 2 :
        console.log("beta");
        break;
    case 3:
      console.log("gamma");
      break;
    case 4:
      console.log("delta");      
  }
}
caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);

//Q16-Adding a Default Option in Switch Statements

const switchofStuff = (val) => {
  switch (val) {
    case 'a' :
      console.log("apple");
      break;
    case 'b' :
      console.log("bird");
      break;
    case 'c' :
      console.log("cat");
      break;
    default:
      console.log("Stuff");  
  }
}
switchofStuff('a');
switchofStuff('b');
switchofStuff('c');
switchofStuff('j');

//Q17- Multiple Identical Options in Switch Statements
const sequentialSizes = (val) => {
  switch (val){
    case 1:
    case 2:
    case 3:
      console.log("Low");
      break;
    case 4:
    case 5:
    case 6:
      console.log("Med");
      break;
    case 7:
    case 8:
    case 9:
      console.log("High");         
  }
}
sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);

//Q18- Replacing If Else Chains with Switch
const chainToSwitch = (val) => {
  switch (val){
    case "bob" :
      console.log("marley");
      break;
    case 42:
      console.log("Answer");
      break;
    case 1:
      console.log("#1");
      break;
    case 99:
      console.log("Missed me by this match");
      break;    
    case 7:
      console.log("ate nine");
      break;
    case "john":
      console.log("");
      break;
    case 156:
      console.log("");
  }
}
chainToSwitch("bob");
chainToSwitch(42);
chainToSwitch(1);
chainToSwitch(99);
chainToSwitch(7);
chainToSwitch("john");
chainToSwitch(156);

//Q19- Returning Boolean Values from Functions
const isLess = (a,b) => {
  return a < b;
}
console.log(isLess(10,15));
console.log(isLess(15,10));

//Q20-Return Early Pattern for Functions

const myFun = (num1, num2) => {
  if(num1>0 || num2<0){
      return "undefined" ;
  }
  else{
    return num+num*num2;
  }
} 
console.log(myFun(2,2));
console.log(myFun(-2,2));
console.log(myFun(2,-2));
console.log(myFun(2,8));
console.log(myFun(3,3));
console.log(myFun(0,0));