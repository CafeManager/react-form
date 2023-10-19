import { useState } from "react"
import "./NewBoxForm.css"

function NewBoxForm({addBox}){
    const INITIAL_DATA = {
        "height": "",
        "width": "",
        "backgroundColor": "#FFFFFF"
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
        addBox(formData.width, formData.height, formData.backgroundColor)
        setFormData(INITIAL_DATA) 
    }


    return(
            <>
            <form onSubmit={handleSubmit} className="form-grid-format"> 
            <label className="align-text" htmlFor="backgroundColor"> Background Color: </label>
            <div>
            <input className="input-spacing input-reformat" id="backgroundColor" type="color" onChange={handleChange} name="backgroundColor" value={formData.backgroundColor}/>
            </div>
            
            <label className="align-text" htmlFor="width"> Width: </label>
            <input className="input-spacing" id="width" onChange={handleChange}  name="width" value={formData.width}/>
            
            <label className="align-text" htmlFor="height"> Height:</label>
            <input className="input-spacing" id="height" onChange={handleChange}  name="height" value={formData.height}/>
            
                <button className="button-center">Add!</button>
            
            </form>
            
            </>
            
        
    )
}

export default NewBoxForm