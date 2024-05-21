let todoForm = document.getElementById("todoForm")
let todoInput = document.getElementById("todoInput")
let showTodo = document.getElementById("showTodo")
let btn = document.getElementById("btn")
let deletBtn = document.querySelector(".btn2")


// data set get method and set methos
const getTodoFromLocal =  new Set( JSON.parse(localStorage.getItem("todoList")) || [] );
console.log(getTodoFromLocal);
   getTodoFromLocal.forEach((todo) => {
    createTodoElement(todo)
   });

// set function
const setTodoToLocal = (todos)=>{
 localStorage.setItem("todoList",JSON.stringify(Array.from(todos)))
}


// main function
btn.addEventListener("click",function(e){
  e.preventDefault()

 let todoValu = todoInput.value
 let todoTrimValue = todoInput.value.trim()

 if(todoTrimValue !== "" && !getTodoFromLocal.has(todoTrimValue)){
   createTodoElement(todoTrimValue)
 getTodoFromLocal.add(todoTrimValue)
 setTodoToLocal(getTodoFromLocal)
 }

todoInput.value = " "

})

// element function
function createTodoElement(todovalue){
  const div = document.createElement("div")
  div.className = " showDiv"
  div.innerHTML = `<li class=" text-lg font-medium hover:text-sky-700 transition" ><i class=" mr-2 text-green-600 items-center fa-solid fa-circle-check"></i> ${todovalue}</li> <button class="btn2 icon " ><i class=" text-red-700 icon h-auto w-full  fa-regular fa-trash-can"></i></button>`

  showTodo.appendChild(div)

  if(showTodo !== " " ){
    showTodo.classList.add("showbg")
  }

}


  document.getElementById("showTodo").addEventListener("click", function(){
    
    localStorage.removeItem("todoList")
    
  })

