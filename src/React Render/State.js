import { useState } from "react"
// react component re render when state changes
const StateChangeRender = () => {
    const [count, setcount] = useState(0)
    console.log('Render state change component')
    return (
        <div>
            Count - {count}
            <button onClick={() => {
                setcount((p)=>p+1)
            }} >Increase count</button>
        </div>
    )
}
export default StateChangeRender