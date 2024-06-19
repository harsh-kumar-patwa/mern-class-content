import ProductCart from "./ProductCart";
import { useState ,useEffect} from "react";
function useHeight(){
    return window.innerHeight;
} 
function useWidth(){
    return window.innerWidth;
}
function Products(){
    // const products = [
    //     {
    //     id: 1,
    //     title: "Apple iPhone 14",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 2,
    //     title: "Apple iPhone 13",
    //     price: "Rs. 70,000"
    //     },
    //     {
    //     id: 3,
    //     title: "Google Pixel 7",
    //     price: "Rs. 50,000"
    //     },
    //     {
    //     id: 4,
    //     title: "Nokia 1100",
    //     price: "Rs. 2,000"
    //     },
    //     {
    //     id: 5,
    //     title: "Samsung Galaxy S10",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 6,
    //     title: "Sony Xperia S10",
    //     price: "Rs. 1,00,000"
    //     }
    //     ];

    // let products = [];
    let[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://run.mocky.io/v3/471edca3-8a26-407d-8a61-7f585ccaf193").then(
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
                products.map(function(item){
                    return (
                        <div>
                            <ProductCart id={item.id+". "} title={item.title} price={item.price.value}/>
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
