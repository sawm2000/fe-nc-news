import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://nc-news-c0co.onrender.com",
  });

  export const getArticles = (sortBy, order, page, limit, topic) => {
let endPointString = "api/articles"
const queries = [];

console.log(order, "order")
console.log(page, "page")
console.log(sortBy, "sortby")
console.log(limit, "limit")
console.log(topic, "topic")

    if (sortBy) {
        queries.push(`sort_by=${sortBy}`);
      }

      if (limit) {
        queries.push(`limit=${limit}`);
      }

      if (order) {
        queries.push(`order=${order}`);
      }

      if (page) {
        queries.push(`page=${page}`);
      }

      if (topic) {
        queries.push(`topic=${topic}`);
      }

      if (queries.length > 0) {
        endPointString += `?${queries.join('&')}`;
      }
     
console.log(endPointString)

    return baseApi.get(endPointString).then((response) => {
      return response.data;
    });
  };


  export const getSingleArticle = (article_id) =>{
    return baseApi.get(`api/articles/${article_id}`).then((response) => {
        return response.data;
      });
  }

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

  export const postComment = (article_id, comment) => {
    return baseApi.post(`/api/articles/${article_id}/comments`, comment).then((response) => {
      return response.data;
    })
}

export const deleteComment = (comment_id) => {
    return baseApi.delete(`/api/comments/${comment_id}`).then(() => {
    
    })
}

export const getTopics = () => {
    return baseApi.get(`/api/topics`).then((response) => {
      return response.data;
    });
  };
