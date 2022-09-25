import React, { useState } from 'react';
import  { Users }  from './app/components/users';

import api from './app/api';





export function App() {
    const [getUser,setUsers] = useState(api.users.fetchAll())

    const heandleDelete = (userId) => {
        setUsers(getUser.filter((item)=>{
            return item._id !== userId
        }))
    }

    const heandleMark = (id) => {
        setUsers(getUser. map(user=>{
            if(user._id===id){
                user.bookmark =! user.bookmark
            }
            return user
        }))
    }
    
    

    
    
    return (
    <div>
    <Users users={[...getUser]} 
        metodDelete = {heandleDelete}
        metodHandleMark = {heandleMark}
    />
    </div> )
}



