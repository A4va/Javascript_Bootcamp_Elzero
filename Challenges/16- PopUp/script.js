let container = document.createElement("div");
let conCoun = document.createElement("div");
let div = document.createElement("div");
let counter = document.createElement("h1");
let H3 = document.createElement("h3");
let p = document.createElement("p");
let btn = document.createElement("button");

document.body.appendChild(conCoun);
conCoun.appendChild(counter);
document.body.appendChild(container);
container.appendChild(div);
div.appendChild(btn);
div.appendChild(H3);
div.appendChild(p);

counter.innerHTML= 10;
H3.innerHTML = "Welcome"
p.innerHTML = "Welcome To The Website."
btn.innerHTML= "&times;"

container.className = "popUp";

conCoun.style.cssText = "position: absolute; top: 10%";
document.body.style.cssText = "margin: 0; padding: 0; box-sizing: border-box; display: flex; justify-content: center; align-items: center; font-family: tahoma, Arial;"
container.style.cssText = "display: none;"
div.style.cssText = "text-align: center;"
btn.style.cssText = "position: absolute; top: -.8rem; right: -.8rem; background-color: crimson; border: 1px solid white; color: white; font-size: larger; border-radius: 50%; height: 2rem; width: 2rem; cursor: pointer;"

setTimeout(()=>{
    container.style.cssText = "display: flex; justify-content: center; align-items: center; background-color: #f5f3f4; border: 1px solid #e2e0e0; margin: 20%; height: 9rem; width: 60%; position: relative;"
},5000);

btn.onclick = () =>{
    container.style.cssText = "display: none;"
};

function countdown() {
    counter.innerHTML -= 1;
    if (counter.innerHTML === "0") {
      clearInterval(counterx);    
    }
  }
  
let counterx = setInterval(countdown, 1000);