import React from 'react'

const TodoForm = () => {
  return (
    <form style={{display: 'flex', alignItems: 'center'}}>
        <input type="text" style={{padding: '10px', width: '300px', marginRight: '5px', fontSize: '1rem'}} placeholder="Todo Task"/>
        <button style={{backgroundColor: 'white', fontSize: '1rem', padding: '10px 12px', textTransform: 'uppercase', fontWeight: '550', border: '1px solid grey'}}>add</button>
    </form>
  )
}

export default TodoForm
