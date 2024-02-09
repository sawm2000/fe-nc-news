import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { patchArticles, getSingleArticle } from "../api";
import Loading from "./Loading";

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
    setError(error.response.data.message);
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
    return <Loading loading={"article"}/>;
  }

  if (error && error !== "Couldn't update votes") {
    return <p>{error}</p>;
  }

      return (
        <li className="article-item">
          <p id="article-title">{article.title}</p>
          <p className="article-author">Written by: {article.author}</p>
          <p className="topic">{article.topic}</p>
          <img
            id="article-img"
            src={article.article_img_url}
            alt="article image"
          />
      
          <section id="votes">
          <button disabled={voted} id="up-button" onClick={() => handleVote(1)}><img height="35px" width="auto" src="https://cdn3.emoji.gg/emojis/7207-thumbs-up.png" alt="Up vote" /></button>
          <p id="vote-num">{article.votes}</p>
          <button id="down-button" disabled={voted} onClick={() => handleVote(-1)}><img height="35px" width="auto"   style={{ transform: 'rotate(180deg) scaleX(-1)' }}     src="https://cdn3.emoji.gg/emojis/7207-thumbs-up.png" alt="Down vote" /></button>
          <br/>
          <br/>
          {error === "Couldn't update votes" ? <p>{error}</p> : null}
          </section>
          <CommentCard article_id={article_id} article={article} setArticle={setArticle}/>
        </li>
      );
    }
 

export default SingleArticle;
