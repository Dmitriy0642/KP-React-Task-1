import React,{useState} from "react";
import api from '../api'
const Users = () => {
 const [getUser,setUsers] = useState(api.users.fetchAll())
console.log(getUser)
 
const deleteItemArray = (id) => {
setUsers((prevState=>prevState.filter(user=>user._id!==id)))
}

const usersCount = (text,value,className) => {
  return(
  <>
  <h1 className={className}>{text} {value}</h1>
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
    {getUser.map((user)=>{
      return(
       <tr key={user._id}>
        <th>{user.name}</th>
        <th>{user.qualities.map((qualites)=>
        <span className={`badge bg-${qualites.color} m-2`} key={qualites._id}>{qualites.name}</span>
        )}</th>
        <th key={user.profession._id}>{user.profession.name}</th>
        <th key={user.completedMeetings._id}>{user.completedMeetings}</th>
        <th key={user.rate._id}>{user.rate}</th>
        <th><button className={`btn btn-danger`} onClick={()=>deleteItemArray(user._id)}>delete</button></th>
       </tr>
      )
    })}
  </tbody>
</table>
</>
  )
}
if (
  getUser.length === 4 ||
  getUser.length === 3 ||
  getUser.length === 2 ||
  getUser.length === 1
) {
  return usersCount(
    getUser.length,
    'Человека тусанет с тобой сегодня',
    'badge bg-primary'
  );
}
if (getUser.length === 0) {
  return <h1 className="badge bg-danger">С тобой никто не тусанет</h1>;
}
return usersCount(
  getUser.length,
  'Человек тусанут с тобой сегодня',
  'badge bg-primary'
);

  


}

export default Users