import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h3 id="welcome">Welcome !</h3>
      <div id="home-main">
        <p>View articles by topic</p>
        <Link to="/topics" className="home-button"> Topics</Link>

        <p>View all articles</p>
        <Link to="/articles" className="home-button">Articles</Link>

        <p>Change user</p>
        <Link to="/users" className="home-button">Users</Link>
      </div>
    </>
  );
}
export default Home;
