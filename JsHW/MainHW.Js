// HW1-9
console.log("HW1-9 :");

document.write("<h2>ELZERO<h2/>")
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "80px";
document.querySelector("h2").style.fontWeight = "bold";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.fontFamily = "Arial";

console.log("%cElzero %cWeb %cSchool" , "color:red; font-size:40px;" 
                                      , "color:green; font-size:40px; font-weight:bold;"
                                      , "color:blue; font-size:40px;")

console.group("Group 1");
console.log("Messsage One...");
console.log("Messsage Two...");
console.group("Child Group");
console.log("Messsage One...");
console.log("Messsage Two...");
console.group("Grand Child Group");
console.log("Messsage One...");
console.log("Messsage Two...");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Messsage One...");
console.log("Messsage Two...");
console.groupEnd();

console.table(["ABDUALLAH","KHALED","ABDUALLAH","SAEED","MOBARK"])

//console.log("Iam In Console");
//document.write("Iam In Page");

/*console.log("Iam In Console");
document.write("Iam In Page");*/



// HW10-17
console.log("HW10-17 :");


// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;

console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof (NumberOne + " " + NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${NumberOne}${NumberTwo}`)); // Template Literals Way => String
console.log(NumberOne + "\n" + NumberTwo);
/*
  Normal Concatenate
  20
  10
*/
console.log(
`${NumberOne} 
${NumberTwo}`);
/*
  Template Literals Way
  20
  10
*/

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log(`\`${`I'm In
\\\\
Love \\\\ \"\"\" \'\'\'
++ With ++
\\"""\\"""
""JavaScript""\`\``}`)

let a1017 = 21;
let b1017 = 20;

console.log("_" + `${a1017}_${b1017}`.repeat(4) + "_")

// Challenge 017
let TheTitle = "Elzero",
    TheDescription = "Elzero web school",
    TheDate = "25/10";
let markup =`<div class="card">
<h3>Hello ${TheTitle}</h3>
<p>${TheDescription}</p>
<span>${TheDate}</span>
</div>`;
document.write(markup.repeat(4))

// HW18-22
console.log("HW18-22 :");

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

let num_1822 = 3;

// Solution One
console.log(num_1822 + num_1822); // 6

// Solution Two
console.log(num_1822 * num_1822 - num_1822); // 6

// Soultion Three
console.log(num_1822 ** num_1822 / num_1822 - num_1822);// 6

// Soultion Four
console.log(num_1822 ** true + num_1822 ); // 6

// Solution Five
console.log(num_1822 * (true + true));  // 6

// Solution Six
console.log(num_1822+=num_1822); // 6



let num_1822_ = "10";

// Solution One
console.log(+num_1822_ + +num_1822_); // 20

// Solution Two
console.log(+num_1822_ + --num_1822_ + --num_1822_ - --num_1822_); // 20

// Solution Three
console.log(+num_1822_ * --num_1822_ - --num_1822_ * --num_1822_ - --num_1822_ + --num_1822_ - --num_1822_);  // 20

// Solution Four
console.log(++num_1822_ ** num_1822_ * ++num_1822_ + ++num_1822_  + num_1822_); // 20

// HW23-26
console.log("HW23-26 :");


// 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(50_000 + 50_000); // 100000
console.log(110_000 - 100_00); // 100000
console.log(100*1000); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.ceil(99999.6)); // 100000
console.log(Math.floor(100000.2)); // 100000
console.log(Math.trunc(100000.5)); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.max(100000 , 1 , 2 , 3)); // 100000
console.log(Math.min(100000 , 1000000 , 10000000 , 100000000)); // 100000

// 2
console.log(Number.MIN_SAFE_INTEGER*-1); // 9007199254740991

// 3
console.log((((Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER)+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER)+(Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER)+(Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER))**((Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER)+(Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER))); // 16

// 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// 5
let num_2326 = 10;

console.log(+Number.isInteger(num_2326) + +Number.isInteger(num_2326)); // 2
console.log(Number.isInteger(num_2326) + true) // 2

// 6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed()); // 10


// 7
console.log(Math.trunc(Math.random()* 5)); // 0 || 1 || 2 || 3 || 4

// HW27-30
console.log("HW27-30 :");

// 1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(-6,1).toLowerCase().repeat(3)); // eee

// 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

// HW31-32
console.log("HW31-32 :");

// 1
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 != 100 != 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 === ! +"-40"); // true
console.log(! 10 === ! -"-40"); // true
console.log(! "10" === ! 10); // true
console.log(! 20 == false); // true

// 2
let num1 = 10;
let num2 = 20;

console.log( !num1 === !num2); // true
console.log( !num1 ==  !num2); // true
console.log(  num1 >   !num2); // true
console.log(  num1 !==  num2); // true
console.log(  num1 !=   num2); // true
console.log(  num1 <    num2); // true


// 3
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a != b != a != c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

// HW33-37
console.log("HW33-37 :");

//1
// Test Case 1
let numCase = 9; // "009"
// Test Case 2
// "020"

// Test Case 3
// "110"

if (numCase < 10) {
  console.log("00"+numCase)

}else if(100 > numCase && numCase >= 10) {
  console.log("0"+numCase)
  
}else if(numCase >= 100){
  console.log(numCase)

}
// 2
let numIf = 9;
let strIf1 = "9";
let strIf2 = "20";
console.log()

if(numIf == strIf1){
  console.log(`numIf = ${numIf} ,Is The Same Value As strIf1 = ${strIf1}`)
}
if(numIf == strIf1 && typeof numIf !== typeof strIf1){
  console.log(`numIf = ${numIf} ,Is The Same Value As strIf1 = ${strIf1} ,But Not The Same Type`)
}
if(numIf !== strIf2){
  console.log(`numIf = ${numIf} ,Is Not The Same Value Or The Same Type As strIf2 = ${strIf2}`)
}
if(typeof strIf1 == typeof strIf2 && strIf1 !== strIf2){
  console.log(`strIf1 = ${strIf1} ,Is The Same Type As strIf2 = ${strIf2} ,But Not The Same Value`)
}

// Output
"{numIf} Is The Same Value As {strIf1}"
"{numIf} Is The Same Value As {strIf1} But Not The Same Type"
"{numIf} Is Not The Same Value Or The Same Type As {strIf2}"
"{strIf1} Is The Same Type As {strIf2} But Not The Same Value"

// 3
let numIf1 = 10;
let numIf2 = 30;
let numIf3 = "30";

if (numIf3 > numIf1 && typeof numIf3 !== typeof numIf2 ){
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
  if(numIf3 > numIf1 && numIf3 == numIf2 && typeof numIf3 !== typeof numIf2){
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")

  if(numIf3 !== numIf1 && numIf3 !== typeof numIf2){
  console.log(`numIf3 = ${numIf3} ,Value And Type Is Not The Same As numIf1 = ${numIf1} ,And Type Is Not The Same As numIf2 ${numIf2}`)
  }
    
  }
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// 4
// Edit What You Want Here

var num1_ = 11;
var num2_ = 10;
var num3 = +"11";
var num4 = 33;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1_ > num2_) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1_ > num2_ && num1_ < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1_ > num2_ && num1_ === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1_ + num2_) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1_ + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1_ + num2_ + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1_ + num3) + num2_ === 21) {
  console.log("True");
} else {
  console.log("False");
}

// HW38-39
console.log("HW38-39 :");
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day9 = "World";
// Output => "Its Not A Valid Day"

switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available")
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM")
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM")
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM")
    break;
  default:
    console.log("Its Not A Valid Day")
    break;
}
// HW40-47
console.log("HW40-47 :");

// 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let numA = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.reverse().slice(-numA).reverse()); // ["Ahmed", "Elham", "Osama"];

// 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]

//  3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][words.indexOf("Google")].slice(website.length).toUpperCase()); // ZERO

// 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found")
}
if (haystack.indexOf(needle) > -1) {
  console.log("Found")
}
if (haystack.lastIndexOf(needle) > -1) {
  console.log("Found")
}

// 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift()
arr1.shift()
arr2.shift()
arr2.shift()

console.log(allArrs.concat(arr1,arr2).sort().join("").toLowerCase()); // fxy

// HW48-56
console.log("HW48-56 :");

// 1
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
  if(i===exclude)continue;
  console.log(i);


}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// 2
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i > end2; --i){
  if(i >= start){
    console.log(i)
  }else{
    console.log(`${end2.toString()}${i}`)
  }
  if (i === stop2){
    break;
  }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// 3
let start3 = 1;
let end3 = 6;
let breaker3 = 2;
for(let i = start3; i <= end3; ++i){
  console.log(i)
  for(let j = breaker3; j < end3; j+= breaker3){
    console.log("-- " + j)
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// 4
let index4 = 10;
let jump4 = 2;
let end4 = 0;

for (;;) {
  // Write Your Code Here
  console.log(index4)
  index4 -= jump4;
  if(index4 === jump4){
    break;
  }
}

// Output
// 10
// 8
// 6
// 4

// 5


let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter5 = "a";
let count = letter5.length;


for(let i = letter5.length; i <= friends5.length; ++i){

  if (letter5.toUpperCase() === friends5[i-letter5.length][letter5.length-letter5.length]){
      continue;
  }else{
      
      console.log(`${count++} => ${friends5[i-letter5.length]}`)
  }
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// 6
let start6 = 0;
let swappedName = "elZerO";
let arrELz = [];
for(let i = start6; i < swappedName.length; ++i){

  if (swappedName[i] === swappedName[i].toUpperCase()){
      arrELz.push(swappedName[i].toLowerCase())
  }else{
      arrELz.push(swappedName[i].toUpperCase())
  }
}
console.log(arrELz.join(""))

// Output
// "ELzERo"

// 7
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = ++start7; i < mix.length; i++){
  if(typeof mix[i] === "string")continue;
  else console.log(mix[i])
}

// Output
// 2
// 3
// 4


// 8
let friends8 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for(let i = index ; i < friends8.length; i++){
  if (friends8[i][index] === "A" || typeof friends8[i] === "number"){
    continue;
  }else{
        console.log(`${++counter} => ${friends8[i]}`)
  }

}

// Output
// "1 => Sayed"
// "2 => Mahmoud"

// HW57-63
console.log("HW57-63 :");
// 1
function sayHello(theName, theGender = "") {
  // Your Code Here
  if(theGender === "Male"){
    theGender = "Mr ";
  }else if(theGender === "Female"){
    theGender = "Miss ";
  }
  console.log(`Hello ${theGender}${theName}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// 2
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  let result;
  if(secondNum === undefined){
    result = "Second Number Not Found";
  }else if(operation === "add" || operation === undefined){
    result = firstNum + secondNum;
  }else if(operation === "subtract"){
    result = firstNum - secondNum;
  }else if(operation === "multiply"){
    result = firstNum * secondNum;
  }
  console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// 3
