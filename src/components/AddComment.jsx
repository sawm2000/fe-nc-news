import { useState } from "react";
import { postComment } from "../api";
import Expand from "./Expand";

function AddComment({article_id}) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState();
  const [isPosted, setIsPosted] = useState(false);

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
    .then((response) => {
      setComment("");
      setUsername("");
      setIsPosted(true)    
    })
    .catch(() => {
        setError("Couldn't add comment")
        
    });
    setIsSubmitting(false);
  }
  if (error) {
    return <p>{error}</p>;
  }
  
 
  return (
    <>
    <form  onSubmit={postRequest}>
        <Expand>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={handleUsername}
        required
        disabled={isPosted}
      />
      <br></br>
      <label htmlFor="comment">Comment: </label>
      <input
        id="comment"
        type="text"
        value={comment}
        onChange={handleComment}
        required
        disabled={isPosted}
      />
      <br></br>
      <button id="submit-comment">Submit</button>
      </Expand>
    </form> 
     <p>{isPosted ? "Comment has been posted" : null}</p>
      </>
  );
}

export default AddComment;
