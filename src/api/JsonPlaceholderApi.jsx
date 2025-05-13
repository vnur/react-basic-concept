import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const GetPhotos = async ({ pageParam = 1 }) => {
  const res = await api.get(`/photos?_page=${pageParam}&_limit=8
        `);
  return res.data;
};
