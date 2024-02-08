import { getTopics } from "../api";
import { useState, useEffect } from "react";
import TopicPage from "./TopicPage";

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.topics);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, []);

  return (
    <>
      {error ? (
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
      )}
    </>
  );
}

export default TopicList;
