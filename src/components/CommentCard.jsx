import { useEffect, useState } from "react";
import { getComments, deleteComment, getSingleArticle } from "../api";
import Carousel from "react-bootstrap/Carousel";
import AddComment from "./AddComment";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Loading from "./Loading";

function CommentCard({ article_id, article, setArticle }) {
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState(1);
  const [error, setError] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  function handleDelete(comment_id) {
    deleteComment(comment_id)
      .then(() => {
        setIsDeleted(true);

        getComments(article_id).then((response) => {
          setComments(response.comments);
          setIsDeleted(false)
          });

          getSingleArticle(article_id).then((response)=>{
            setArticle(response.article)
          })

        
      })
      .catch(() => {
        setError("Couldn't delete comment");
      });
  }

  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        setComments(response.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h3 id="comments-label">Comments {article.comment_count}</h3>
      <AddComment
        article_id={article_id}
        setComments={setComments}
        setArticle={setArticle}
      />
      <Carousel
        id="carousel"
        activeIndex={index}
        onSelect={handleSelect}
        variant="dark"
      >
        {isLoading ? (
          <Loading loading={"comments"}/>
        ) : (
          comments.map((comment) => {
            return (
              <Carousel.Item
                interval={2500}
                className="comment-list"
                key={comment.comment_id}
              >
                <p>{comment.body}</p>
                <p>By: {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                {comment.author === loggedInUser.username ? (
                  <button
                    id="delete-button"
                    disabled={isDeleted}
                    onClick={() => handleDelete(comment.comment_id)}
                  >
                    Delete
                  </button>
                ) : null}
                <p>{isDeleted ? "Comment has been deleted" : null}</p>
              </Carousel.Item>
            );
          })
        )}
      </Carousel>
    </>
  );
}

export default CommentCard;
