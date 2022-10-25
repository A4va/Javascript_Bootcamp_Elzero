function itemsManeger(){
    let curTxt = window.sessionStorage.getItem("txtInp");
    let curNum = window.sessionStorage.getItem("numtInp");
    let curdate = window.sessionStorage.getItem("dateInp");
    let SlctdOp = window.sessionStorage.getItem("option");
    let ops = document.querySelectorAll("option");


    window.sessionStorage.setItem("txtInp",curTxt);
    window.sessionStorage.setItem("numtInp",curNum);
    window.sessionStorage.setItem("dateInp",curdate);
    window.sessionStorage.setItem("option",SlctdOp);

    if(curTxt != "null"){
        document.querySelector('[type="text"]').setAttribute("value",curTxt)
        document.querySelector('[type="number"]').setAttribute("value",curNum)
        document.querySelector('[type="date"]').setAttribute("value",curdate)
    }

    for(i=0;i<ops.length;i++){
        ops[i].removeAttribute("selected");

        if(ops[i].value == SlctdOp){
            ops[i].setAttribute("selected","true");
        }
    }


}
itemsManeger();

document.querySelector("select").addEventListener("change",(e)=>{
    sessionStorage.setItem("option",e.target.value);
    console.log(e.target.value)
});

document.querySelectorAll("input").forEach((e)=>{
    e.addEventListener("blur",(e)=>{ 
        if(e.target.type == "text"){
            sessionStorage.setItem("txtInp",e.target.value);
        }else if(e.target.type == "number"){
            sessionStorage.setItem("numtInp",e.target.value);
        }else{
            sessionStorage.setItem("dateInp",e.target.value);
        }
        itemsManeger();
    })
})