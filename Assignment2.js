//1. Access Multi-Dimensional Arrays With Indexes:
var arr = [[1,2,3],[3,4,5],[7,8,9],10,11];
console.log(arr[2][1]);

//2. Manipulate Arrays With push():
var myArray = ["Stimpson","J","cat"];
myArray.push( ["dog", 3]);
console.log(myArray);

//3. Manipulate Arrays With pop():
var myArray = ["shri" , "sam" , "smith"];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);

//4. Manipulate Arrays With shift():
var myArray = [24 , 26 , "sam"];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);
console.log(myArray);

//5. Manipulate Arrays With unshift():
var myArray = ["smith" , 30 , "skanthale"];
myArray.shift();
myArray.unshift( ["Paul",35]);
console.log(myArray);

//6. Shopping List:
var myList = [["Chocolate Bar",5] , ["apple",5] , ["notebooks",15] , ["tea",10] , ["pens",20]];

//7.Write Reusable JavaScript with Functions:
function  reusableFunction(){
    console.log("Hello World");
}
reusableFunction();

//8. Passing Values to Functions with Arguments:
function testFun(para1 , para2){
    console.log(para1,para2);
}
testFun("Hello " , "World");

//9.Global Scope and Functions:
var myGlobal = 10 ; //global variable access anywhere from 
function fun1(){
    let oopsGlobal = 5;
    console.log(oopsGlobal);
}
fun1();

//10. Local Scope and Functions:
function myTest(){
    let myVar = "myLocalScope";
    console.log((myVar));
}
myTest();
console.log(myVar);

//11. Global vs. Local Scope in Functions:
var myOutfit = "outerSweter";
function myFun(){
    var myOutfit="Sweater";
    return myOutfit;
}
myFun();

//12. Return a Value from a Function with Return:
function  timesFive(mul){
    return mul*5;
}
console.log(timesFive(5));

//13. Understanding Undefined Value returned from a Function:
var sum = 0;
function addfive(){
   sum +=5;
}
console.log(addfive());

//14. Assignment with a Returned Value:
function processArg(a){
   return a ;
}
var  processed= processArg(7);
console.log(processed);

//15. Stand in Line:

var arr = [10,20,30]
function nextLine(items){
    arr.push(items);
    console.log(arr);
    return arr.shift();
}
nextLine(100)
console.log(arr.shift());

//16. Understanding Boolean Values:

var arr = [10,20,30,40];
function nextLine(items){
    arr.push(items);
    console.log(arr);
    return arr.splice(1,1);
     
}
nextLine(100);
console.log(arr.splice(0,1));

//17. Use Conditional Logic with If Statements:

function test(condition){
    if(condition){
        return "yes"
    }
    else{
        return "No" ;
    }
}
console.log(test(true));

//18.19. Comparison with the Equality Operator:
function compare(myVal){
    if(myVal ==  "12"){
        return "Equal";
    }
    else{
        return "unEqual";
    }
}
console.log(compare(12));

//20. Comparison with the Strict Equality Operator:
function compare(myVal){
    if(myVal ===  "7"){
        return "Equal";
    }
    else{
        return "unEqual";
    }
}
console.log(compare(7));