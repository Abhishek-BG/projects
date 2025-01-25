import { useState } from "react";

function ItemManager(){
    const [items,setItems] = useState([])
    const [input,setInput]= useState("");
    const [editIndex,setIndex]=useState(null);
    const hanldeAddOrUpdate=()=>{
        if(input.trim()==="") return;
        if(editIndex!==null){
            const updateItems = items.map((item,index)=>index===editIndex?input:item);
            setItems(updateItems);
            setIndex(null);
        }else{ //when we are adding a value
            setItems([...items,input]);
        }
        setInput("");
    }
    const handleEdit = (index) =>{
        setInput(items[index]);
        setIndex(index);
    }
    const handleDelete =(index)=>{
        const deleteItems = items.filter((item,i)=>i!==index);
        setItems(deleteItems);
    }
    return(
        <div>
            <h2>Dynamic Item Manager</h2>
            <hr></hr>
            <div>
                <input
                type="text"
                value={input}
                placeholder="Enter the item name"
                onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={hanldeAddOrUpdate} >Add Value</button>
            </div>
            <ul>
                {items.length >0 ?(
                    items.map((item,index)=>( <li><b>{index}:</b><span>{item} :</span>
                    <button onClick={()=>handleEdit(index)}>Edit</button> -
                    <button onClick={()=>handleDelete(index)}> Delete</button>
                    </li>))
                ):
                (<li>No items</li>)}
              
            </ul>
        </div>
    )
}
export default ItemManager;