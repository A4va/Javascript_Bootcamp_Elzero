/*
  Loop Challenge
*/
let myAdmins = ["Ahmed", "Osama", "Sayed","Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let Stop = 0;

for(let i = 0; i < myAdmins.length ; i++){
  if (myAdmins[i] === "Stop") {
    break;
  }
  console.log(myAdmins[i])
  Stop++
}

document.write(`<h1>We Have ${Stop} Admins</h1><hr>`);

for(let i = 0; i < Stop; i++){
  document.write(`<h2>The Admin For Team ${i+1} Is ${myAdmins[i]}</h2>`);
  document.write(`<div><h3>Team Members:-</h3>`);
  let counter = 0;
  for(let j = 0; j < myEmployees.length; j++){

    if ( myAdmins[i][0] === myEmployees[j][0]) {
      counter++
      console.log(myEmployees[j])
      document.write(`<p>${counter}- ${myEmployees[j]}</p>`)
    }
  }
  document.write(`</div><hr>`)
}