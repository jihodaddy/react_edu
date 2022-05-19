import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "R_X0mxmAD3yMgqv5LOeJ",
    "X-Naver-Client-Secret": "mdUzXXU1Ss",
  },
});

export const getMovies = async (params) => {
  const config = {
    url: "/v1/search/movie.json",

    method: "GET",
    params: params,
  };
  const result = await instance(config);
  return result.data;
};

export const getBooks = async (text) => {
  const config = {
    url: "/v1/search/book.json",

    method: "GET",
    query: text,
  };
  const result = await instance(config);
  return result.data;
};
