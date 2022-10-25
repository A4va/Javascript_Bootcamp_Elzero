let tasks = document.querySelector(".tasks");
let input = document.querySelector(".input");
let add = document.querySelector(".add");

let arrayObj = [];

if (window.localStorage.getItem("tasks")) {
    arrayObj = JSON.parse(window.localStorage.getItem("tasks"));
}

appendTasks();

addTasks();
function addTasks(){
    add.onclick = ()=>{
        if(input.value.trim() != ""){
            addTxt(input.value)
        }
    
    }
}

function addTxt(txt){
    const taskObj = {
        id: Date.now(),
        title: txt
    }
    input.value = "";
    arrayObj.push(taskObj);
    myLocalStorage(arrayObj)
    console.log(JSON.stringify(arrayObj))
    loopObjs(arrayObj)
}

function myLocalStorage(arrayObj){
    window.localStorage.setItem("tasks",JSON.stringify(arrayObj))

}

function loopObjs(Objs){
    tasks.innerHTML = ""
    Objs.forEach(e => {
        let task = document.createElement("div");
        let del = document.createElement("button");

        task.setAttribute("data-id",e.id)
        task.setAttribute("title",e.title)

        task.className = "task";
        del.className = "del";

        del.innerHTML = "&times;";

        tasks.appendChild(task);
        task.appendChild(document.createTextNode(e.title));
        task.appendChild(del);
        console.log(task)

    });
}
function appendTasks(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        tasker = JSON.parse(data)
        loopObjs(tasker);
    }
}

tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
        arrayObj = arrayObj.filter((task) => task.id != e.target.parentElement.getAttribute("data-id"));
        myLocalStorage(arrayObj);
    }
    // else if(e.target.classList.contains("task")){
    //     e.target.classList.toggle("done")
    // }
})
