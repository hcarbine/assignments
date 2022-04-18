document.getElementById("box").addEventListener("mouseover", function() {
    document.getElementById("box").style.backgroundColor = "blue";
});
    
document.getElementById("box").addEventListener("mousedown", function() {
    document.getElementById("box").style.backgroundColor = "red";
});

document.getElementById("box").addEventListener("mouseup", function() {
    document.getElementById("box").style.backgroundColor = "yellow";
});

document.getElementById("box").addEventListener("dblclick", function() {
    document.getElementById("box").style.backgroundColor = "green";
});

document.getElementById("box").addEventListener("wheel", function() {
    document.getElementById("box").style.backgroundColor = "orange";
});

document.body.addEventListener("wheel", function() {
    document.getElementById("box").style.backgroundColor = "orange";
});