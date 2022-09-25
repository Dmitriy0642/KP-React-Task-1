import React from "react";


export const Qualites = (props) => {




return(
<th>{props.qualities.map((item)=>{
    return(
        <span key={item._id} className={`badge bg-${item.color} m-2`}>{item.name}</span>
    )
})}</th>
)
} 