import React, { useState } from "react";
import styled from "styled-components";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    // 이미 열려있는것 클릭하면 모두 닫기
    // if (index === activeIndex) {
    //   setActiveIndex(-1);
    // } else {
    //   setActiveIndex(index);
    // }
    const nextIndex = index === activeIndex ? -1 : index;
    setActiveIndex(nextIndex);
  };
  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id}>
          <Header onClick={() => handleClick(index)}>{title}</Header>
          <Body isActive={index === activeIndex}>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  border: 1px solid #ddd;
  margin: 100px;
  border-radius: 4px;
`;
const Item = styled.div`
  //둘이 겹칠때 후위에 것만 실행
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Header = styled.div`
  padding: 10px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  display: ${({ isActive }) => !isActive && "none"};
`;

export default Accordion;
