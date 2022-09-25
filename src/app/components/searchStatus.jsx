import React from "react";


export const SearchStatus = (props) => {
    
    const usersLength = props.value.length
const formatCount = () => {
    if(usersLength > 4 && usersLength < 15){
        return `${usersLength} человек тусанут с тобой сегодня`
    }
    if(usersLength === 4||
        usersLength === 3||
        usersLength === 2 
        ){
            return `${usersLength} человека тусанет с тобой сегодня`
        }
        if(usersLength === 1){
            return `${usersLength} человек тусанет с тобой сегодня`
        }
        if(usersLength === 0){
            return `Никто с тобой не тусанет`
        }
    }



    return(
        <h1 className={usersLength > 0 ? `badge bg-primary` : `badge bg-danger`}>{formatCount()}</h1>
    )
}
   
   
   


