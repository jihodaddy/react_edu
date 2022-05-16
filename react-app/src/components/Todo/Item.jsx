import React from "react";
import styled, { css } from "styled-components";

const Item = ({ data, onDelete, onChecked }) => {
  const { id, text, isDone } = data;

  const handleClick = () => {
    onDelete(id);
  };
  const handleChange = () => {
    // 방법
    // 1. data의 현재 isDone값을 반대로
    // 2. input의 value(체크여부)를 isDone으로 넣어주는
    onChecked(id);
  };

  return (
    <Container key={id}>
      <label>
        <input type="checkbox" checked={isDone} onChange={handleChange} />
        <Content isDone={isDone}>{text}</Content>
      </label>
      <BtnDelete onClick={handleClick}>삭제</BtnDelete>
    </Container>
  );
};

export default Item;

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #d4d0d0;
  }
`;
const Content = styled.span`
  color: ${(props) => props.isDone && "#c2bfbf"};
  text-decoration: ${({ isDone }) => isDone && "line-through"};
  ${({ isDone }) =>
    isDone &&
    css`
      color: #c2bfbfd;
      text-decoration: line-through;
    `}
`;
const BtnDelete = styled.button``;
