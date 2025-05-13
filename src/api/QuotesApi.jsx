import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getQuotes = async (pageNo) => {
  const limit = 10;
  const skip = (pageNo - 1) * limit;
  const res = await api.get(`/quotes?limit=${limit}&skip=${skip}`);
  return { quotes: res.data.quotes, next: skip + limit < res.data.total };
};
