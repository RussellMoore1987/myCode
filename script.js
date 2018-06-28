// let firstName = prompt("What is your first name?");
// let lastName = prompt("What is your last name?");
// let age = prompt("What is your age?");
// console.log("Hello " + firstName + " " + lastName + ", are you really " + age + " years old!!!");

// let age = prompt("What is your age?");
// if (Number(age)) {
//     // Calculating days, and added ".25" for the leap years
//     let dayAlive = age * 365.25; 
//     console.log("You have been alive for roughly " + dayAlive + " days.");
// } else {
//     console.log("You're trying to trick me. You didn't give me a number :( ");
// }

// let age = prompt("What is your age?");
// // Check to see if the number
// if (Number(age)) {
//     if (age > 0) {
//         // Check to see what status they can enter with
//         if (age < 18) {
//             console.log("No entry.");
//         } else if (age < 21) {
//         console.log("Entry with X."); 
//         } else {
//             console.log("Come on in.") ; 
//         }
    
//         // Check to see if they are 21
//         if (age == 21) {
//             console.log("\"Happy 21st birthday!!!\""); 
//         }

//         // Check to see if age is an odd number
//         if (age % 2) {
//             console.log("Your age is odd!");
//         }

//         // Check to see if their age has a square root
//         if (Number.isInteger(Math.sqrt(age))) {
//             console.log("Perfect square! " + age + " = " + Math.sqrt(age));
//         }
//     } else {
//         console.log("You're trying to trick me. You didn't give me a positive number :( ");
//     }   
// } else {
//     console.log("You're trying to trick me. You didn't give me a number :( "); 
// }

// guessing game 
// Create secret number
// const secretNumber = 4;

// // Ask user for a guess
// let guess = Number(prompt("Guess a number between 1 and 10"));

// // Check is guess is correct
// if (guess === secretNumber) {
//     alert("You got it right!");
// } else if (guess > secretNumber) {
//     alert("Your guess is to high");
//     location.reload();
// } else {
//     alert("Your guess is to low");
//     location.reload();
// }

// loop challenge
// console.log("Print numbers -10 to 19");
// let count = -10;

// while (count < 20) {
//     console.log(count);
//     count++;
// }

// console.log("Print all even numbers between 10 and 40");
// count = 10;

// while (count <= 40) {
//     console.log(count);
//     count+=2;
// }

// console.log("Print all odd numbers between 300 and 333");
// count = 300;

// while (count <= 333) {
//     if (count % 2) {
//         console.log(count);    
//     }
//     count++;
// }

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// count = 5;

// while (count <= 50) {
//     if ((count % 5 === 0) && (count % 3 === 0)) {
//         console.log(count);    
//     }
//     count++;
// }

// Annoying prompt message
// let answer = prompt("Are we there yet?");

// while (answer.indexOf("yes") === -1) {
//     answer = prompt("Are we there yet?");
// }

// alert("YAY, we have made it!!!");

// loop challenge
// console.log("Print numbers -10 to 19");
// for (let i = -10; i < 20; i++) {
//     console.log(i) 
// }

// console.log("Print all even numbers between 10 and 40");
// for (let i = 10; i <= 40; i+=2) {
//     console.log(i)
// }

// console.log("Print all odd numbers between 300 and 333");
// for (let i = 300; i <= 333; i++) {
//     if (i % 2) {
//         console.log(i)   
//     }
// }

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// for (let i = 5; i <= 50; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(i)
//     } 
// }

// function
// function add(num1 = 0, num2 = 0) {
//     let addedNum = num1 + num2;
//     console.log(addedNum)
// }

// add();
// add(33);
// add(22);
// add(10, 10);

// function square(x) {
//     return x * x;    
// }

// let result = square(4);

// console.log(result);

// Function to display whether or not something is even
// function isEven(x) {
//     // return true if even
//     if (x % 2 === 0) {
//        return true; 
//     } 
//     // return false otherwise 
//     return false; 
// }

// or
// function isEven(x) {
//     return x % 2 === 0;
// }

// console.log(isEven(4));
// console.log(isEven(21));
// console.log(isEven(68));
// console.log(isEven(333));
// console.log(isEven("fofofof"));


// Function for factorials
// function factorial(x) {
//     let num = Number(x);
//     if (num === 0) {
//         return 1;    
//     }
//     for (let i = 2; i < x; i++) {
//         // num = num * i;
//         num *= i;
//     }    
//     return num;
// }

// or
// factorial(4) 1x2x3x4 = 24
// function factorial(x) {
//     let result = 1;
//     for (let i = 2; i <= x; i++) {
//         result *= i;
//     }    
//     return result;
// }

// console.log(factorial(5));
// console.log(factorial(2));
// console.log(factorial(10));
// console.log(factorial(0));

