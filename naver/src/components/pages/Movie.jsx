import React, { useEffect, useState } from "react";
import { getMovies } from "../../apis";
import MovieList from "../templates/Movie/List";
import SearchForm from "../templates/Movie/SearchForm";

const Movie = () => {
  const [params, setParams] = useState({
    query: "",
    country: "ALL",
  });
  // const [country, setCountry] = useState("ALL");
  // const [query, setQuery] = useState("");
  const { query, country } = params;

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    if (!query) return;
    // const params = {
    //   query: text,
    //   country: country,
    // };
    // if (country === "ALL") {
    //   delete params.country;
    // }
    const params = {
      query: query,
    };
    if (country !== "ALL") {
      params.country = country;
    }
    console.log(params);
    const { items } = await getMovies(params);
    console.log(items);
    setMovieList(items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화</h1>
      <SearchForm
        // onChangeCountry={(val) => setCountry(val)}
        // onChangeQuery={(val) => setQuery(val)}
        onChange={handleChange}
      />
      <MovieList data={movieList} />
    </>
  );
};

export default Movie;
