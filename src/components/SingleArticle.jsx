import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CommentCard from "./CommentCard";

function SingleArticle() {
  const { article_id } = useParams();
  const location = useLocation();
  const articles = location.state;


  for (let i = 0; i < articles.length; i++) {
    if (article_id == articles[i].article_id) {
      const article = articles[i];
      return (
        <li className="article-item">
          <p>{article.title}</p>
          <p>Topic: {article.topic}</p>
          <img
            id="article-img"
            src={article.article_img_url}
            alt="article image"
          />
          <p>{article.body}</p>
          <p>Written by: {article.author}</p>
          <p>Votes: {article.votes}</p>
          <br />
          <CommentCard article_id={article_id} commentCount={article.comment_count}/>
        </li>
      );
    }
  }
}

export default SingleArticle;