// Recursion(call the function from with in its self) for factorial function
// arrow function
// factorial = (n) => {
//     if (typeof(n) != 'number') return NaN;
//     if (n < 0) return NaN;
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// };

// function factorial(n) {
//     if (typeof(n) != 'number') return NaN;
//     if (n < 0) return NaN;
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// };
  
// factorial(5); // Expected output: 120

// // kebabToSnake
// function kebabToSnake(str) {
//     str = str.replace(/-/g, "_");
//     return str;
// }

// console.log(kebabToSnake("hello-world"));
// console.log(kebabToSnake("dogs-are-awesome"));
// console.log(kebabToSnake("blah"));

// scope
// function scope
// function doMath() {
//     let x = 40;
//     console.log(x);
// }
// // Run function
// console.log(doMath());
// // can not pull from function
// // console.log(x);
// // make global variable
// let x = "hello!";
// // global variable
// console.log(x);
// // function variable
// console.log(doMath());

// // global scope
// let y = 99;
// // global variable
// console.log(y);
// function doMoreMath() {
//     console.log(y);
// }
// console.log(doMoreMath(y));

// // chang variable inside the function
// let q = 99;
// // global variable
// console.log(q);
// function doMoreMath2() {
//     q = 100;
//     console.log(q);
// }
// console.log(doMoreMath2(q));
// console.log(q);

// // not chang variable inside the function
// let g = 99;
// // global variable
// console.log(g);
// function doMoreMath2() {
//     let g = 100;
//     console.log(g);
// }
// console.log(doMoreMath2(g));
// console.log(g);

// set interval
// function sing() {
//     console.log("Twinkle twinkle...");
//     console.log("How I wonder...");
// }
// setInterval(sing, 1000);

// array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// let arrayNew = [];
// let arrayNew2 = new Array()
// // push = to the end of an array
// let colors = ["blue", "green", "red"];
// console.log(colors);
// colors.push("purple");
// console.log(colors);
// // pop = removes last item in an array
// colors.pop();
// console.log(colors);
// // unshift = adds to front of array
// colors.unshift("violet"); 
// console.log(colors);
// // shift = removes first item in an array
// let colorRemoved = colors.shift(); 
// console.log(colorRemoved);
// console.log(colors);
// //index of = find the index of somthing
// let colorIndex = colors.indexOf("green");
// console.log(colorIndex);
// // not there is -1
// colorIndex = colors.indexOf("brown");
// console.log(colorIndex);
// colors.push("purple");
// colors.push("violet");
// colors.push("brown");
// // slice = takes a peace of an array
// let colors2 = colors.slice(1,4) 
// // new copy of array
// let colors3 = colors.slice() 
// console.log(colors);
// console.log(colors2);
// console.log(colors3);

// console to do list
// let toDoList = [];
// window.setTimeout(function() {
//     let input = prompt("What would you like to do?");
//     while (input !== "quit") {
//         // check what we should do
//         if (input === "list") {
//             console.log(toDoList);
//         } else if (input === "new") {
//             // ask for new todo
//             let newTodo = prompt("Enter new todo");
//             // add new to do
//             toDoList.push(newTodo);
//         } 
//         // ask for new input
//         input = prompt("What would you like to do?"); 
//     }
//     console.log("App is now off!");
// }, 500);


// array loop
// let colors = ["blue", "green", "red", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);  
// }
// // for each 1, color = one of each item in an array
// colors.forEach(function(color) {
//     console.log(color);
// });
// // for each 2
// colors.forEach(color => {
//     console.log(color);
// });
// // example
// function printColor(color) {
//     console.log("*******");
//     console.log(color);
//     console.log("*******");
// }
// colors.forEach(printColor);

// [1,2,3].forEach(function(el, i, arr) {
//     console.log(el, i, arr);
// });

// function logNums(el, i, arr) {
//     console.log(el, i, arr);
// }
   
// [1,2,3].forEach(logNums);

// new todo
// function listTodo() {
//     console.log("************");   
//     todoList.forEach((todo, i) => {
//         console.log(i + ": " + todo);   
//     });
//     console.log("************");
// }

// function addTodo() {
//     // ask for new todo
//     let newTodo = prompt("Enter new todo");
//     // add new to do
//     todoList.push(newTodo);
//     let todoListItem = newTodo;
//     console.log("Added todo list item: " + todoListItem);
// }

// function deleteTodo() {
//     // ask for index of to do to delete
//     let todoListId = prompt("Which item do you want to delete, put in the number");
//     // delete that to do list item 
//     // splice()
//     let todoListItem = todoList[todoListId];
//     todoList.splice(todoListId,1);
//     console.log("Deleted todo list item: " + todoListItem);
// }

