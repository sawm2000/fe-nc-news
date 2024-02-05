import AllArticles from "./AllArticles";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   <Header/>
   <Navigation />
   <Routes>
    <Route path="/articles" element={<AllArticles/>}/>
   </Routes>
   </>
  )
}

export default App;
