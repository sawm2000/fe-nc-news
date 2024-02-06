
import { Link } from "react-router-dom";

function ArticleCard ({article, articles}){


return(
<li className="article-item" >
              <Link to={`/articles/${article.article_id}`} state={articles} >{article.title}</Link>
              <p>Topic: {article.topic}</p>
              <img id="article-img" src={article.article_img_url} alt="article image"></img>
              <p>Written by: {article.author}</p>
             <br></br> 
            </li>
    )}


export default ArticleCard