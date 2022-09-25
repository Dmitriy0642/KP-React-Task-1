import React from "react";


export const Bookmark = (props) => {
    
    
    
return(
    <th>
    <button className={props.state !== true ? "bi bi-bookmarks" : "bi bi-bookmarks-fill " } key={props.id} onClick={()=>props.callingonMark(props.id)}></button>
    </th>
)
   
}