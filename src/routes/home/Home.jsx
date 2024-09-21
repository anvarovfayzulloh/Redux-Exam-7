import React from 'react'
import { useGetUsersQuery } from "../../redux/api/userApi"

const Home = () => {
    const {data} = useGetUsersQuery();
    const users = data?.data
    console.log(users)
  return (
    <div>
        {
            users ? (
                users.map(user => (
                <div key={user.id} >
                    <img src={user.avatar} alt="" />
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                    <p>{user.email}</p>
                </div>   
                ))
            ) : (
                <p>Loading...</p>
            )
        }
    </div>
  )
}

export default Home