import React from 'react';

const TodosList = (props) => {
    return (
        <div className='todoList'>
          {props.todo.text}  
        </div>
    );
};

export default TodosList;