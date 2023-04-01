import React from 'react';
import {RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

const TodosList = (props) => {
    const {todo, removeTodo,completedTodo} = props
    return (
        <>
           <div className={todo.completed ? " complete" : "row"}>
               <div className='todoList'>
                  {todo.text} 
               </div>
           </div>

       
          <div className='inconsContainer'>
          <RiCloseCircleLine className='icon' onClick={()=> removeTodo(todo.id)}/> 
          <BiCheckCircle className='icon' onClick={()=>completedTodo(todo.id)}/>
          </div>
         
        </>
    );
};

export default TodosList;