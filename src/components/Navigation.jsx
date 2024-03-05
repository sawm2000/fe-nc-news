import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Navigation() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <nav className="header-nav">
        <ul className="navigation">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/topics" className="nav-item">
            Topics
          </Link>
          <Link to="/articles" className="nav-item">
            Articles
          </Link>
          <Link to="/users" className="nav-item">
            Users
          </Link>
       
            <Link to="/users">
              <img
                id="current-img"
                src={loggedInUser.avatar_url}
                alt={`avatar for user ${loggedInUser.username}`}
              />
              {/* <p id="current-username">{loggedInUser.username}</p> */}
            </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
