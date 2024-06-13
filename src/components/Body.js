import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


// useState()
const Body = () => {
    // let resList2= resList;
    const [resList2,setResList2] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredResList2 = resList.filter((res)=>{return res.data.avgRating > 4});
                    setResList2(filteredResList2);
                    console.log(resList2.map((res)=>res.data.name).join(", "));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    resList2.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    )
}

export default Body;