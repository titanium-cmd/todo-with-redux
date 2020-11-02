const initState = {
    todos: [
        {taskId: 1, task: 'buy some food stuffs'},
        {taskId: 2, task: 'learn redux'},
        {taskId: 3, task: 'continue with expecto platform'},
        {taskId: 4, task: 'have some sleep'},
        {taskId: 5, task: 'eat my breakfast'}
    ]
}

const appReducer = (state = initState, action) => {
    return state;
}

export default appReducer;