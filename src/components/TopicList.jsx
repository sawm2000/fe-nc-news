import { getTopics } from "../api"
import { useState, useEffect } from "react";
import TopicPage from "./TopicPage";


function TopicList(){
    const [topics, setTopics] = useState([])


    useEffect(() => {
        getTopics().then((response) => {
          setTopics(response.topics);
        });
      },[]);

    return(
        <ul key="topicList" className="topic-list">
        {topics.map((topic) => {
          return (
            <li id="topic-item">
                <TopicPage key={topic.slug} topic={topic}/>
            </li>
            
          );
        })}
      </ul>
    )
}

export default TopicList



