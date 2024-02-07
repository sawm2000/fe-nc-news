import { useEffect, useState } from "react";
import { getComments, deleteComment } from "../api";
import Carousel from "react-bootstrap/Carousel";
import AddComment from "./AddComment";
import { useContext } from "react"
import UserContext from "../contexts/UserContext"

function CommentCard({ article_id , commentCount}) {
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState(1);
  const [error, setError] = useState("");
  const [isDeleted, setIsDeleted] = useState(false)
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

 function handleDelete(comment_id){
      deleteComment(comment_id).then(()=>{
          setIsDeleted(true)
      })
      .catch(()=>{
        setError("Couldn't delete comment")
      })
 }

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <h3>Comments {commentCount}</h3>
    <AddComment article_id={article_id}/>
      <Carousel
        id="carousel"
        activeIndex={index}
        onSelect={handleSelect}
        variant="dark"
      >
        {comments.map((comment) => {
          return (
            <Carousel.Item interval={2500} className="comment-list" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>By: {comment.author}</p>
              <p>Votes: {comment.votes}</p>
              {comment.author === loggedInUser.username ? (
              <button disabled={isDeleted} onClick={() => handleDelete(comment.comment_id)}>Delete</button>
              ): null }
          <p>{isDeleted ? "Comment has been deleted" : null}</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CommentCard;
