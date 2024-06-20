import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer'; 
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
     
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      setListOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };
  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter(
      res => res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredRestaurant(listOfRestaurants);
  };

  return  listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) :(
    <div className="container mx-auto px-4 py-8">
      {!onlineStatus && <h1 className="text-center text-red-600 mb-8">Looks like you are offline!</h1>}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-full mr-4 focus:outline-none focus:border-blue-500"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="flex">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 hover:bg-blue-600 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 hover:bg-blue-600 focus:outline-none"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Conditionally render Shimmer or RestaurantCards based on data availability */}
        {filteredRestaurant.length === 0 ? <Shimmer /> :
          filteredRestaurant.map((restaurant, index) => (
            <Link key={index} to={`/restaurants/${restaurant.info?.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;

