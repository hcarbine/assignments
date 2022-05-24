const colors = ["red", "blue", "green"]


document.getElementById("add").addEventListener("click", function(e){
    var input = document.getElementById("input")
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    input.value = '';
})

function createDropDown(){
    const dropDown = document.createElement('select')
    for (let i = 0; i < colors.length; i++){ 
        const option = document.createElement('option')
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.appendChild(option)
    }
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