function ageInTime(theAge) {
  // Your Code Here
  if( theAge > 10 && theAge < 100){

    console.log(`${theAge * 12} Months`)
    console.log(`${theAge * 52} Weeks`)
    console.log(`${theAge * 356} Days`)
    console.log(`${theAge * 8760} Hours`)
    console.log(`${theAge * 525600} Minents`)
    console.log(`${theAge * 31536000} Seconds`)

  }else{
    console.log("Age Out Of Range")
  }
}

// Needed Output
ageInTime(100); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(10); // Age Out Of Range

// 4
function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write("<select>")
  for(let i = startYear; i <= endYear; i++){
    document.write(`<option value="${i}">${i}</option>`)
  }
  document.write("</select>")
}
createSelectBox(2000, 2021);

// 5

function multiply(...nums){
  let mult = 1;
  for(let i = 0;i < nums.length; i++){
    if(typeof nums[i] === "number"){
      mult *= Math.trunc(nums[i]);
    }
  }
  console.log(mult);
}
console.log();

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

// HW64-70
console.log("HW64-70 :");

// 1
function getDetails(zName, zAge, zCountry) {

  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    return `${zName.slice(0,zName.indexOf(" "))} ${zName.charAt(zName.indexOf(" ") + 1).toUpperCase()}.`    
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return parseInt(zAge);
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return zCountry.slice(0,2).toUpperCase();
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)} Your Age Is 38 ${ageWithMessage(zAge)} You Live In ${countryTwoLetters(zCountry)}.`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// 2.1

// Before
// function itsMe() {
//   return `Iam A Normal Function`;
// }

// After
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// 2.2

// Before
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// After
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// 3

// Before
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// After
let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 4
console.log()
// parseInt(data[i])
function specialMix(...data) {
  // Your Code Here
  var Numbers = 0;
  for(i = 0; i < data.length; i++){

    if (!isNaN(parseInt(data[i]))) {
      Numbers += parseInt(data[i]);
    }

  }

  if(Numbers == 0) Numbers = "All Is Strings";
  return Numbers;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// HW71-78
console.log("HW71-78 :");

// 1
let mix1 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let mixHW1 = mix1.map(function (el){
return isNaN(el)? el:"";
}).reduce(function(ac,el){
  return ac + el;
});

console.log(mixHW1);
// Elzero

// 2
let myString = "EElllzzzzzzzeroo";
let myStringFilter = myString.split("").filter(function (el,i){
  return myString[i] != myString[i+1];
}).join("");

console.log(myStringFilter)

// Elzero

// 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let FlattenArray = myArray.reduce(function (ac,el){
return ac + el;
}).replaceAll(',', '');
console.log(FlattenArray)

// Elzero

// 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsReverser = numsAndStrings.filter(function (el){
  return !isNaN(el);
}).map(function(el){
  return -el;
});
console.log(numsReverser)
// [-1, -10, 10, 20, -5, -3]

// 5
let numsRA = [2, 12, 11, 5, 10, 1, 99];
let Nums500 = numsRA.reduce(function(ac,el){
  return el % 2 ? ac + el: ac * el;
},1);
console.log(Nums500)
// 500

// HW79-85
console.log("HW79-85 :");

//1

// Create Your Object Here
let member ={
  name:"Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function(){
    return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
  } 

}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// 2
// Method One
// Create Your Object Here
let objMethodOne ={
  property:"Method One"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({property:"Method two"})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({property:"Method Three"})
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({property:"Method Four"})
console.log(objMethodFour.property); // "Method Four"

// 4
let a1 = 1;

let threeNums = {
  b2: 2,
  c3: 3,
  d4: 4,
};

let twoNums = {
  e5: 5,
  f6: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({},new Object({a1}),threeNums,twoNums)
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// 4
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)'
  if (myFavGames[Object.keys(myFavGames)[i]]?.bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// HW86-93
console.log("HW86-93 :");
// 1
console.log()

console.log(document.querySelector("#elzeroDOM"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name='js']"));
console.log(document.querySelectorAll("#elzeroDOM")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("[name='js']")[0]);
console.log(document.querySelectorAll("div")[1]);
console.log(document.getElementById("elzeroDOM"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.getElementsByTagName("div")[1]);
console.log(document.body.children[3]);
console.log(document.body.childNodes[13]);

// 2
for(let i=0; i < 10; i++){
  let hw2 = document.querySelectorAll("img")[i];
  hw2.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  hw2.setAttribute("alt","Elzero Logo");
}

// 3 
let hw3_ = document.querySelector(".result")
let dollar = document.querySelector("[name='dollar']")

dollar.oninput = () => {
  let money = document.querySelector("[name='dollar']").value;
  hw3_.innerHTML = `{${money}} USD Dollar = {${(money * 15.6).toFixed(2)}} Egyptian Pound`
}

// 4
let classOne = document.querySelector(".one")
let classTwo = document.querySelector(".two")

let divTitelOne = classOne.title;
let divTitelTwo = classTwo.title;
classOne.title = divTitelTwo;
classTwo.title = divTitelOne;

let txtOne = classOne.innerHTML;
let txtTwo = classTwo.innerHTML;
classOne.innerHTML = txtTwo;
classTwo.innerHTML = `${txtOne} ${(txtTwo.length + txtTwo.length)/txtTwo.length}`;

// 5
for(let i = 10; i < 15; i++){
  let imgsHW5 = document.querySelectorAll("img")[i]
  if(imgsHW5.hasAttribute("alt")){
    imgsHW5.setAttribute("alt","Old")
  }else{
    imgsHW5.setAttribute("alt","Elzero New")
  }
console.log(imgsHW5)

}
// HW94-101
console.log("HW94-101 :");
// 1
// window.onload = () =>{
//   let linkElzero = document.querySelectorAll("a");
//   for(i = 0;i < linkElzero.length;i++){
//      if (linkElzero[i].textContent == "Elzero" && linkElzero[i].classList.contains("open")){
//         linkElzero[i].click();
//       }
//     }
// }

// 3
let pDel = document.querySelector("p");
pDel.remove()

let createDivBefore = document.createElement("div");
let MainDiv = document.querySelector(".our-element");
let createDivAfter = document.createElement("div");

createDivBefore.setAttribute("class", "start")
createDivBefore.setAttribute("title", "Start Element")
createDivBefore.setAttribute("data-value", "Start")
createDivBefore.textContent ="Start";
MainDiv.before(createDivBefore);

createDivAfter.setAttribute("class", "end")
createDivAfter.setAttribute("title", "End Element")
createDivAfter.setAttribute("data-value", "End")
createDivAfter.textContent ="End";
MainDiv.after(createDivAfter);

// 4
let allDivs = document.querySelectorAll("div");
allDivs[18].childNodes
console.log(allDivs[18].childNodes[4].textContent.trim())

// 5
document.addEventListener("click",function(e){
  console.log(`This Is ${e.target.tagName}`)
})

// HW102-110
console.log("HW102-110 :");
// 1

// let promMsg = prompt('Print Number From – To',"Example: 5-20")
// let promptMsg = promMsg.trim().split("-");

// if(+promptMsg[0] <= +promptMsg[1]){

//   for(i= +promptMsg[0];i<= +promptMsg[1];i++){
//     console.log(i)
//   }
  
// }else if(+promptMsg[0] > +promptMsg[1]){

//   for(i= +promptMsg[1];i<= +promptMsg[0];i++){
//     console.log(i)
//   }

// }

// HW111-114
console.log("HW111-114 :");
// Folder Challenges 19 - 20

// HW115-122
console.log("HW115-122 :");
// 1

let myNumbersDes = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
[a,,,,e] = myNumbersDes;

console.log(a * e); // 5

// 2
let mySkillsDes = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[a,b,c,[d,e,[f,g]]] = mySkillsDes;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// 3
let arr1Des = ["Ahmed", "Sameh", "Sayed"];
let arr2Des = ["Mohamed", "Gamal", "Amir"];
let arr3Des = ["Haytham", "Shady", "Mahmoud"];

arr3Des.push(arr1Des[0]);
// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
[,a,b,c] = arr3Des;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed

// 4
const memberDes = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {age:aa,working:w} = memberDes;
console.log(`My Age Is ${aa} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

