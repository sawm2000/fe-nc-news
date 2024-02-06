import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://nc-news-c0co.onrender.com",
  });

  export const getArticles = (article_id) => {
let endPointString = "api/articles"
    if(article_id !== undefined){
            endPointString += `/${article_id}`
    }
    return baseApi.get(endPointString).then((response) => {
      return response.data;
    });
  };

  export const getComments = (article_id) => {
    return baseApi.get(`/api/articles/${article_id}/comments`).then((response) => {
      return response.data;
    });
  };

  export const patchArticles = (article_id, patchObject) => {
    return baseApi.patch(`/api/articles/${article_id}`, patchObject).then((response) => {
      return response.data;
    });
  };