import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Navigation (){

const {loggedInUser} = useContext(UserContext)

    return( 
        <>
   <nav >
    <ul className="navigation">
        <li className="nav-item">Home</li>
        <Link to="/topics" className="nav-item"> Topics</Link>
        <Link to="/articles" className="nav-item">Articles</Link>
        <Link to="/users" className="nav-item">Users</Link>
    </ul>
    </nav>
   <div>
    <p id="current-username">{loggedInUser.username}</p>
    <img
    id="current-img"
    src={loggedInUser.avatar_url}
    alt={`avatar for user ${loggedInUser.username}`}
    />
   </div>
   </>
    )

  };
  
  export default Navigation;