// let todoList = [];
// window.setTimeout(function() {
//     let input = prompt("What would you like to do?");
//     while (input !== "quit") {
//         // check what we should do
//         if (input === "list") {
//             // show list
//             listTodo();   
//         } else if (input === "new") {
//             // add todo
//             addTodo();
//         } else if (input === "delete") {
//             // delete todo
//             deleteTodo();
//         }
//         // ask for new input
//         input = prompt("What would you like to do?"); 
//     }
//     console.log("App is now off!");
// }, 500);

// print in reverse
// function printReverse(array) {
//     let reverse = array.length - 1;
//     for (let i = reverse; i >= 0; i--) {
//         console.log(array[i]);  
//     }
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let letters = ["a","b","c","d","e","f","g"];

// printReverse(numbers);
// printReverse(letters);

// // is uniform
// function isUniform(array) {
//     let notUniform = true;
//     for (let i = 1; i < array.length; i++) {
//         // console.log(array[i]);
//         if (array[i] !== array[0]) {
//             // all are not the same return false
//             notUniform = false;
//             break;
//         }
//     }
//     // All are the same return true 
//     return notUniform;
// }
// let array1 = ["d","d","r","d","r","d","r","d"];

// console.log(isUniform([1,2]));
// console.log(isUniform([1,1,1,1,1,1,1,1]));
// console.log(isUniform(["d","d","d","d","d","d","d","d"]));
// console.log(isUniform(array1));
// console.log(isUniform([1,1,4,1,1,1,1,1]));
// console.log(isUniform([1,1,1,1,4,1,71,1]));

// // sum array 
// function sumArray(array) {
//     let result = 0;
//     array.forEach(num => {
//         result += num;
//     });
//     return result;
// }

// console.log(sumArray([1,2,3]));
// console.log(sumArray([10,3,10,4]));
// console.log(sumArray([-5,100]));

// // max
// function max(array) {
//     let result = Math.max(...array)
//     return result;
// }

// console.log(max([1,2,3]));
// console.log(max([10,3,10,4]));
// console.log(max([-5,100]));
// console.log(max([-5,-88]));

// extra stuff, more advance
// function myForEach(array, func) {
//     // loop though array
//     for (let i = 0; i < array.length; i++) {
//         // call func for each item in the array
//         func(array[i]);   
//     }
// }

// let colors = ["red","blue","green","purple"]
// // myForEach(colors, console.log);
// // myForEach(colors, function (e) {
// //         console.log(e);   
// //     });

// Array.prototype.myForEach = function (func) {
//      // loop though array
//      for (let i = 0; i < this.length; i++) {
//         // call func for each item in the array
//         func(this[i]);   
//     }    
// }

// colors.myForEach(console.log)
// colors.myForEach(function (colorName) {
//     console.log("I love the color " + colorName)
// })

// Objects 
// let person = {
//     name:       "Russell Moore",
//     age:        33,
//     adress:     "1264 MT. view Dr.",
//     email:      "truthandgoodness87@gmail.com",
//     phone:      "(435) 760-1389",
//     awards:     [1,2,3,4,"hi",6,7,8,9,10],
//     items: {
//         sword:  "Dragon Blade",
//         shied:  "Dragon Shield"
//     }
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.adress);
// console.log(person.email);
// console.log(person["phone"]);
// person.age = 30;
// console.log(person.age);
// person.age += 5;
// console.log(person.age);
// console.log(person.items.sword);
// console.log(person.awards[4]);

// let movies = [
//     {
//         title:          "In Bruges",
//         rating:         5,
//         hasWatched:     "have"
//     },
//     {
//         title:          "Frozen",
//         rating:         4.5,
//         hasWatched:     "have not"
//     },
//     {
//         title:          "Mad Max Fury Road",
//         rating:         5,
//         hasWatched:     "have"
//     },
//     {
//         title:          "Les Miserables",
//         rating:         3.5,
//         hasWatched:     "have not"
//     }
// ] 

// // movies.forEach(movie => {
// //     console.log("You " + movie.hasWatched + " watched \"" + movie.title + "\" - " + movie.rating + " stars")
// // });

// function buildString(movie) {
//     console.log("You " + movie.hasWatched + " watched \"" + movie.title + "\" - " + movie.rating + " stars");
// }

// movies.forEach(movie => {
//     buildString(movie);
// });

// JS Methods
let obj = {
    name:       "Russell Moore",
    age:        45,
    health:     100,
    addHealth: function (healthAdd) {
        this.health += healthAdd;
    },
    add:  function (x,y) {
        return x + y;
    } 
};

console.log(obj.add(12,26));
console.log(obj.health);
console.log(obj.addHealth(40));
console.log(obj.health);