import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { connect } from 'react-redux';

const App = (props) => {
  const {todos} = props;
  return (
    <div style={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)',  height: '100vh'}}>
        <TodoForm />
        <TodoList todos={todos}/>
    </div>
  )
}

const mapToStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapToStateToProps)(App);
