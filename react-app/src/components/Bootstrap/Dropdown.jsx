import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const buttonEl = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      // 클릭한게 버튼이 아닐때만 false로 만들기
      if (e.target !== buttonEl.current) {
        setIsShow(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  //display: none으로 구현
  return (
    <Container>
      <Button ref={buttonEl} onClick={() => setIsShow(!isShow)}>
        dropdown
      </Button>
      <Menu isActive={isShow}>
        <Item>item #1</Item>
        <Item>item #2</Item>
        <Item>item #3</Item>
        <Item>item #4</Item>
      </Menu>
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
  display: ${({ isActive }) => !isActive && "none"};
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
