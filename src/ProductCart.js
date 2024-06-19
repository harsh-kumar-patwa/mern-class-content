import './ProductCard.css';
import {useRef,useState} from 'react';
import Effect from './effect/Effect';

function ProductCart({id,price,title}){
    let x = false;
    let pRef = useRef(0);
    let inputRef = useRef(0);
    let pTextRef = useRef(0);
    let [inputVariable,setInputVariable] = useState('Class');
    // console.log({price,title});
    function printTitle(){
        console.log(title);
        console.log(pRef.current.innerText);
    }
    function hideAndShow(){
        // if(pRef.current.style.display == "none"){
        //     pRef.current.style.display = "block";
        // }else{
        //     pRef.current.style.display = "none";
        // }
        if(x){
            pRef.current.style.display = "none";
            x=false;
        }
        else{
            pRef.current.style.display = "block";
            x=true;
        }   

    }
    function updateText(){
        // pTextRef.current.innerText = `Over here the input would be shown : ${inputRef.current.value}`;
        setInputVariable(inputRef.current.value);
    }
    return (
        <div className="product-card">
            <p>{id}</p>
            <p onClick={hideAndShow}>{title}</p>
            <p ref={pRef} style={{display:'none'}}>{price}</p>
            {/* <input type='text' ref={inputRef} onChange={updateText} value={inputVariable}></input> */}
            {/* <p ref={pTextRef}>Over here the input would be shown : {inputVariable}</p> */}
            {/* <Effect/> */}
        </div>
        
    )
}
export default ProductCart;