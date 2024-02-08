import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { Link } from "react-router-dom";


function UserCard ({user}){

    const {loggedInUser, setLoggedInUser} = useContext(UserContext)

return (
    <>
        <h3 id="user-username">{user.username}</h3> 
        <img
        id="user-img"
        src={user.avatar_url}
        alt={`avatar for user ${user.username}`}
        />
        <br></br>
        {user.username !== loggedInUser.username ? (
            <button id="login-button"
            onClick={()=>{
                setLoggedInUser(user)
            }}> Login </button>
        ): null 
        }
    </>
)
}

export default UserCard