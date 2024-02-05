import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://nc-news-c0co.onrender.com",
  });

  export const getArticles = () => {
    return baseApi.get("api/articles").then((response) => {
      return response.data;
    });
  };