import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";
const Itemlist = ({items}) => {
   const dispatch=useDispatch();
  const handleaddItem=(item)=>{
   dispatch(addItem(item));
  }
  return (
    <div>
    
        {items.map((item)=>
         (<div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2  text-left">
     
            <div className="py-2">
               <span className="text-lg  "> {item.card.info.name}-</span>
               <span className="text-lg ">₹{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
            </div>
            <div className=" flex justify-between">
            <span className="text-xs">{item.card.info.description}</span>
            <button
                  className="px-2 py-2 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                  onClick={()=>handleaddItem(item)}>
                  Add+
            </button>        
                </div>
          
         </div> 
         ))}
    
    </div>
  )
}

export default Itemlist;