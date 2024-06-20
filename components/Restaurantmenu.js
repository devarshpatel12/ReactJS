import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./restaurantcategory";
const Restaurantmenu = () => {
    const [resinfo, setresinfo] = useState(null);
    const { resId } = useParams();
    // const[ShowIndex,setShowIndex]=useState(0);
    useEffect(() => {
        fetchmenu();
    }, []);

    const fetchmenu = async () => {
        try {
            const response = await fetch(
                MENU_API + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
            );
            const data = await response.json();
            setresinfo(data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    const card = resinfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    const categories=resinfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> 
        c.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const name = resinfo?.data?.cards?.[2]?.card?.card?.info?.name || "";
    const cuisines = resinfo?.data?.cards?.[2]?.card?.card?.info?.cuisines || "";
    const costForTwoMessage = resinfo?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "";

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <h3 className="text-2xl text-gray-600 mb-2 font-bold">{cuisines}</h3>
            <h3 className="text-lg text-gray-600 mb-4">{costForTwoMessage}</h3>
            <h3 className="text-xl font-semibold mb-2">Menu</h3>
            {categories && categories.map((category,index) => (
    <RestaurantCategory key={index} data={category.card.card}
    showItems={false}
        // showItems={index == ShowIndex ? true : false}
        // setShowIndex={()=>setShowIndex(index)}
         />
))}
        </div>
    );
};

export default Restaurantmenu;
