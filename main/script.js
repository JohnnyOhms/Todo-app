window.onload = ()=>{
    displayList();
}


//variables
const input = document.getElementById("text"),
addBtn = document.querySelector(".add-btn"),
listparent = document.querySelector(".todo-table"),
taskCount = document.getElementById("num"),
clearList = document.querySelector(".clear");
let task;

addBtn.addEventListener('click', addList)
function addList(ev){
    ev.preventDefault();
    if (input.value == ""){
        return;
    }else{
        listparent.innerHTML = ""
        AddToLocalstorage();
        getFromLocalstorage();
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
    for (let i = 0; i < task.length; i++) {
        const list = task[i];
        let listElement = document.createElement('li');
        listElement.innerHTML = list
        listparent.appendChild(listElement);
    }
    console.log(task.length);
    taskCount.innerHTML = `(${task.length})`
}

clearList.addEventListener("click", (ev)=>{
    ev.preventDefault();
    getFromLocalstorage();
    confirm("Do you want to clear List?")
    if(confirm == true){
        localStorage.clear()
        displayList();
    }else{
        return;
    }
})

