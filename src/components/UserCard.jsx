import { useContext } from "react"
import UserContext from "../contexts/UserContext"


function UserCard ({user}){

    const {loggedInUser, setLoggedInUser} = useContext(UserContext)

return (
    <div>
        <h3 id="user-username">{user.username}</h3>
        <img
        id="user-img"
        src={user.avatar_url}
        alt={`avatar for user ${user.username}`}
        />
        {user.username !== loggedInUser.username ? (
            <button
            onClick={()=>{
                setLoggedInUser(user)
            }}> Login </button>
        ): null 
        }
    </div>
)
}

export default UserCard