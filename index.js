let todoForm = document.getElementById("todoForm")
let todoInput = document.getElementById("todoInput")
let showTodo = document.getElementById("showTodo")
let btn = document.getElementById("btn")
let deletBtn = document.querySelector(".btn2")

const getTodoFromLocal =  JSON.parse(localStorage.getItem("todoList")) || [];
console.log(getTodoFromLocal);
   getTodoFromLocal.forEach((todo) => {
    createTodoElement(todo)
   });


const setTodoToLocal = (todos)=>{
 new Set( localStorage.setItem("todoList",JSON.stringify(todos ))) 
}

let todoArry = []

btn.addEventListener("click",function(e){
  e.preventDefault()
 let todoValu = todoInput.value
 let todoTrimValue = todoInput.value.trim()
 todoArry.push(todoTrimValue)
//  todoArry = [...new Set(todoArry)]
 createTodoElement(todoTrimValue)
 setTodoToLocal(todoArry)
//  setTodoToLocal(getTodoFromLocal)
 console.log(todoArry);




})


function createTodoElement(todovalue){
  const div = document.createElement("div")
  div.className = " showDiv"
  div.innerHTML = `<li class=" text-lg font-medium hover:text-sky-700 transition" ><i class=" mr-2 text-green-600 items-center fa-solid fa-circle-check"></i> ${todovalue}</li> <button class="btn2" ><i class=" text-red-700  fa-regular fa-trash-can"></i></button>`
  showTodo.appendChild(div)

  if(showTodo !== " " ){
    showTodo.classList.add("showbg")
  }
}


document.addEventListener("DOMContentLoaded", function(){
  setTodoToLocal(getTodoFromLocal)
})

