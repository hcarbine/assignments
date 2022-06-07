const form = document.addItem

form.addEventListener("submit", function(event){
event.preventDefault()

const title = form.title.value
    form.title.value = ""

const listItem = document.createElement("li")
    listItem.textContent = title
    listItem.setAttribute = ("class", "list")
    list.append(listItem)
    
const buttons = document.createElement("li")
    buttons.setAttribute("class", "list")
    buttons.setAttribute("id", "li")
    list.append(buttons)
    buttons.style.justifyContent = "center"

    const edit = document.createElement("button")
    edit.textContent = 'edit'
    edit.setAttribute("id", "edit")
    buttons.appendChild(edit)
    edit.style.marginRight = "5px"

edit.addEventListener("click", function(){
    const editItem = document.createElement("INPUT")
    editItem.setAttribute("class", "input")
    list.replaceChild(editItem, listItem)
    let val = editItem.value

const saveBtn = document.createElement("button")
    saveBtn.textContent = 'save'
    saveBtn.setAttribute("class", "list")
    buttons.replaceChild(saveBtn, edit)
    saveBtn.style.marginRight = "5px"

saveBtn.addEventListener("click", function(){
    buttons.replaceChild(edit, saveBtn)
    editItem.replaceWith(editItem.value)  
     })
 })  

const remove = document.createElement("button")
    remove.textContent = 'X'
    buttons.appendChild(remove)
    remove.style.marginRight = '5px'

remove.addEventListener("click", function(){
       listItem.style.display = "none"
       edit.style.display = "none"
       remove.style.display = "none"
})

})

