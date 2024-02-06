import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from 'react-router-dom';

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get("topic")


  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles);
      
    });   
  },[]);
  return (
    <>
      <ul key="articleList" className="article-list">
        <h3 id="topic-title">{topic ? topic : null}</h3>
        {articles.map((article) => {
          if(topic == article.topic){
             return (
              <>
            <ArticleCard key={article.title} article={article} articles={articles}/>
            </>
          );
          }else if(topic === null){
            return (
              <ArticleCard key={article.title} article={article} articles={articles}/>
            );
          }
         
        })}
      </ul>
    </>
  );
}

export default AllArticles;
