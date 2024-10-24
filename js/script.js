// variables creation

let school = "Harvard";
const fullPackage = "JavaScript";
var project = "React";

console.log(`I am learning ${fullPackage} from ${school}. I am working on ${project}.`);

// variables operations

let x = 2;
let y = 3;
let z = x + y;
console.log(z);

let city = "London";
let country = "UK";
let place = city + " " + country;
console.log(place)

// variables types

let myName = "John";
let age = 30;
let isMarried = false;
console.log(myName, age, isMarried);

// Structure types

let person = [ "kate", "john", "mateo" ]; // array a collection of values or list of values of the same data type or structure

let kate = {
  name: "kate",
  age: 30,
  isMarried: false
} // object are used to store values of different data types

console.log(person);
console.log(kate);

// alert and prompts //

// alert("hello");

// let greeting = "hello world";
// alert (greeting);

// let firstName = prompt("What is your name?");
// let lastName = prompt("What is your last name?");
// alert(`Hello ${firstName} ${lastName}!`);


// if statements

let Country = "America";

if (Country === "UK") {
  console.log("I am from UK");
}

if (Country === "America") {
  console.log("I am from America");
}

// if else if statements

let countryPlace = "UK";

if (countryPlace === "UK") {
  console.log("I am from UK");
} else if (countryPlace === "America") {
  console.log("I am from America");
} else {
  console.log("I am from another country");
}


// switch statements

let countryPlaces = "America";

switch (countryPlaces === "UK") {
  case "UK": 
    console.log("I am from UK");
    break;
  case "America":
    console.log("I am from America");
    break;
}


// nested if else statements

let Age = 17;

if (Age < 18) {
  console.log("you can't apply");
} else {
  if (Age > 120) {
    console.log("you can't apply");
  } else {
    console.log("you can apply");
  }
}

// functions

function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}

checkValue(1, 2);
checkValue(1, 3);

// ternary operator

let a = 1;
let b = 2;

a > b ? console.log("a is greater than b") : console.log("b is greater than a");

// for loops

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loops

let index = 11;

while (index > 10) {
  console.log("index is greater than 10");
  break;
}

// do while loops

let number = 5;

do {
  if (number === 5) {
    console.log("number is 5");
    break;
  }
} while (number < 5);

