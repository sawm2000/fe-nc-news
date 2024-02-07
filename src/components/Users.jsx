import { useEffect, useState } from "react"
import { getUsers } from "../api"
import UserCard from "./UserCard"


function Users (){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then((response)=>{
            setUsers(response.users)
        })
    }, [])
return(
    <>
    <ul id="user-list">
        {users.map((user)=>{
            return(
                <li key={user.username}>
                    <UserCard user={user}/>
                </li>
            )
        })}
    </ul>
    
    
    </>
)
}

export default Users