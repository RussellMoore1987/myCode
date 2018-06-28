// show the DOM
// console.dir(document);

// change the dom
// let h2 = document.querySelector("h2");
// h2.style.color = "pink";

// // change background color
// let body = document.querySelector("body");
// let isBlue = false;

// setInterval(function () {
//     if (isBlue) {
//         body.style.background = "white";  
//     } else {
//         body.style.background = "#3498db";  
//     } 
//     isBlue = !isBlue;    
// }
// , 1000);

// more DOM stuff
// console.log(document.url);
// console.log(document.links);
// console.log(document.body);
// console.log(document.head);

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// HTML set 1
// let tag = document.getElementById("highlight");
// console.log(tag);
// let tags = document.getElementsByClassName("bolded");
// console.log(tags[0]);
// console.dir(tags[0]);
// let tags2 = document.getElementsByTagName("li");
// console.log(tags2[2]);
// // only selects one, like css selectors 
// tag = document.querySelector("#highlight");
// console.log(tag);
// tag = document.querySelector("ul #highlight");
// console.log(tag);
// tag = document.querySelector(".bolded");
// console.log(tag);
// tag = document.querySelector("h1");
// console.log(tag);
// // selects all, like css selectors, node list returned
// tags = document.querySelectorAll("h1");
// console.log(tags);
// tags = document.querySelectorAll("li");
// console.log(tags);
// tags = document.querySelectorAll("ul .bolded");
// console.log(tags);
// tags = document.querySelectorAll(".bolded");
// console.log(tags);

// HTML set 2
// 4 different ways to select the first paragraph
// let tag = document.querySelector("body p");
// console.log(tag);
// tag = document.querySelector("p");
// console.log(tag);
// tag = document.querySelector("#first");
// console.log(tag);
// tag = document.getElementById("first");
// console.log(tag);
// tag = document.getElementsByTagName("p");
// console.log(tag[0]);

// Changing elements of style
// Adding/removing classes
// Changing the content of the tag, text
// Changing attributes(src, href, etc.)
// HTML set 2
// let tag = document.querySelector("#first");
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";
// tag.classList.add("big");
// tag.classList.remove("big");
// tag.classList.toggle("big");

// HTML set 2
// let tag = document.querySelector("#first");
// console.log(tag.textContent);
// tag.textContent = "blah blah blah!";
// console.log(tag.textContent);
// tag.innerHTML = "<strong>blah</strong> blah blah!";
// // gets all li's text
// let ul = document.querySelector("ul");
// console.log(ul.textContent);
// // gt html
// console.log(ul.innerHTML);

// document.querySelector("h1").textContent ="End of Lesson!";

// HTML set 2
// link array
// let linkArray = ["https://www.google.com/", "https://www.toggl.com/", "https://www.udemy.com/", "https://component.kitchen/tutorial"];
// // link name array
// let linkNameArray = ["Google", "Toggl", "Udemy", "Component Kitchen"];
// // change links
// let links = document.getElementsByTagName("a");
// for (let i = 0; i < links.length; i++) {
//     console.log(links[i].getAttribute("href"));
//     links[i].setAttribute("href", linkArray[i]);
//     links[i].textContent = linkNameArray[i];
// }
// // pic url array
// let picArray = ["https://i2.wp.com/mooredigitalsolutions.com/wp-content/uploads/2017/11/adilas_e-mail_featured_image-1.jpg?fit=1024%2C852", "https://i1.wp.com/mooredigitalsolutions.com/wp-content/uploads/2016/04/employee_timeclock_mockup_featured_image.jpg?fit=1024%2C852", "https://i2.wp.com/mooredigitalsolutions.com/wp-content/uploads/2017/11/that_herb_shop_featured_image.jpg?fit=1024%2C852"];
// // pic src
// let pics = document.querySelectorAll("img");
// for (let i = 0; i < pics.length; i++) {
//     console.log(pics[i].getAttribute("src"));
//     pics[i].setAttribute("src", picArray[i]);
// }

// fizzBuzz
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");    
//         } else if (i % 3 === 0) {
//             console.log("Fizz");        
//         } else if (i % 5 === 0) {
//             console.log("Buzz");    
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// event listener
let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    h1.style.color = "blue";
});

// Setting event listener on li
document.querySelector("li").addEventListener("click", function () {
    console.log("li was clicked");
});

// Setting an event listener on multiple li's
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        console.log("li 2 was clicked");
        this.style.color = "pink";
    });
}

let btn = document.getElementById("btn");
// let bgSet = false;
// btn.addEventListener("click", function () {
//     if (!bgSet) {
//         document.body.style.background = "purple";
//     } else {
//         document.body.style.background = "white";
//     }
//     bgSet = !bgSet;
// });

// or

btn.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});

// closures
// function battingAverage() {
//     let hits = 100;
//     let atBats = 300;

//     // Methods
//     return {
//         getCurrentAverage: function () {
//             return(hits/atBats);
//         },
//         UpdateHitsAndAtBats: function (hit, atBat) {
//             hits += hit;
//             atBats += atBat;    
//         }
//     };
// }

// let alluve = battingAverage();
// console.log(alluve.getCurrentAverage());
// alluve.UpdateHitsAndAtBats(10,90);
// console.log(alluve.getCurrentAverage());

// var guide = {
//         title: 'Guide to Programming',
//         content: 'Content goes here...',
//         visibleToUser: function (viewingUserRole) {
//         if (viewingUserRole === 'paid') {
//             return true;
//         }
//         },
//         renderContent: function(userRole) {
//         if (this.visibleToUser(userRole)) {
//             console.log(this.title + " - " + this.content);
//         } else {
//             this.content = '';
//             console.log(this.title + " - " + this.content);
//         }
//         }
//     }
  
// user = { role: 'paid' };
// guide.renderContent(user.role);
// user.role = 'free';
// guide.renderContent(user.role);

// loop over object 
let student = {
    name: "Kristine",
    age: 22,
    city: "Logan"
};

for (const key in student) {
    console.log(key + " = " + student[key])
}