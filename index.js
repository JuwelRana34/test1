let todoForm = document.getElementById("todoForm")
let todoInput = document.getElementById("todoInput")
let showTodo = document.getElementById("showTodo")
let btn = document.getElementById("btn")
let deletBtn = document.querySelector(".btn2")


const getTodoListFromLocal = () =>{
  return JSON.parse(localStorage.getItem("todolist"))
}

let localTodoList = getTodoListFromLocal() || []


const addtododinamic = (elem)=>{
  createTodoElement(elem)
}



const addtodoList = (e)=>{
 e.preventDefault()
 let todovalue = todoInput.value.trim()

todoInput.value = " "

 localTodoList.push(todovalue)
 localTodoList = [... new Set(localTodoList)]
console.log(localTodoList);

localStorage.setItem("todoList", JSON.stringify(localTodoList) )


createTodoElement(todovalue)

//  document.getElementById("todoInput").value = " "

}

 const showTodolist = ()=>{
  localTodoList.forEach((elem)=>{
addtododinamic(elem)
console.log(elem);
  })

}

showTodolist()

btn.addEventListener("click",function(e){
  addtodoList(e);


})


function createTodoElement(todovalue){
  const div = document.createElement("div")
  div.className = " showDiv"
  div.innerHTML = `<li>⏩ ${todovalue}</li> <button class="btn2" >delet</button>`
  showTodo.appendChild(div)

  if(showTodo !== " " ){
    showTodo.classList.add("showbg")
  }
}




