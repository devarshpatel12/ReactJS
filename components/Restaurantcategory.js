import { useState } from "react";
import Itemlist from "./Itemlist";
const RestaurantCategory = ({ data }) => {
   const [showItems,setshowItems]=useState(false);
    const handleClick=()=>{
setshowItems(!showItems);
  }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">

                {data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
              {showItems && <Itemlist items={data.itemCards}  />}
            </div>
            </div>    
    );
    
};

export default RestaurantCategory;