import { Link } from "react-router-dom";

function ArticleCard({ article, articles }) {
  return (
      <li className="article-item">
        <Link id="all-titles" to={`/articles/${article.article_id}`}>
          {article.title}
        </Link>
        <p className="article-author">Written by: {article.author}</p>
        <Link id="all-articles-topic" to={`/articles?topic=${article.topic}`}>
          {article.topic}
        </Link>
        <br></br>
        <img
          id="article-img"
          src={article.article_img_url}
          alt="article image"
        ></img>
        <br></br>
      </li>
  );


   
   
}

export default ArticleCard;
