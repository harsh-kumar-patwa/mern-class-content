

function AddToCart({ product}){
    console.log("AddToCart", product.id)
    /// useSelector
    function increase(){
        //dispach ({type:,payload:})
    
    }
    function decrease(){
        //dispach ({type:,payload:})
    }

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
                
            </div>
     )  
    }
    else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }
}
export default AddToCart;
