import axios from "axios";

export const service = {
  getAllBlogs: () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  },
};
