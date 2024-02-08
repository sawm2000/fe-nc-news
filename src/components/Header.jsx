import { Link } from "react-router-dom";

function Header (){

    return( 
      <Link to="/" id="header-link">
      <h1 id="nc-news"> NC News</h1>
      </Link>
   
    )

  };
  
  export default Header;