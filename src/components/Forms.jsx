import React, { useState } from 'react';


const Forms = ( props) => {

  const [input, setInput] = useState('');
 const handleOnSubmit = (e)=> {
     e.preventDefault();
      props.addTodo(input)
     setInput('')
 }

    return (
       <form onSubmit={handleOnSubmit}>
        <input onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Enter a Todo...' className='task-input' value={input} />
        <button className='button-add' type='submit'   >
             Add
        </button>
       </form>
    );
};

export default Forms;