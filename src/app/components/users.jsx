import React,{useState} from "react";
import api from '../api'
import {User} from './user'
import { SearchStatus } from "./searchStatus";



export const Users = (props) => {  
  
  const {users, metodDelete, metodHandleMark} = props
 
return(
  props.users.length > 0 &&(
<>

<SearchStatus value={users} />
<table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качество</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился,раз</th>
      <th scope="col">Оценка</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {users.map((item)=>{
      return(
        <User key={item._id}  {...item}
        onDelete={metodDelete}
        onMark = {metodHandleMark}
        />
      )
    })}
  </tbody>
</table>

</>
  )
)
}

