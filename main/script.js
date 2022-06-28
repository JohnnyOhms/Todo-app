window.onload = ()=>{
    getFromLocalstorage()
    if (localStorage.getItem('tasks') === null) {
        return;
    } else {
        displayList();
    }
    
}

//variables
const input = document.getElementById("text"),
addBtn = document.querySelector(".add-btn"),
listParent = document.querySelector(".todo-table"),
taskCount = document.getElementById("num"),
clearList = document.querySelector(".clear");
let task;

addBtn.addEventListener('click', addList)
function addList(ev){
    ev.preventDefault();
    if (input.value == ""){
        return;
    }else{
        listParent.innerHTML = ""
        AddToLocalstorage();
        displayList();
    }

}

function AddToLocalstorage(){
    if (localStorage.getItem("tasks") === null) {
        task =[];
    }else{
        task = JSON.parse(localStorage.getItem("tasks"))
    }
    
    task.push(input.value)
    localStorage.setItem("tasks", JSON.stringify(task));
    input.value = ""

}

function getFromLocalstorage(){

    task = JSON.parse(localStorage.getItem("tasks"))
    console.log(task)
}

function displayList(){
    getFromLocalstorage();
    // for (let i = 0; i < task.length; i++) {
    //     const list = task[i];
  
    task.forEach((list, index)=>{
        let listElement = document.createElement('li')
        let iconEdit = document.createElement("button")
        let iconDel = document.createElement("button")
        iconEdit.innerHTML = `<i class="fa-solid fa-pen-to-square" id="${index}"  onclick ="editList(this.id, ${list})"></i>`
        iconDel.innerHTML =  `<i class="fa-solid fa-trash-can" id="${index}" onclick = "remove(this.id)"></i>`
        listElement.innerHTML = list
        listElement.appendChild(iconEdit)
        listElement.appendChild(iconDel)
        listParent.appendChild(listElement);
        console.log(list);

    })
    taskCount.innerHTML = `(${task.length})`
}

function remove(index){
    getFromLocalstorage();
    task.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(task))
    listParent.innerHTML = ""
    displayList();
}

function editList(list, index){
    getFromLocalstorage();
    input.value = list
    console.log(String(index));
    task.splice(index, 1)
    string()

}

clearList.addEventListener("click", (ev)=>{
    getFromLocalstorage();
    let confirmDelete = confirm("Do you want to clear List?")
    if (listParent.innerHTML == "") {
        alert("no Task to clear"); 
    } else {
          if(confirmDelete == true){
            localStorage.clear()
            listParent.innerHTML = ""
            taskCount.innerHTML = `(0)`
        }else{
            return;
        }
    }
  
})

