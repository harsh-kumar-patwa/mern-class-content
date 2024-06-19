import {useState} from 'react';

function Effect(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <button onClick={()=>{
                setCount1(count1+1);
            }}>Add      
            </button>
                <p>
                    {count1}
                </p>

            <button onClick={()=>{
                setCount2(count2+1);
            }}>Add   
            </button>
                <p>
                    {count2}
                </p>
        </div>
    )
}
export default Effect;