import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SingleArticle() {
  const { article_id } = useParams();
  const location = useLocation();
  const articles = location.state;

 console.log(article_id)

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
        </li>
      );
    }
  }
}

export default SingleArticle;
