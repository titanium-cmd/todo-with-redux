import React from 'react'

const TodoTask = ({number, task}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
            <span>{number}</span>
            <span>{task}</span>
        </div>
        <span style={{fontSize: '1rem'}}>x</span>
    </div>
  )
}

export default TodoTask
