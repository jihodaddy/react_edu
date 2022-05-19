import axios from "axios";

export const getMovies = async (params) => {
  const config = {
    url: "/v1/search/movie.json",
    headers: {
      "X-Naver-Client-Id": "R_X0mxmAD3yMgqv5LOeJ",
      "X-Naver-Client-Secret": "mdUzXXU1Ss",
    },
    method: "GET",
    params: params,
  };
  const result = await axios(config);
  return result.data;
};
