/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = (...Friends) => {
    // Parameter ?

    var theNames = "";
    for(i = 0; i < Friends.length; ++i){
        
        if(i == Friends.length - 1){
        theNames += ` [${Friends[i]}]`;

        }else{
            theNames += ` [${Friends[i]}],`;
        }
     }
     return `String${theNames} => Done !`;
};

  console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// Best Sol
let namesz = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(namesz("Osama", "Mohamed", "Ali", "Ibrahim"));
  
  // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
  
  /* ================================= */
  
  // [1] Replace ??? In Return Statement To Get The Output
  // [2] Create The Same Function With Regular Syntax
  // [3] Use Array Inside The Arguments To Get The Output
  
  let myNumbers = [20, 50, 10, 60];
  
  let calc = (one, two, ...nums) => one + two + Number(nums);
  
  console.log(calc(10, myNumbers.pop(), myNumbers.pop())); // 80

