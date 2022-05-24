//*QUALIFIER*//

const header = document.getElementById('header');
    header.innerHTML = "<h1>JavaScript Made This!!</h1><h2><span style='color:peachpuff'>Holly</span> wrote this JavaScript</h2>"

    header.style.display = "flex"
    header.style.alignItems = "center"
    header.style.flexDirection = "column"

//*BRONZE*//

const left = document.getElementsByClassName("message left");
    left[0].textContent = "Hey! What are you doing this weekend?"
    left[1].textContent = "I need someone to walk my fish!"

const right = document.getElementsByClassName("message right");
    right[0].textContent = "I'm going to the circus, why?"
    right[1].textContent = "I hope your fish drowns!"

const clear = document.getElementById("clear-button")

function clearMessages(){
    left[0].textContent = ""
    left[1].textContent = ""
    right[0].textContent = ""
    right[1].textContent = ""   
}
clear.addEventListener("click",clearMessages)

//*SILVER*//

const dropDown = document.getElementById('theme-drop-down');
const rightMessage = document.getElementsByClassName('right');
const leftMessage = document.getElementsByClassName('left');

dropDown.addEventListener('change', themeSelect);

function themeSelect(){
    var selected = document.getElementById('theme-drop-down').value;

    if(selected === "theme-one"){
        for(let i=0; i<rightMessage.length; i++){
            let change = rightMessage[i];
            change.style.backgroundColor = "lightblue";
            console.log("blue")
        };
        for(let i=0; i<leftMessage.length; i++){
            let change = leftMessage[i];
            change.style.backgroundColor = "burlywood";
            change.style.color = "black";
            console.log("brown")
        };
    }
    if(selected === "theme-two"){
        for(let i=0; i<rightMessage.length; i++){
            let current = rightMessage[i];
            current.style.backgroundColor = "red";
            console.log("red")
        };
        for(let i=0; i<leftMessage.length; i++){
            let current = leftMessage[i];
            current.style.backgroundColor = "black";
            current.style.color = "white"
            console.log("black")
        };
    }
}
//*GOLD*//



