import React, { useEffect, useState } from 'react'
import UsersCard from './UsersCard'
import axios from 'axios';
   



const UsersList = () => {
const [users,setUsers] = useState<any>([]);


const getData =()=>{
   axios.get("http://localhost:8080/users")
   .then(res=>{
    setUsers(res.data)
   })
   .catch(err=>{
    console.log(err.message)
   })
}

    useEffect(()=>{
      getData()
    },[])

    console.log("users", users)

  return (
    <div>
        {
            users?.map((item:any)=>(
                <UsersCard key={item.id} id={item.id} avatar={item.avatar} first={item.first_name} last={item.last_name} age={item.age} gender={item.gender} billNo={item.billNo}  />
            ))
        }
    </div>
  )
}

export default UsersList;