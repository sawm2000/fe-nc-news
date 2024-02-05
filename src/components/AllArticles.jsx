import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function AllArticles() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles);
      
    });
  },[]);
  return (
    <>
      <ul key="articleList" className="article-list">
        {articles.map((article) => {
          return (
            <ArticleCard key={article.title} article={article} articles={articles}/>
          );
        })}
      </ul>
    </>
  );
}

export default AllArticles;
