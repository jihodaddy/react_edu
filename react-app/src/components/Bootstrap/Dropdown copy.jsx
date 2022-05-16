import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);

  //조건부 렌더링
  const handleClick = () => {
    const nextShow = isShow ? false : true;
    setIsShow(nextShow);
  };

  return (
    <Container>
      <Button onClick={handleClick}>dropdown</Button>
      {isShow && (
        <Menu isShow={true}>
          <Item>item #1</Item>
          <Item>item #2</Item>
          <Item>item #3</Item>
          <Item>item #4</Item>
        </Menu>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
`;

const Menu = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 120px;
  /* display: ${({ isShow }) => !isShow && "none"}; */
`;
const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background-color: #ddd;
  }
`;
