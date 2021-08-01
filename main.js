/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

a < 10 ? console.log(10) : 
(a >= 10 && a <= 40) ? console.log("10 To 40") :
(a > 40) ? console.log("> 40") : 
console.log("Unknown");

// ----------------- //

let st = "Elzero Web School";

// W Position May Change
if (st.indexOf[8] === "w") {
  console.log("Good");
}

if ("????" !== "string") {
  console.log("Good");
}

if ( "number" === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// ----------------- //

let numOne = 9;
if ( numOne < 10 ) {
  console.log(`00${numOne}`)
}
// Condition Output => "009"

let numTwo = 20;
if ( numTwo > 10 && numTwo < 100) {
  console.log(`0${numTwo}`)
}
// Condition Output => "020"

let numThree = 110;
if ( numThree >= 100) {
  console.log(numThree)
}
// Condition Output => "110"

//-------------------//

let num01 = 9;
let str = "9";
let num02 = "20";

// Output
if ( num01 == str ) {
  console.log ("{num1} Is The Same Value As {str}");
} 
"{num1} Is The Same Value As {str}"

if ( typeof num01 !== typeof str ) {
  console.log ("{num1} Is The Same Value As {str} But Not The Same Type");
}
"{num1} Is The Same Value As {str} But Not The Same Type"


if ( num1 !== num02 || typeof num01 !== typeof numThree) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {num3}");
}

"{num1} Is Not The Same Value Or The Same Type As {num2}"

//----------------//

let number1 = 10;
let number2 = 30;
let number3 = "30";

if (number3 > number1 && typeof number3 !== typeof number1) {
  console.log(
    "{number3} Is Larger Than {number1} And Not The Same Type As {number2}"
  );
} else if (number3 > number1 && number3 == number2) {
  console.log(
    "{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"
  );
} else if (number3 !== number1 && typeof number3 !== typeof number2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

//----------------//

// Edit What You Want Here

var num1 = 10;
var num2 = 10;
var num3 = "10";
var num4 = 20;

++num1;
num2 = num1 - num2;
num3 = +num3;
++num3;
num4 += num1 + num3;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}