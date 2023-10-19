import { useState } from 'react'

function NewTodoForm({addTodo}){
    const INITIAL_DATA = {
        "todo": "",
    }

    const [formData, setFormData] = useState(
        INITIAL_DATA
    )

    const handleChange = (e) => {
        e.preventDefault()
        
        const { name, value } = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))

        
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        addTodo(formData.todo)
        setFormData(INITIAL_DATA) 
    }


    return(
            <>
            <form onSubmit={handleSubmit} className="form-grid-format">  
            <label className="align-text" htmlFor="todo"> Todo: </label>
            <input className="input-spacing" id="todo" onChange={handleChange}  name="todo" value={formData.todo}/>        
                <button className="button-center">Add!</button>           
            </form>            
            </>
            
        
    )
}

export default NewTodoForm