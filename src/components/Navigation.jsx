import { Link } from "react-router-dom";

function Navigation (){

    return( 
   <nav >
    <ul className="navigation">
        <li className="nav-item">Home</li>
        <li className="nav-item"> Topics</li>
        <Link to="/articles" className="nav-item">Articles</Link>
        <li className="nav-item">Comments</li>
    </ul>
   </nav>
    )

  };
  
  export default Navigation;