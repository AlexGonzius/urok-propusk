import { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        document.title=`clicked ${ counter } times`
    }, [counter])
    return ( 
        <div>
           <h1>
            useEffect Hook
           </h1>
           <h2>
            counter: {counter}
           </h2>
           <button onClick={()=> setCounter(counter+1)}>
            +1
           </button>
        </div>
    )
}
export default UseEffect;