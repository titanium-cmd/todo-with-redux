import React from 'react'

const TodoTask = ({id, task}) => {
  return (
    <div style={{display: 'flex', fontSize: '1.1rem', padding: '10px',border: '1px solid grey', margin: '8px 0px', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
            <span style={{marginRight: '10px'}}>{id}</span>
            <span>{task}</span>
        </div>
        <div style={{fontSize: '1.5rem', cursor: 'pointer', height: '25px', width: '25px', borderRadius: '25px', backgroundColor: 'red', color: 'white'}}>
            <span style={{display: 'flex', alignItems: 'center', height: '80%', width: '100%', justifyContent: 'center'}}>x</span>
        </div>
    </div>
  )
}

export default TodoTask
