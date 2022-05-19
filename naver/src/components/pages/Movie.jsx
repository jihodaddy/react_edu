import React, { useState } from "react";
import styled from "styled-components";
import { getMovies } from "../../apis";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const refreshList = async () => {
    const { items } = await getMovies(text);
    console.log(items);
    setMovieList(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshList();
  };

  return (
    <>
      <h1>영화</h1>
      {/* 엔터나 검색 누를때 실행되도록 Form에 onSubmit */}
      <Form onSubmit={handleSubmit}>
        <InputText value={text} onChange={(e) => setText(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <List>
        {movieList.map(({ link, image, title }) => (
          <Item key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              <Thumbnail src={image} />
              <Title dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </Item>
        ))}
      </List>
    </>
  );
};

const Form = styled.form`
  display: flex;
  padding: 20px;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button`
  margin-left: 10px;
`;

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.li``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default Movie;
