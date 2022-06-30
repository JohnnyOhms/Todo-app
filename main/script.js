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
    getFromLocalstorage();

    let listObj = {
        tdList: input.value
    }
    task.push(listObj)
    localStorage.setItem("tasks", JSON.stringify(task));
    input.value = ""
}

function getFromLocalstorage(){

    if (localStorage.getItem("tasks") === null) {
        task =[];
    }else{
        task = JSON.parse(localStorage.getItem("tasks"))
    }
}

function displayList(){

   getFromLocalstorage();
    task.forEach((list, index)=>{
        let listElement = document.createElement('li')
        let iconEdit = document.createElement("span")
        let iconDel = document.createElement("span")
        let cta = document.createElement("div")
        cta.classList.add("cta")
        iconEdit.innerHTML = `<i class="fa-solid fa-pen-to-square" id="${index}}"  onclick ="editList(this.id)"></i>`
        iconDel.innerHTML =  `<i class="fa-solid fa-trash-can" id="${index}" onclick = "remove(this.id)"></i>`
        listElement.innerHTML = list.tdList
        listElement.appendChild(cta)
        cta.appendChild(iconEdit)
        cta.appendChild(iconDel)
        listParent.appendChild(listElement)
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

function editList(index){
    getFromLocalstorage();
    console.log(task[index].tdList)
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

