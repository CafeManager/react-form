import { useState } from 'react'
import NewTodoForm from './NewTodoForm'

function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = ( todo ) => {
      
      setTodos((todos) => [...todos, todo])
        console.log(todos)
    }

    return (
        <div className='container-width'>
            <h1> Welcome to my todo app! </h1>
            <NewTodoForm addTodo={addTodo}></NewTodoForm>
            <div style={{display: 'block'}}>
            <ul style={{display: 'block', width:'50%', marginLeft:'33%'}}>
            {todos.map((todo) => {
                return <li style={{textAlign:'start'}}> {todo} </li> 
            })}
            </ul>
            </div>
        </div>
    )
}

export default TodoList