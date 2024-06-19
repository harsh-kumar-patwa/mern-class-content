import { useState } from "react";

export default function Counter(){
    const[counter,setCounter] = useState(5);

    console.log(counter);

    return(
        <>
            <span>{console.log(counter)}{counter}</span>
            
            <button onClick={() =>

            {   {console.log(counter)}
                setCounter(counter +5);
                {console.log(counter)}
                setCounter(counter +5);
                {console.log(counter)}
                alert(counter);
                setCounter(counter +5);
                {console.log(counter)}
                setCounter(counter +5);
                {console.log(counter)}

            }

            }>Increment</button>
        </>
    )
}