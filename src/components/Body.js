import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// useState()
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) return (<h1>LOoks like your are Offline!! Please Check your are internet connection</h1>)

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div >
                    <input type="text" className="ml-5 border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredResList = listOfRestaurants?.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredResList);
                    }}
                    >Search</button>
                </div>
                <div className="search mx-4 px-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredResList = listOfRestaurants?.filter((res) => { return res?.info?.avgRating > 4.3 });
                            setListOfRestaurants(filteredResList);
                        }}>Top Rated Restaurant</button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants?.map((restaurant) => {
                        return <Link style={{
                            textDecoration: 'none', color: "black"
                        }}
                            key={restaurant?.info.id}
                            to={"/restaurant/" + restaurant?.info.id}
                        >
                            {restaurant.info.promoted ? (
                                <RestaurantCardPromoted resData={restaurant} />
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}

                        </Link>;
                    })
                }
            </div>
        </div>
    )
}

export default Body;