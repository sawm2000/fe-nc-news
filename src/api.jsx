import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://nc-news-c0co.onrender.com",
  });

  export const getArticles = () => {
    return baseApi.get("api/articles").then((response) => {
      return response.data;
    });
  };

  export const getComments = (article_id) => {
    return baseApi.get(`/api/articles/${article_id}/comments`).then((response) => {
      return response.data;
    });
  };