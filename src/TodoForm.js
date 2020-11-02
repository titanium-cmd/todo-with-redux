import React from 'react'

const TodoForm = () => {
  return (
    <form style={{display: 'flex', height: '90%', alignItems: 'flex-end', gridColumnStart: '2'}}>
        <input type="text" style={{padding: '10px', width: '80%', marginRight: '5px', fontSize: '1rem'}} placeholder="Todo Task"/>
        <button style={{backgroundColor: 'white', color: 'gray', fontSize: '1rem', width: '20%',padding: '10px 12px', textTransform: 'uppercase', fontWeight: '550', border: '1px solid grey'}}>add</button>
    </form>
  )
}

export default TodoForm;
