let inputs = document.querySelectorAll(".input")

let submit = document.querySelector('[type="submit"]')
let results = document.querySelector(".results")


document.forms[0].onsubmit = e =>{

    if (results.hasChildNodes){
        results.innerHTML="";
    }

    for(i = 1; i <= inputs[0].value; i++){
        let ele = document.createElement(inputs[2].value.toLowerCase())
        let txt = document.createTextNode(`${i}- ${inputs[1].value}`);

        ele.setAttribute("class","box");
        ele.setAttribute("title","Element");
        ele.setAttribute("id","id-"+i);

        results.appendChild(ele)
        ele.appendChild(txt)
    }
    e.preventDefault();
}

document.forms[0].oninput = e =>{
    console.log(inputs[0].value)
    console.log(inputs[1].value)
}



