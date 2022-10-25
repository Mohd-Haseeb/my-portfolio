import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>Counter Value - { count } </h1>
            <button onClick={() => setCount(0)}>Reset Counter</button>
            <button onClick={() => setCount(count+1)}>Increase Counter</button>
            <button onClick={() => {setCount(count===0 ? count: count-1)}}>Decrease Counter</button>
        </>
    )
}

export default Counter

