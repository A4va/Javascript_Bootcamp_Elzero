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
(a < 10)
 ? console.log(10) 
 :(a >= 10 && a <= 40) 
 ? console.log("10 To 40") 
 :(a > 40) 
 ? console.log("> 40") 
 :console.log("Unknown");


// 

let st = "Elzero Web School";

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("w Good");
}

if ((st.length + st.length).toString()  === "34") {
    console.log("34 Good");
  }

if (st !== "string") {
  console.log("string Good");
}

if (typeof st.length === "number") {
  console.log("number Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("ElzeroElzero Good");
}