// 1-Createing Elemant
let header = document.createElement("header");
let divLogo = document.createElement("div");
let ul = document.createElement("ul");

let divContent = document.createElement("div");

let footer = document.createElement("footer");

// 2-Add Attributes
header.setAttribute("class","website-head");
divLogo.setAttribute("class","logo");
divLogo.setAttribute("title","website-logo");
ul.setAttribute("class","menu");

divContent.setAttribute("class","content");

footer.setAttribute("class","footer");

// 3-Add Text
divLogo.innerHTML = "Elzero";
footer.innerHTML = "Copyright 2022";

// 4-Style
document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: tahoma, Arial;";
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";
divLogo.style.cssText = "font-weight: bold; color:rgb(35, 169, 110); font-size: 26px; cursor: pointer;";
ul.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none;";

divContent.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";

footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
// 5-Show 
document.body.appendChild(header)
header.appendChild(divLogo)
header.appendChild(ul)

document.body.appendChild(divContent)

document.body.appendChild(footer)

// 6-Procedures
for(let i= 0; i < 4;i++){
    var li = document.createElement("li");
    ul.appendChild(li);
    li.style.cssText = "margin: 10px; cursor: pointer; color: rgb(136, 136, 136);";

    i == 0
        ? li.append("Home")
        : i == 1
        ? li.append("About")
        : i == 2
        ? li.append("Service")
        :li.append("Contact");
}

for(let i= 0; i < 15;i++){
    let divProduct = document.createElement("div");
    let span = document.createElement("span");

    divProduct.setAttribute("class","product");
    
    divContent.appendChild(divProduct)
    divProduct.appendChild(span)
    span.append(i+1)
    divProduct.append("product")

    divProduct.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
    span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;"
}


function replaceThe(txt) {
    newTxt = "";
  if(/the\s\b[aeiou]/ig.test(txt)){
    newTxt = txt.replace("the","an")
  }else{
    newTxt = txt.replace("the","a");
  }
  return newTxt;
}
txt = "Here is the plan";
replaceThe(txt);

// function isEmail(email) {
//     // write your code here

// }
// let email =  'a-.r_@e.co';
// let reg = /^[a-z][_.-\w]*@[a-z]+.[a-z]{2,}$/ig;
// console.log(email.match(reg))
// console.log(reg.test(email))

// cap_space()
function convert_time(time) {
    if(/am/ig.test(time)){
        time = time.replace(" am","");
        if(time[0]+time[1] == 12){
           return time.replace(12,0);
        }
    }else if(/pm/ig.test(time)){
        time = time.replace(" pm","");
        let hour = time.match(/\d+/g);
        if(hour[0] != 12){
            let hour24 = +hour[0] + 12;
            return time.replace(hour,hour24);
        }
    }else if(!/am/ig.test(time)){
        let hour = time.match(/\d+/g);
        newTime = "";
        if(hour[0] == 0){
            newTime = time.replace(0, 12);
            return newTime += " am";
        }else if(hour[0] < 12){
            return newTime += time + " am";
        }else if(hour[0] == 12){
            return newTime += time + " pm";
        }else if(hour[0] > 12){
            let hour12 = +hour[0] - 12;
            console.log(time.replace(hour,hour12))
            return time.replace(hour,hour12);
        }
    }
}
convert_time('19:30')
console.log(!/am/ig.test('11:30'))
console.log()




// console.log(alphabet.indexOf("rsuv"[0]))

// let arrNew = ["P","T"];
// console.log(txtC.match(/[A-Z]/g))
// console.log(txtC.replace("P", " P"))

// for(i=0;i<txtC.length;i++){
//     if(arrNew[0] == txtC[i]){
//         newTxt = txtC.replace(arrNew[0], " "+arrNew[0])
//         arrNew.unShift()
//     }
// }

// word = word.toLowerCase();
// let dupl = word.match(/(\w)\1+/ig);
// let arrows = "";
// for(i=0;i<word.length;i++){
//     for(j=0;j<dupl.length;j++){
//         if(dupl[j][0] == word[i]){
//             arrows += "<"
//             break;
//         }
//         if(dupl.length-1 == j) arrows += ">";
//     }
// }
// return arrows;

function arrowDuplicates(word) {
    
word = word.toLowerCase();
let dupl = word.match(/(\w)\1+/ig);
let arrows = "";
for(i=0;i<word.length;i++){
    for(j=0;j<dupl.length;j++){
        if(dupl[j][0] == word[i]){
            arrows += "<"
            break;
        }
        if(dupl.length-1 == j) arrows += ">";
    }
}
return arrows;

}
let word = 'bbvsdsS';
arrowDuplicates(word)
// console.log([word.replaceAll(/(\w)\1+/ig, '')])

// /the\s[^aeiou]?/ig.tset('Here is the plan')

// arrLen = array1.length > array2.length ? array1.length: array2.length;

// for(i=0;i<arrLen;i++){

// }

// function count_ones(num) {
//     let newArr = [];
//     for(i=num;i>=1;i = Math.floor(i / 2)){
//         if(i % 2 == 0){
//             newArr.unshift(0);
//         }else{
//             newArr.unshift(1);
//         }
//     }
//     return newArr;
// }

// let newArr = [];
// for(i=0;i<a.length;i++){
//     if(b.includes(a[i])){
//         newArr.push(a[i]);
//     }
// }
// for(i=0;i<newArr.length;i++){
//     for(j=0;j<i;j++){
//         if(newArr[i] > newArr[j]){
//             let x = newArr[i];
//             newArr[i] = newArr[j];
//             newArr[j] = x;
//         }    
//     }
// } 
// return newArr;

console.log("S" < "Y")


// console.log(('wePlayTennis').slice())
// x ="30";
y = 'Here is the plan';
// console.log(replaceThe(y))
console.log(y.slice(y.indexOf("the")+4, (y.indexOf("the")+4).length).match(/[aeiou]/g)[0])

vowels = y.match(/[aeiou]/i);
console.log(vowels)

// console.log(y.replace(/the/g, "a"))

var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 0; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        //   [Arr[i] , Arr[j]] = [Arr[j] , Arr[i]]
        }

console.log(Arr);
// function removeSpecialCharacters(strParam) {
//   return strParam.match(/[a-z - _]/ig).join("");
// }
// removeSpecialCharacters('Are_u_coming?');
// console.log('Are_u_coming?'.match(/[a-z - _]/ig).join(""))

// function replaceThe(txt) {
//   if(true){
//     return txt.replace("the","a")
//   }
// }
// replaceThe('Here is the plan')
// /the\s[^aeiou]?/ig.tset('Here is the plan')
// console.log('Here is the plan'.match(/the\s[^aeiou]?/ig))
// console.log(/the\s[^aeiou]?/ig.tset('Here is the plan'))

