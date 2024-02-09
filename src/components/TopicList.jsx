import { getTopics } from "../api";
import { useState, useEffect } from "react";
import TopicPage from "./TopicPage";
import Loading from "./Loading";

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.topics);
        setIsLoading(false)
        setError("")
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, []);

  
  return (
    <>
      {isLoading ? (
        <Loading loading={"topics"} />
      ) : (
        error ? (
          <p>{error}</p>
        ) : (
          <ul key="topicList" className="topic-list">
            {topics.map((topic) => {
              return (
                <li key={topic.slug} id="topic-item">
                  <TopicPage topic={topic} />
                </li>
              );
            })}
          </ul>
        )
      )}
    </>
  );
}

export default TopicList;
