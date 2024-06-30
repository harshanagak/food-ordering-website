import React, { useState } from "react";

const User = (props) => {
    const [count,setCount]=useState(0);
    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Count increase</button>
            <h2>
                Name: {props.name}
            </h2>
            <h3>
                Location: Rajahmundry
            </h3>
            <h4>Contact: @harsha_naga_k</h4>

        </div>
    )
}

export default User;