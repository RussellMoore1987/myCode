//JavaScript training...

//blocking off code when not using it keeping for reference
/*
var name = prompt("What is your name?");
alert("Hello, " + name);

var x = 30, z = 50, day = "Monday";

var a;
a = 5;
a = 1000000;
a = 123.456;
a = 200;
alert(a);

// Operators...

// >= greater than or equal to
// == equal to
// = assignment, or set variable
// === strict equality, string for string number for number exactly the same value
// !== not strict equality
// < less than
// > greater than
// != not equal
// + concatenation
// var y = null;
// y == undefined //ture
// y === undefined //false

//arithmetic operators
// + addition
// - subtraction
// * multiplication
// / division
// % modulus, or remainder variable

var year = 2003;
var remainder = year % 4;

//increment
//All the same just different ways to write them
a = a + 1;
a += 1;
a++;
++a;
//All the same just different ways to write them
a = a - 1;
a -= 1;
a--;
--a;

//ternary operator

var playerOne = 500;
var playerTwo = 600;
// condition ? True : false; ask the question and set the variable accordingly
var highScore = (playerOne > playerTwo) ? playerOne : playerTwo;

var score = 100;

// these two are the same one is a shorthand
score = score 10;
score += 10;

// other shorthands += -= *= /=

//is a greater than 20
if (a > 20){
   alert("a is greater than 20"); 
}

//equal to
if (a == -500){
   alert("a is equal to -500"); 
}

var b = 10;
var c = "10";

//strict equality operator
if (b === c){
   alert("b is equal to c"); 
} else{
   alert("b is not equal to c");
}

//not equal, complex logic
if (a != -500){
    alert("variable a is not equal to -500");
    if (a == 200){
        alert("variable a is equal to 200");   
    }
} else{
     alert("variable a is equal to -500");
}

//logic and/or

var d = 10;
var e = 10;
var f = 20;
var g = 20;

//logic and
if(d === e && f === g){
   alert("variable d is equal to e and f is equal to g");  
}

//logic or
if(d === e || f === g){
   alert("d is equal to e or f is equal to g");  
}

//logic and
if((d === e) && (f === g)){
   alert("variable d is equal to e and f is equal to g");  
}

// NOT logic
if(!(d === e)){
   alert("The logic operator above shows false \"!(d === e)\"");  
}

var grade = "Premium";

//switch statement
switch(grade){
    case "Regular":
        alert("it's $3.15");
        break
    case "Premium":
        alert("it's $3.35");
        break
    case "Diesel": 
        alert("it's $3.47");
        break
    default:   
        alert("that's not a valid grade");
}


//function

function myFunction (){
    var a = 5;
    var b = 10;
    var c = 20;
    var d = a + b + c;
    alert ("the value of d is: " + d)
}

myFunction();



function addTwoNumbers(a,b){
    var result = a + b;
    alert (result)
}

addTwoNumbers(5,15);
addTwoNumbers(555,55);
addTwoNumbers(555,555);

function addTwoNumbers2(a,b){
    var result = a + b;
    return result;
}

var x = addTwoNumbers2(5,5);
alert(x);



//loops 
var a = 1;

while (a <= 5) {
    alert(a);
    a++;
}

var amount = 0;

var i = 0;

while (i < 5) {
    amount = amount + 100;
    i++;
}

alert(amount);

for (var i = 0; i < 5; i++){
    amount = amount + 100;
}

alert("Amount: " + amount);




// could be "ABC"
var foo = "55";

var mynumber = Number(foo); //make it a number

//it is a number
if(!isNaN(mynumber)){
  alert("it is a number");  
}


//it's not a number
if(isNaN(mynumber)){
  alert("it is not a number");  
}

//string properties, methods

var phrase = "this is a simple phrase.";
alert(phrase.toUpperCase());

var str1 = "Hello";
var str2 = "hello";

if(str1.toLowerCase() == str2.toLowerCase()){
    alert("Yes, equal")
}else{
   alert("No, not equal") 
}

var phrase = "we want a groovy keyword.";
var position = phrase.indexOf("groovy"); 
alert (position)

if (phrase.indexOf("DDDD") == -1){
    alert ("That word does not occur.");
}


var phrase = "yet another phrase.";
var segment = phrase.slice(6, 11);
alert(segment);
alert(phrase);



//array

var multipleValues = [];
multipleValues[0] = 50;
multipleValues[1] = 60;
multipleValues[2] = "hello";
alert(multipleValues[2])


var multipleValues2 = [50,20,"hello",44,55];
alert(multipleValues2[4])



var myArray2 = [10,20,"test",99,99];
for (var i = 0; i < myArray2.length; i++) {
    alert("The value is: " + myArray2[i]);
}



var headline = document.getElementById("mainHeading");

headline.onclick = function() {
    headline.innerHTML = "Wow, you click the headline!"
};



//Firefox, firebug console JavaScript specifics
var a = 500
if (a == -500){
   console.log("a is equal to -500"); 
}else {
    //these showed different types of messages within the console
   console.log("a is not equal to -500");
   console.info("a is not equal to -500");
   console.warn("a is not equal to -500");
   console.error("a is not equal to -500");
}



//creating objects

var player = new Object();
player.name = "Fred";
player.score = 10000;
player.rank = 1;
console.log(player);

//shorthand for creating an object

var player1 ={name: "Fred", score: 10000, rank: 1};
var player2 ={name: "Sam", score: 1000000, rank: 5};
console.log(player1);
console.log(player2);

//creating a method for our objects

function playerDetails() {
    //display information about each player
    console.log(this.name + " has a rank of: " + this.rank + " and a score of " + this.score)
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();


//using the Dom
var myElement = document.getElementById("abc");
console.log("this is an element of type: ", myElement.nodeType);
console.log("the inner HTML is ", myElement.innerHTML);
console.log("child nodes: ", myElement.childNodes.length);

var myHeading = document.getElementById("mainHeading");
console.log("this is an element of type: ", myHeading.nodeType);
console.log("the inner HTML is ", myHeading.innerHTML);

var myListItems = document.getElementsByTagName("li");
console.log("number of li's ", myListItems.length);

*/

var headlineChange = document.getElementById("mainHeading");

headlineChange.onclick = function() {
    headlineChange.getAttribute("class");
    headlineChange.setAttribute("class","soso");
    headlineChange.innerHTML = "Wow, you click the headline!"
};
















































