import { useEffect, useState } from "react";
import { getComments } from "../api";
import Carousel from "react-bootstrap/Carousel";
import AddComment from "./AddComment";

function CommentCard({ article_id , commentCount}) {
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, []);
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
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CommentCard;
