import React, { useEffect, useState } from "react";
import { getMovies } from "../../apis";
import MovieList from "../templates/Movie/List";
import SearchForm from "../templates/Movie/SearchForm";

const Movie = () => {
  const [country, setCountry] = useState("ALL");
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    refreshList();
  }, [country, query]);

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

    const { items } = await getMovies(params);
    console.log(items);
    setMovieList(items);
  };

  return (
    <>
      <h1>영화</h1>
      <SearchForm
        onChangeCountry={(val) => setCountry(val)}
        onChangeQuery={(val) => setQuery(val)}
      />
      <MovieList data={movieList} />
    </>
  );
};

export default Movie;
