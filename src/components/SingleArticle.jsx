import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { patchArticles, getSingleArticle } from "../api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({})
  const [articleVote, setArticleVote] = useState(0)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [voted, setVoted] = useState(false)


useEffect(()=>{
  getSingleArticle(article_id).then((response)=>{
    setArticle(response.article)
    setLoading(false);
  })
  .catch((error)=>{
    setError("Error when getting articles");
        setLoading(false);
  })

},[article_id])

useEffect(()=>{
    if (articleVote && !voted) {
      const patchObject = {
        inc_votes: articleVote
      };
      patchArticles(article_id, patchObject)
        .then((response) => {
          setArticle(current => ({
            ...current,
            votes: response.article.votes
          }));
           setArticleVote(0);
           setVoted(true)
        })
      .catch((error)=>{
        setError("Couldn't update votes")
        setArticle((currentArticle)=>({
          ...currentArticle,
            votes: currentArticle.votes - articleVote
        }))
        setArticleVote(0)
      })
      
      }
  },[articleVote, article_id, article])

  function handleVote(vote){
    if(!voted){
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + articleVote
    }));
    setArticleVote(vote)
  }}

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
      return (
        <li className="article-item">
          <p>{article.title}</p>
          <p>Topic: {article.topic}</p>
          <img
            id="article-img"
            src={article.article_img_url}
            alt="article image"
          />
          <p>Written by: {article.author}</p>
          <button disabled={voted} id="up-button" onClick={() => handleVote(1)}><img height="50px" width="auto" src="https://cdn3.emoji.gg/emojis/7207-thumbs-up.png" alt="Up vote" /></button>
          <p>Votes: {article.votes}</p>
          <button disabled={voted} onClick={() => handleVote(-1)}><img height="50px" width="auto"   style={{ transform: 'rotate(180deg) scaleX(-1)' }}     src="https://cdn3.emoji.gg/emojis/7207-thumbs-up.png" alt="Down vote" /></button>
          <br/>
          <br/>
          <CommentCard article_id={article_id} article={article} setArticle={setArticle}/>
        </li>
      );
    }
 

export default SingleArticle;
