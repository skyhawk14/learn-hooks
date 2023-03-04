import { useState } from "react"
import Child from "./Child"
// react component re render when state changes
const Parent = () => {
    const [count, setcount] = useState(0)
    console.log('Parent component render')
    return (
        <div>
            Count - {count}
            
            <Child count={ count}
                setcount={setcount} />
        </div>
    )
}
export default Parent