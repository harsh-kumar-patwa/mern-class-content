import ProductCard from "../ProductCard/ProductCard";
import { useState ,useEffect} from "react";

function Products(){
 
    let[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
            (response)=>{
                return response.json();
            }
        ).then(
            (data)=>{
                console.log(data);
                setProducts(data);
            }
        )
    },[]);
    
    return (
        <div>
            <h1>I am products</h1>
            {
                products.map(function(item,index){
                    return (
                        <div>
                            <ProductCard key={index} product={item} />
                            <br/>
                        </div>
                    )
                })
            }
            
        </div>
        
    )
}
export let a = 10;
export default Products;

// oldDom = [
// <ProductCard key={i1} title="Title 1" />,
// <ProductCard key={i2} title="Title 2" />,
// <ProductCard key={i3} title="Title 3" />
// ] 

// newDom = [
// <ProductCard key={i1} title="Title 1" />,
// <ProductCard key={i4} title="Title 4" />,
// <ProductCard key={i2} title="Title 2" />,
// <ProductCard key={i3} title="Title 3" />
// ]

// diff = [
// newDom-oldDom
// ]
//product card with key i4 and title4 has to be added

//index should not be used to identify it because if 
// we remove any element then the index of all the elements will change 
