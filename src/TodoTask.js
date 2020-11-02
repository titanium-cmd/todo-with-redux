import React from 'react'

const TodoTask = ({id, task, handleDeleteTask}) => {
  return (
    <div style={{display: 'flex', fontSize: '1.1rem', padding: '10px',border: '1px solid grey', margin: '8px 0px', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
            <span style={{marginRight: '10px'}}>{id}</span>
            <span>{task}</span>
        </div>
        <div onClick={() => handleDeleteTask(id)} style={{fontSize: '1.3rem', cursor: 'pointer', height: '25px', width: '25px', borderRadius: '25px'}}>
            {/* <span style={{display: 'flex', alignItems: 'center', height: '80%', width: '100%', justifyContent: 'center'}}>x</span> */}
            <svg className="w-6 h-6" fill="none" stroke="rgb(25, 25, 25)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </div>
    </div>
  )
}

export default TodoTask
