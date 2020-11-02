import React from 'react'
import TodoTask from './TodoTask'

const TodoList = ({todos}) => {
  return (
      <div style={{gridColumnStart:'2', gridRowStart: '2'}}>
          {todos.map((todo)=>{
              return <TodoTask key={todo.taskId} id={todo.taskId} task={todo.task} />
          })}
      </div>
  )
}

export default TodoList