const {country:cc} = memberDes;
console.log(`I Live in ${cc}`);
// I Live in Egypt

const {hobbies:[h1,,h3]} = memberDes;
console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// 5
const gameDes = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {title:t, developer:dd, releases:r} = gameDes;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${dd} Games`);
// And I Love Falcom Games

let [o,aaa,ori] = Object.keys(r);
let [u,j] = Object.values(r[o]);
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${aaa}`);
// Although I Love Ark Of Napishtim

let [u_price,j_price] = Object.values(r[aaa]);
console.log(`${aaa} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${aaa} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

let [or] = [Object.values(r[ori]).join("")];
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// 6
let chosenDes = 1;

let myFriendsDes = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function Destructuring(chosenDes){
  const {title:tDes, age:aDes, available:avDes, skills:[,seDes]} = myFriendsDes[chosenDes-1];
  console.log(tDes)
  console.log(aDes)
  console.log(avDes?"Available":"Not Available")
  console.log(seDes)
}
Destructuring(1);


// Write Your Code Here

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"

// HW123-133
console.log("HW123-133 :");
// 1
setOfNumbers = new Set([10])
setOfNumbers.add(20).add(setOfNumbers.size)
console.log(setOfNumbers)
console.log([...setOfNumbers].pop())

// 2 
let myFriendsSet = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
console.log(new Set([...myFriendsSet].sort()))

// 3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoMap = new Map([["username", "Osama"],["role", "Admin"],["country", "Egypt"]]);
console.log(myInfoMap)
console.log(myInfoMap.size)
console.log(myInfoMap.has("role"))
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// 4
let theNumberSet = 100020003000;

console.log(+String(+[...new Set([...[theNumberSet].join("")].reverse())].join("")).split("").reverse().join(""))
console.log(+String([+[...new Set(...[String(theNumberSet).split("").reverse()])].join("")]).split("").reverse().join(""))
console.log(+[...new Set(theNumberSet.toString())].sort().join(""))

// Needed Output
// 123

// 5
let theNameArr = "Elzero";
//1
console.log(theNameArr.split(""));
//2
console.log(Array.from(theNameArr));
//3
console.log([...theNameArr]);
//4
console.log(Object.assign([], theNameArr));
//5
let arrayX1 = [];
for (let i of theNameArr){
  arrayX1.push(i)
}
console.log(arrayX1);
//6
let arrayX2 = [];
for (let i in theNameArr){
  arrayX2.push(theNameArr[i])
}
console.log(arrayX2);
//7
console.log(Object.values(theNameArr))
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// 6
let charsArr = ["A", "B", "C", "D", "E", 10, 15, 6];
function arrCWI(arr){
  let fNum = arr.filter(e=>typeof(e)=="number");
  let fStr = arr.filter(e=>typeof(e)=="string");
  let nLen = fNum.length;
  let newArr = [...fNum,...fStr];
  console.log(newArr.copyWithin(0,nLen,nLen*2));
}
arrCWI(charsArr)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

//1
console.log([...numsOne, ...numsTwo])
//2
console.log(numsOne.concat(numsTwo))
//3
newArrNums = [];
newArrNums.push(...numsOne, ...numsTwo)
console.log(newArrNums)
//4
let newArrForEach = [];
numsOne.forEach(e => newArrForEach.push(e)) 
numsTwo.forEach(e => newArrForEach.push(e) )
console.log(newArrForEach)
//5
let mergedNums = [];
numsOne.reduce((arr, i) => {
  arr.push(i);
  return arr;    
} ,mergedNums);
numsTwo.reduce((arr, i) => {
  arr.push(i);
  return arr;    
} ,mergedNums);
console.log(mergedNums)
//6
newArrForOf = [];
for(let e of numsOne) newArrForOf.push(e);
for(let e of numsTwo) newArrForOf.push(e);
console.log(newArrForOf)
//7
newArrForIn = [];
for(let i in numsOne) newArrForIn.push(numsOne[i]);
for(let i in numsTwo) newArrForIn.push(numsTwo[i]);
console.log(newArrForIn)
//8
console.log([numsOne, numsTwo].flat())
//9
console.log(Array.from([numsOne, numsTwo]).flat());
//10
console.log(Array.of(...numsOne, ...numsTwo));
// Needed Output
// [1, 2, 3, 4, 5, 6]

// 8
/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/
let n1Set= [10, 30, 10, 20];
let n2Set = [30, 20, 10];
console.log([...n1Set, ...n2Set].length * Math.max(...n1Set));
console.log(parseInt(`${n2Set.indexOf(Math.min(...n1Set))}${Math.min(...n1Set)}`));
console.log(+[...new Set(([...new Set(n1Set.reverse()).keys().next().value.toString(), ...Math.min(...n2Set).toString()]).sort().reverse())].join(""));
console.log(+([...`${n1Set.pop()}`].unshift() + `${n2Set.pop()}`));
// Needed Output
// 210

// HW134-146
console.log("HW134-146 :");
// 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip)
console.log(ip.match(/\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig).join(""))

// 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(['Os10O', 'OsO', 'Os100O'])
console.log(specialNames.match(/Os\d*O/g))
// Output
// ['Os10O', 'OsO', 'Os100O']

// 3 
let phone = "+(995)-123 (4567)";
console.log(phone)
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g).join(""))

// 5 
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d+(\/| - |\s)?\d+(\/| - |\s)?\d+/g; // Write Pattern Here

console.log(date1);// "25/10/1982"
console.log(date1.match(re)); // "25/10/1982"

console.log(date2); // "25 - 10 - 1982"
console.log(date2.match(re)); // "25 - 10 - 1982"

console.log(date3); // "25 10 1982"
console.log(date3.match(re)); // "25 10 1982"

console.log(date4); // "25 10 82" 
console.log(date4.match(re)); // "25 10 82" 

// 6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let reUrls = /(https?:\/\/)?(www.)?\w+.org(:\d{4}\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig; // Write Your Pattern Here

console.log(url1);
console.log(url1.match(reUrls));

console.log(url2);
console.log(url2.match(reUrls));

console.log(url3);
console.log(url3.match(reUrls));

console.log(url4);
console.log(url4.match(reUrls));

console.log(url5);
console.log(url5.match(reUrls));

// HW147-158
console.log("HW147-158 :");
// 1

// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// Convert Constructor Function To A Class Declaration.

class Car{
  constructor(name, model, price){
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return `${this.n} Car Is Running Now.`
  }

  stop() {
    return `Car Is Stopped.`
  }
}

let car1 = new Car("Land Cruiser",2006,200000);
let car2 = new Car("Rav4",2022,150000);
let car3 = new Car("Sequoia",2023,250000);
console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}.`)
console.log(car1.run())
// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

