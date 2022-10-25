let currEle = document.querySelector('[title="Current"]');
let addClass = document.querySelector(".classes-to-add");
let delClass = document.querySelector(".classes-to-remove");
let mainDiv = document.querySelector(".classes-list").lastElementChild;

addClass.onblur = () =>{
    if(addClass.value != ""){
        let arrAdd = addClass.value.replace(/\s+/g," ").trim().split(" ");
        for(i = 0; i < arrAdd.length;i++){
            currEle.classList.add(arrAdd[i].toLowerCase())
            console.log(arrAdd[i].toLowerCase())
        }
        console.log(arrAdd)
        addClass.value = "";
       }
       spanAdder()
}

delClass.onblur = () =>{
    if(delClass.value != ""){
        let arrDel = delClass.value.replace(/\s+/g," ").trim().split(" ");
        for(i = 0; i < arrDel.length;i++){
            currEle.classList.remove(arrDel[i].toLowerCase())
            console.log(arrDel[i].toLowerCase())
        }
        console.log(arrDel)
        delClass.value = "";
       }
       spanAdder()
}

let spanAdder = () => {
    mainDiv.innerHTML = "";
    for(i = 0; i < currEle.classList.length;i++){
        let sortArr = currEle.className.split(" ").sort();
        let span = document.createElement("span");
        let txt = document.createTextNode(sortArr[i]);
            mainDiv.appendChild(span)
            span.appendChild(txt)
    }
    if(!mainDiv.hasChildNodes()){
        mainDiv.innerHTML = "No Classes To Show";
    }
}

window.onload = spanAdder();

console.log()