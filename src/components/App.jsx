import AllArticles from "./AllArticles";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicList from "./TopicList";

function App() {
  return (
    <>
   <Header/>
   <Navigation />
   <Routes>
    <Route path="/articles" element={<AllArticles/>}/>
    <Route path="/topics" element={<TopicList />}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
   </Routes>
   </>
  )
}

export default App;
