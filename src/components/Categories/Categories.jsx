import { useEffect,useState } from "react";

function Categories(){
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch("").then
        ((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            setCategories(data);
        })
    },[])
    return (
        <div>
            {categories.map((item)=>{
                return (
                    <div >
                        <div>
                            {item.id}
                        </div>
                        <div>
                             {item.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Categories;