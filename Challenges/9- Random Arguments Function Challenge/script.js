/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

/*
function showDetails(...details){

  console.log(details)

    if (typeof details[0] === "string" && typeof details[1] === "number") {
      if (details[2] === true) {
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Available For Hire`)
      }else{
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Not Available For Hire`)
      }
      
    }else if (typeof details[1] === "string" && typeof details[0] === "number") {
      if (details[2] === true) {
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Available For Hire`)
      }else{
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Not Available For Hire`)
      }
      
    }else if (typeof details[1] === "string" && typeof details[2] === "number") {
      if (details[0] === true) {
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Available For Hire`)
      }else{
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Not Available For Hire`)
      }
      
    }else if (typeof details[2] === "string" && typeof details[1] === "number") {
      if (details[0] === true) {
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Available For Hire`)
      }else{
        console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are Not Available For Hire`)
      }
      
    }
  
}
*/
function showDetails(a,b,c){

  let str, num, bol;

  // typeof a === "string"
  //   ? (str = a)
  //   : typeof b === "string"
  //   ? (str = b)
  //   : (str = c);
  // typeof a === "number"
  //   ? (num = a)
  //   : typeof b === "number"
  //   ? (num = b)
  //   : (num = c);
  // typeof a === "boolean"
  //   ? (bol = a)
  //   : typeof b === "boolean"
  //   ? (bol = b)
  //   : (bol = c);
  //   bol === true ? bol = "": bol = "Not " 


    if(typeof a === "string" && typeof b === "number") {
      str = a;
      num = b;
      bol = c;
    }else if (typeof a === "number" && typeof b === "string") {
      str = b;
      num = a;
      bol = c;
    }else if (typeof b === "number" && typeof c === "string") {
      str = c;
      num = b;
      bol = a;
    }else if (typeof b === "string" && typeof c === "number") {
      str = b;
      num = c;
      bol = a;
    }else if (typeof a === "string" && typeof c === "number") {
      str = a;
      num = c;
      bol = b;
    }else if (typeof c === "string" && typeof a === "number") {
      str = c;
      num = a;
      bol = b;
    }

    if(bol === true){
      bol = "";
    }else{
      bol = "Not ";
    }

    

    console.log(`Hello ${str}, Your Age Is ${num}, You Are ${bol}Available For Hire`)
  
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
showDetails(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails("Osama", false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"