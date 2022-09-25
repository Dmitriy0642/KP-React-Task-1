import React from "react";
import { Qualites } from "./qualites";
import { Bookmark } from "./bookmark";



export const User = (props) =>{
 
   return (
      <tr>
         <th>{props.name}</th>
         <Qualites {...props} />      
         <th>{props.profession.name}</th>
         <th>{props.completedMeetings}</th>
         <th>{`${props.rate}/5`}</th>
         <Bookmark state={props.bookmark} id={props._id} callingonMark={props.onMark}/>
         <th>
            <button key={props._id} className={`badge bg-danger mt-2`} onClick={ () => props.onDelete(props._id)}>Delete</button>
            </th>
      </tr>
   )
}