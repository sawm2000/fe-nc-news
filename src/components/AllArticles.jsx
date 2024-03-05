import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import Loading from "./Loading";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;

  useEffect(() => {
    getArticles(sortBy, order, page, limit, topic)
      .then((response) => {
        setArticles(response.articles);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, [sortBy, order, page, topic, limit]);

  function handleSort(event) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", event.target.value);
    setSearchParams(newParams);
  }

  function handleOrder() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order === "asc" ? "desc" : "asc");
    setSearchParams(newParams);
  }

  function handleNext() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", Number(page) + 1);
    setSearchParams(newParams);
  }

  function handlePrev() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", Number(page) - 1);
    setSearchParams(newParams);
  }

  function handleLimit(event) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("limit", event.target.value);
    setSearchParams(newParams);
  }

  if (topic) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <label id="sort-by-label" htmlFor="sort_by">
        Sort By:
      </label>
      <select id="sort_by" value={sortBy} onChange={handleSort}>
        <option value="title">Title</option>
        <option value="created_at">Date created</option>
        <option value="article_id">Article Id</option>
        <option value="author">Author</option>
        <option value="votes">no of votes</option>
        <option value="comment_count">no of comments</option>
      </select>
      <button id="order-button" onClick={handleOrder}>
        {order === "asc" ? "Asc" : "Desc"}
      </button>

      {isLoading ? (
        <Loading loading={"articles"} />
      ) : (
        <>
         
            <ul key="articleList" className="article-list">
              <h3 id="topic-title">{topic ? topic : null}</h3>
              {articles.map((article) => {
                return (
                  <ArticleCard
                    key={article.title}
                    article={article}
                    articles={articles}
                  />
                );
              })}
            </ul>
          
          <button id="prev-button" disabled={page == 1} onClick={handlePrev}>
            previous
          </button>
          <button id="next-button" onClick={handleNext}>
            next
          </button>
          <p id="page-num">{page}</p>
          <label id="limit-label" htmlFor="limit">
            Page limit:{" "}
          </label>
          <select id="limit" value={limit} onChange={handleLimit}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </>
      )}
    </>
  );
}

export default AllArticles;
