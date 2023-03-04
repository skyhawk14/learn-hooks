import { memo,useEffect, useState } from "react"
// react component re render when state changes
const Child = ({count,setcount}) => {
    console.log('CHild component render')
    const [first, setfirst] = useState(0)
    useEffect(() => {
    //    setfirst(_=>2)
      console.log('use effect gets called', first)
    })
    
    return (
        <div>
            {first}
            <button onClick={() => {
                setcount((p)=>p+1)
            }} >Increase count</button>
            {/* Count value is {count} */}
        </div>
    )
}
export default Child