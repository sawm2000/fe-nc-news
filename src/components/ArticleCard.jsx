function ArticleCard ({article, key}){
return (
    <li className="article-item" key={key}>
              <p>Title: {article.title}</p>
              <p>Topic: {article.topic}</p>
              <img id="article-img" src={article.article_img_url} alt="article image"></img>
              <p>Written by: {article.author}</p>
              <p>Votes: {article.votes}</p>
             <br></br> 
            </li>
)
}

export default ArticleCard