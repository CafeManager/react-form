import { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'

function BoxList(){
    const [boxes, setBoxes] = useState([])

    const addBox = (width, height, backgroundColor) => {
      
      setBoxes((boxData) => [...boxData, {width, height, backgroundColor}])
           
    }

    return (
        <div className='container-width' data-testid='box-list'>
            <h1> Welcome to box adder! </h1>
            <NewBoxForm addBox={addBox}></NewBoxForm>
            {boxes.map(({width, height, backgroundColor}) => {
                return <Box width={width} height={height} backgroundColor={backgroundColor} />
            })}
        </div>
    )
}

export default BoxList