// 2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone{
  constructor(name, serial, price, size){
    super(name, serial, price)
    this.size = size || "Unknown";
  }
  fullDetails(){
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}.`
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// 3
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData(){
    let card = this.#c;
    return `Hello ${this.u} Your Credit Card Number Is ${`${card}`.match(/\d{4}/g).join("-")}.`;
    // if(!/\d{4}-\d{4}-\d{4}-\d{4}/g.test(card)){
    //   return `${card}`.match(/\d{4}/g).join("-");
    // }else{
    //   return card;
    // }
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// 4
// Write Your Code Here
String.prototype.addLove = ()=> `I Love ${myStr} Web School.`

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// 5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj,{
  id:{
    enumerable: false
  },
  score:{
    writable: false
  },
  country:{
    enumerable: false
  }
})
delete myObj.country;
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}

// HW159-168
console.log("HW159-168 :");
// 1
let dateNow = new Date();
let birthday = new Date("Oct 10 2000");
let dateDiff = dateNow - birthday;
console.log((dateDiff / 1000).toFixed(0) + " Seconds")
console.log((dateDiff / 1000 / 60).toFixed(0) + " Minutes")
console.log((dateDiff / 1000 / 60 / 60).toFixed(0)+ " Hours")
console.log((dateDiff / 1000 / 60 / 60 / 24).toFixed(0) + " Days")
console.log((dateDiff / 1000 / 60 / 60 / 24 / 30).toFixed(0) + " Months")
console.log((dateDiff / 1000 / 60 / 60 / 24 / 365).toFixed(0) + " Years")
// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

// 2
let dateHW2 = new Date(80,0,1,0,0,1);
console.log(dateHW2)
// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// Needed Output

// 3

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
let dateNowHW3 = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
dateNowHW3.setDate(0);
console.log(dateNowHW3)
console.log(`Previous Month Is ${monthNames[dateNowHW3.getMonth()]} And Last Day Is ${dateNowHW3.getDate()}`)

// 4
console.log(new Date("Oct 10 2000"))
console.log(new Date(Date.parse("Oct 10 2000")))
console.log(new Date("10@10@2000"))

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

// 5
let startHW5 = performance.now();
for(i=0;i<99999;i++);
let endHW5 = performance.now();
let durationHW5 = endHW5 - startHW5;
console.log(`Loop Took ${durationHW5.toFixed(0)} Milliseconds.`)

// Needed Output
// "Loop Took 1921 Milliseconds."

// 6
// Write Your Generator Function Here
function* gen(){
  let index = 14;
  let odd = 1;
  while (true) {
    yield index;
    index = index + +(`${odd}`+"40");
    odd += 2 ;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// 7
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll(){
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}
let generator7 = genAll();

console.log(generator7.next()); // {value: 1, done: false}
console.log(generator7.next()); // {value: 2, done: false}
console.log(generator7.next()); // {value: 3, done: false}
console.log(generator7.next()); // {value: 4, done: false}
console.log(generator7.next()); // {value: 5, done: false}
console.log(generator7.next()); // {value: "A", done: false}
console.log(generator7.next()); // {value: "B", done: false}
console.log(generator7.next()); // {value: "C", done: false}
console.log(generator7.next()); // {value: "D", done: false}

// 8
// main.js File

// // mod-two.js File
// let aM = 10; // Do Not Edit Names
// let bM = 20; // Do Not Edit Names
// let cM = 30; // Do Not Edit Names

// HW169-178
console.log("HW169-178 :");
// 1
// "./articles.json"

// 2
let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let jsonHW = JSON.parse(this.responseText);
    for(i=0;i<jsonHW.length;i++){
      console.log(jsonHW[i].article)
    }
    console.log("Data Loaded")
  }
}


// 3
// mainData Variable Content
req.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let mainData = JSON.parse(this.responseText);
    for(i=0;i<mainData.length;i++){
      mainData[i].section = "All";
    }
    let updatedData = JSON.stringify(mainData)
    console.log(updatedData)
  }
}

// 0: {id: 1, title: 'Title 1', body: 'Article Number 1 Body', category: 'All', author: 'Ali'}
// 1: {id: 2, title: 'Title 2', body: 'Article Number 2 Body', category: 'All', author: 'Mahmoud'}
// 2: {id: 3, title: 'Title 3', body: 'Article Number 3 Body', category: 'All', author: 'Osama'}
// 3: {id: 4, title: 'Title 4', body: 'Article Number 4 Body', category: 'All', author: 'Sayed'}
// 4: {id: 5, title: 'Title 5', body: 'Article Number 5 Body', category: 'All', author: 'Ahmed'}

// UpdatedData Variable Content
// "JSON Object Content Here"

// 4
req.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let toObj = JSON.parse(this.responseText);
    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    document.body.append(mainDiv);
    for(i=0;i<toObj.length;i++){
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      mainDiv.append(div)
      div.append(h2)
      h2.append(document.createTextNode(toObj[i].title))
      let arrP = ["article","section","writer"];

      for(j=0;j<arrP.length;j++){
      let p = document.createElement("p");
      div.append(p);
      if(0<j){
        p.append(document.createTextNode(`${[arrP[j]]}: ${toObj[i][arrP[j]]}`)) 
      }else{
        p.append(document.createTextNode(toObj[i][arrP[j]]))     
      }
      }
    }
  }
}


// HW179-188
console.log("HW179-188 :");
// 1

const getApi = (apiLink)=>{
  return new Promise((res, rej)=>{
    let XHR = new XMLHttpRequest();
    XHR.onload = function() {
      if(this.readyState == 4 && this.status == 200){
        res(JSON.parse(this.responseText))
      }else{
        rej(Error("Api Is Failed"))
      }
    }

    XHR.open("GET",apiLink);
    XHR.send();
  });
}
getApi("./lastHW.json").then((data)=>{
  data.length = 5;
  for(i in data){
    //  console.log(data[i].title)
    //  console.log(data[i].description)
     let div = document.createElement("div");
     let h3 =  document.createElement("h3");
     let p =  document.createElement("p");
     document.body.append(div);
     div.append(h3);
     div.append(p)
     h3.append(document.createTextNode(data[i].title))
     p.append(document.createTextNode(data[i].description))
    }
  // console.log(data)
}).catch((rej) => {
  console.error(rej);
});
// 2
async function fetcher(){
  try{
    let myData = await fetch("./lastHW.json");
    let data = await myData.json();
    data.length = 5;
    for(i in data){
    //  console.log(data[i].title)
    //  console.log(data[i].description)
     let div = document.createElement("div");
     let h3 =  document.createElement("h3");
     let p =  document.createElement("p");
     document.body.append(div);
     div.append(h3);
     div.append(p)
     h3.append(document.createTextNode(data[i].title))
     p.append(document.createTextNode(data[i].description))
    }
    // console.log(data)
  }catch{
    console.error(Error("Api Is Failed"))
  }
}
fetcher();

// function kSumSubset(numArray, k) {
//   let len = numArray.length;

//   function subSum(numArray, k, len){
//     if(k == 0) return true;
//     if(len == 0)return false;
  
//     if(numArray[len-1] > k) return subSum(numArray, k, len - 1)

//     return subSum(numArray, k, len - 1) || subSum(numArray, k - numArray[len - 1], len - 1)
//   }
//   return subSum(numArray, k, len)
// }
// console.log(kSumSubset([3, 34, 4, 12, 5, 2], 0))

// function kSumSubset(numArray, k) {
  
  // let sums = []
  // let nums = [];
  // let len = Math.pow(2, numArray.length);
  // for(i=0;i<len;i++){
  //   nums = [];
  //   for(j=0;j<numArray.length;j++){
  //     if (i & Math.pow(2, j)){
  //       nums.push(numArray[j]);
  //     }
  //   }
  //   if(nums.length > 1){
  //     sums.push(nums.reduce((n1,n2)=> n1+n2));
  //   }
  // }
  // sums.pop()
  // return sums.includes(k);
// }




// function isSubsetSum(set, n, sum)
// {
//   console.log("step 1", ` | set = [${set}] , n = ${n} , sum = ${sum}`)
//     // Base Cases
//     if (sum == 0)
//         return true;
//     if (n == 0)
//         return false;

//     // If last element is greater than sum,
//     // then ignore it
//     console.log("-")
//     console.log("step 2" , set[n - 1] > sum ,`| ${set[n - 1]} > ${sum} |` , "set[n - 1] > sum")
//     if (set[n - 1] > sum)
//         return isSubsetSum(set, n - 1, sum);

//     /* else, check if sum can be obtained
//     by any of the following
//     (a) including the last element
//     (b) excluding the last element */
//     console.log("-")
//     console.log("step 3", set, n - 1, sum)
//     console.log("step 3", set, n - 1, sum - set[n - 1])
//     console.log("step 3", (set, n - 1, sum) +5 || (set, n - 1, sum - set[n - 1]))
//     console.log("------")

//     return isSubsetSum(set, n - 1, sum)
//       || isSubsetSum(set, n - 1, sum - set[n - 1]);
// }
// console.log(isSubsetSum([14,8,12,9],4,21))




function remaining_download_time(file_size, bytes_downloaded, minutes_of_observation) {
  if(bytes_downloaded.length == 0) return file_size;
  let sum = bytes_downloaded.reduce((a,b)=>a+b);
  if(sum == file_size) return 0;
  let remaining = file_size - sum;
  let n = bytes_downloaded.length;
  let x = 0;
  for(i =1; i <= minutes_of_observation; i++){
    x += bytes_downloaded[n-i];
  }
  let avg = x / minutes_of_observation;
  return Math.ceil(remaining / avg);
}
console.log(remaining_download_time(185, [0,0,9,6], 3))

