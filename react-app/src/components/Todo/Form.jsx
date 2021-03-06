import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputText
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <BtnSubmit>+</BtnSubmit>
    </Container>
  );
};

export default Form;

const Container = styled.form`
  display: flex;
  background: #495057;
`;

const InputText = styled.input`
  flex: 1;
  /* 추가 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
`;

const BtnSubmit = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
