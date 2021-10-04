// 1. Comment your JavaScript Variables :

// this is single iline comment
/* this is 
  multiple line
  comment */


// 2. Declare JavaScript Variables : 

var name ;
var number ;
var myName ;

// 3 Storing value with the Assignment Operator

var a ;   //declaration
a = 5 ;   //initalize 

var name = "sam"; //dynamic intilize

//4 . Assigning the value of  one variable to another 

var a ;
a = 5;
var b;
num2 = a;

//5. initializing variables with assignment operators

var numbers = 9;

//6. Understanding uninitialized variables :

var a=5;
var b=10;
var c="i am a";

//7. understanding case Sensitive in variables :

var myName = "sam";
var myname = "sam";

//8. Add two numbers with javascript 

var add ;
add = 5 + 6 ;
console.log("q8 : " + add);

//9. Subtract one number from another number 

var sub ;
sub = 18 - 12 ;
console.log("q9 : " + sub);

//10. Multiple two numbers with JavaScript : 

var multi;
multi = 13*13;
console.log("q10 : " + multi);

//11. Divide one number with JavaScript :

var div ;
div = 12/6;
console.log("q11 : " + div);

//12. increment a number with javascript : 

var i;
i = 5 ;
i++;
console.log("q12 : " +  i);

//13. Decrement a number with javaScript : 

var i ;
i = 5 ;
i-- ;
consconsole.log("q13 : " + i);

//14. create Decimal number with javaScript : 

var myDecimal = 5.7 ;

//15. Multiply two decimals with JavaScript : 

var num1 = 2.5 ;
var num2 = 2.0 ;

var result ;
result = num1*num2 ;
console.log("q15 : " +result.toFixed(1));

//16. Divide one Decimal by Another with JavaScript :

var num1 = 5.0 ;
var num2 = 2.5 ;
var result = num1 / num2 ;

console.log("q16 : " + result);

//17. Finding a remainder in javascript :

var a = 11;
var b = 3;

var remainder ;

remainder = a % b ; 

console.log("q17 : " + remainder);

//18. compound Assighnment with augmented Addition :

// var addNum = 10 ;
// addNum += 20 ;
// console.log("q18 : " +addNum);

a+=5;
b+=5;
c+=5;
console.log("q18 : " + a,b,c);

//19. compound Assighnment with augmented subtaction :

// var subNum = 30 ;
// subNum -= 20 ;
// console.log("q19 : " +subNum);

a-=5;
b-=5;
c-=5;
console.log("q18 : " + a,b,c);

//20. compound Assighnment with augmented Multiplication :

// var mulNum = 5 ;
// mulNum *= 4 ;
// console.log("q20 : " + mulNum);

a*=5;
b*=5;
c*=5;
console.log("q18 : " + a,b,c);

//21. compound Assighnment with augmented Division :

// var divNum = 15 ;
// divNum /= 5 ;
// console.log("q21 : " +divNum);

a/=5;
b/=5;
c/=5;
console.log("q19 : " + a,b,c);

//22. Declare String variables : 

var myFirstname = "Shrikant" ;
var myLastName = "kanthale" ;

//23. Escaping literal in staring :
const myStr ="I am a \"double quoted\" string inside \"double quotes\" "
console.log(myStr);

//24. Quoting Strings with Single Quotes:
let  myStr = 'hey rahul,"how\'s the josh"';
console.log(myStr);

//25. Escape Sequences in Strings:

console.log("first line\n\tsecond line\nthird line");

//26.Concatenating Strings with Plus Operator
var myStr = "this is the start " + " this is the end ";
console.log(myStr);

//27. Concatenating Strings with the Plus Equals Operator:

var myStr = "this is the first sentence";
myStr += "this is the Second sentence";
console.log(myStr);

//28.Constructing Strings with Variables:

var myName = "shrikant";
var mystr = "my Name is " + myName + " and i am well";
console.log(mystr);

//29.  Appending Variables to Strings:
var someAdjective = "shrikant";
var myStr = "kanthale";
myStr += someAdjective;
console.log(myStr);

//30. Use Bracket Notation to Find the First Character in a String:
var lastName = "Kanthale";
var  firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//31. Find the Length of a String:
var lastName = "kanthale" ;
var lastNameLength = lastName.length;
console.log(lastNameLength);

//32  Understand String Immutability:
var myStr = "Hello world";
myStr[0] = "j";

//33. Use Bracket Notation to Find the Nth Character in a String:
var lastName = "Ada" ;
var thirdLetterOfLastName = lastName[2];
console.log("q33." + thirdLetterOfLastName);

//34. Use Bracket Notation to Find the Last Character in a String:
var lastName = "Kanthale" ;
var lastLetter = lastName[lastName.length-1];
console.log("Q34. " +lastLetter);

//35. Use Bracket Notation to Find the Nth-to-Last Character in a String:
var lastName = "kanthale" ;
var secondToLast = lastName[lastName.length-2];
console.log("Q35. " +secondToLast);

//36. World Blanks
var myAdjuctive = "hot";
var myverb = "laughed";
var myAdverb = "Silly";
var sentence = "It was really " + myAdjuctive + ", and we " + myverb + " ourselves " +
myAdverb + ".";
console.log("Q36. " +sentence);

//37. Store Multiple Values in one Variable using JavaScript Arrays:
var myArr = ["Shrikant" , 22 , "skanthale@gmail.com", 1998 ];

//38. Nest one Array within Another Array:
var myArray = [["sam",25,75],["Shri",25,45]];

//39. Access Array Data with Indexes:
var myArray = [45,85,95];
var myData = myArr[0];
console.log(myData);

//40. Modify Array Data With Indexes:
var myArray = [50,52,35];
myArray[0] = [45];
console.log(myArray); 