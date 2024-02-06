import { Link } from "react-router-dom";

function TopicPage ({topic}){

return(
    <>
    <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
    <br></br>
    </>
)

}

export default TopicPage