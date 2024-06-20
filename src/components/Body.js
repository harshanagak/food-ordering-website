import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


// useState()
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
        console.log("useEffect Called")
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();


        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(listOfRestaurants);
    }

    //conditional rendering

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button onClick={() => {
                        const filteredResList = listOfRestaurants?.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredResList);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredResList = listOfRestaurants?.filter((res) => { return res?.info?.avgRating > 4.3 });
                        setListOfRestaurants(filteredResList);
                    }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.map((restaurant) => {
                        return <RestaurantCard key={restaurant?.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    )
}

export default Body;