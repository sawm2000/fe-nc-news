import { Link } from "react-router-dom";

function TopicPage ({topic}){

return(
    <>
    <Link id="topic-name"to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
    <br></br>
    </>
)

}

export default TopicPage