import { useEffect, useState } from "react";
import { postComment, getComments, getSingleArticle } from "../api";
import Expand from "./Expand";
import { useContext } from "react"
import UserContext from "../contexts/UserContext"

function AddComment({article_id, setComments, setArticle}) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState();
  const [isPosted, setIsPosted] = useState(false);
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)

 useEffect(()=>{
  setUsername(loggedInUser.username)
 }, [])

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function postRequest(event){
    event.preventDefault();

    const itemToPost = {
        username: username,
        body: comment,
    }
    postComment(article_id, itemToPost)
    .then(() => {
      setComment("");
      setUsername("");
      setIsPosted(true) 
      
      getComments(article_id).then((response) => {
        setComments(response.comments);
        setIsPosted(false)
      });

      getSingleArticle(article_id).then((response)=>{
        setArticle(response.article)
      })

    })
    .catch((error) => {
        setError("couldn't add comment")
        
    });
    
  }
  if (error) {
    return <p>{error}</p>;
  }
  
 
  return (
    <>
    <form  onSubmit={postRequest}>
        <Expand>
      <label id="username-label" htmlFor="username">Username: </label>
      <input
        id="username"
        type="text"
        value={loggedInUser.username}
        onChange={handleUsername}
        required
        disabled={isPosted}
      />
      <br></br>
      <label id="comment-label" htmlFor="comment">Comment: </label>
      <input
        id="comment"
        type="text"
        value={comment}
        onChange={handleComment}
        required
        disabled={isPosted}
      />
      <br></br>
      <button id="submit-comment" disabled={isPosted} >Submit</button>
      </Expand>
    </form> 
     <p>{isPosted ? "Comment has been posted" : null}</p>
      </>
  );
}

export default AddComment;
