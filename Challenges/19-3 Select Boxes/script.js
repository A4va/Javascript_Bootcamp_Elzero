// let selects = ["fonts","colors","sizes"]
let fonts = ["Open Sans","Cairo","Roboto"]
let colors = ["Crimson","Tomato","Goldenrod","Seagreen","Royalblue","Slateblue"]

function itemsManeger(){
    let curFont = window.localStorage.getItem("fonts");
    let curColor = window.localStorage.getItem("colors");
    let curSize = window.localStorage.getItem("sizes");

    if(!curFont){
        curFont = fonts[0], curColor = colors[0], curSize = "16px";
    }

    window.localStorage.setItem("fonts",curFont);
    window.localStorage.setItem("colors",curColor);
    window.localStorage.setItem("sizes",curSize);

    document.querySelector(".continerp").style.cssText = `font-family: ${curFont}; color: ${curColor}; font-size: ${curSize};`;
}
itemsManeger();

function options(){
    for(i=0;i<fonts.length;i++){
        document.querySelector(".fonts").appendChild(document.createElement("option")).innerHTML = fonts[i];
    }
    for(i=0;i<colors.length;i++){
        document.querySelector(".colors").appendChild(document.createElement("option")).innerHTML = colors[i];
    }
    for(i=0;i<=16;i++){
        document.querySelector(".sizes").appendChild(document.createElement("option")).innerHTML = i+16+"px";
    }
}
options();

document.querySelectorAll("select").forEach((e)=>{

    document.querySelector("."+e.className).addEventListener("change",(e)=>{ 

        if(e.target.className == "fonts"){
            localStorage.setItem("fonts",e.target.selectedOptions[0].text);
        }else if(e.target.className == "colors"){
            localStorage.setItem("colors",e.target.selectedOptions[0].text);
        }else{
            localStorage.setItem("sizes",e.target.selectedOptions[0].text);
        }
        itemsManeger();
    })
})