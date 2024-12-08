import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoComponent from './TodoComponent'

function App() {
  const[todos,setTodos]=useState([]);
  const[todoTitle,setTodoTitle] =useState("");
  
  function addTodo(){
   const updateTodoArray =[...todos,
    { title :todoTitle, id: todos.length},
  ];
  // if(todoTitle !== todos){
  //   return <img src="src/svg/Detective-check-footprint 1.png" alt="" />
  // }
    
    setTodos(updateTodoArray);
}
  
  function deletetodo(id){
   //from todos array this will delete todo with given id
   // newarray
   //settodos(newarray)
   let updatedTodos =[];
   for(let i=0; i< todos.length; i++){
     if(todos[i].id !== id){
       updatedTodos.push(todos[i]);
     }
   }
 setTodos(updatedTodos);
  
  
}

return(
  <>
    <div className='todos-list'> 
  <h1 className='todo-heading'> My To-Do Application <img src="public/svg/list.png"  alt="" /></h1>
 
  
  <div className='todo-input'>
    <input 
      onChange={(event) => setTodoTitle(event.target.value)}
          type="text"
          id="todo-input"
          placeholder='   Add a Task...'
        />
    <button onClick={() => addTodo()}>ADD</button>
  </div>
  
  <div className='todos-container'>
    
    {todos.map((todo) => {
      return (
         <TodoComponent
              key={todo.id}
              todoTitle={todo.title}
              todoId={todo.id}
              deleteTodo={deletetodo}
            />
    );
    })}
      </div>
     </div>
  </>
);
}
export default App
