import AllArticles from "./AllArticles";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicList from "./TopicList";
import Users from "./Users";
import { useState } from "react";
import UserContext from "../contexts/UserContext"
import Home from "./Home";
import ErrorPage from "./ErrorPage";

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
  })
  return (
    <>
   <Header/>
  <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
   <Navigation />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/articles" element={<AllArticles/>}/>
    <Route path="/topics" element={<TopicList />}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
    <Route path="/users" element={<Users />}/>
    <Route path="*" element={<ErrorPage/>} />
   </Routes>
   </UserContext.Provider>
   </>
  )
}

export default App;
