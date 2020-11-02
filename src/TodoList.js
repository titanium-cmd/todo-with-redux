import React from 'react'
import TodoTask from './TodoTask'
import {connect} from 'react-redux';

const TodoList = (props) => {
    const {todos} = props;
    const handleDeleteTask = (id) => {
        props.deleteTask(id);
    }
    return (
      <div style={{gridColumnStart:'2', gridRowStart: '2'}}>
          {todos.map((todo, i)=>{
              return <TodoTask key={i} id={todo.taskId} task={todo.task} handleDeleteTask={handleDeleteTask} />
          })}
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskId) => {
            dispatch({type: 'DELETE_TODO', id: taskId});
        }
    }
}

export default connect(null,mapDispatchToProps)(TodoList)
