import React, { useState } from "react";
import styled from "styled-components";
import { getBooks } from "../../apis";

const Book = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks(text);
  };
  return (
    <div>
      <h1>도서 검색</h1>
      <Form onSubmit={handleSubmit}>
        <InputText
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></InputText>
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <List>
        <Item></Item>
      </List>
    </div>
  );
};

const Form = styled.form`
  display: flex;
`;

const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Item = styled.li``;

export default Book;
