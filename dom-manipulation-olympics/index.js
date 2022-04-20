const header = document.getElementById("header");
    header.innerHTML = "<h1>JavaScript Made This!!</h1><h2><span style='color:peachpuff'>Holly</span> wrote this JavaScript</h2>"

    header.style.display = "flex"
    header.style.alignItems = "center"
    header.style.flexDirection = "column"

const left = document.getElementsByClassName("message left");
    left[0].textContent = "Hey! What are you doing this weekend?"
    left[1].textContent = "I need someone to walk my fish!"

const right = document.getElementsByClassName("message right");
    right[0].textContent = "I'm going to the circus, why?"
    right[1].textContent = "I hope your fish drowns!"

var clear = document.getElementById("clear-button")

function clearMessages(){
    left[0].textContent = ""
    left[1].textContent = ""
    right[0].textContent = ""
    right [1].textContent = ""
    
}
clear.addEventListener("click",clearMessages)


