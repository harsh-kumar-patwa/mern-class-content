import './ProductCard.css';
import {useRef,useState} from 'react';
// import Effect from './effect/Effect';
import AddToCart from '../AddToCart/AddToCart';
import React from 'react';

function ProductCard({product}){
    let x = false;
    let pRef = useRef(0);
    let inputRef = useRef(0);
    let pTextRef = useRef(0);
    let [inputVariable,setInputVariable] = useState('Class');

    console.log("ProductCard", product.id);
    // console.log({price,title});
    function printTitle(){
        console.log(product.title);
        console.log(pRef.current.innerText);
    }
    function hideAndShow(){
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
            <p>{product.id}</p>
            <p onClick={hideAndShow}>{product.title}</p>
            <p ref={pRef} style={{display:'none'}}>{product.price.value}</p>
            {/* <input type='text' ref={inputRef} onChange={updateText} value={inputVariable}></input> */}
            {/* <p ref={pTextRef}>Over here the input would be shown : {inputVariable}</p> */}
            {/* <Effect/> */}
            <AddToCart product={product} />
        </div>
        
    )
}
export default React.memo(ProductCard);