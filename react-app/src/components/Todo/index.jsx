import React, { useState, useRef } from "react";
import styled from "styled-components";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const nextId = useRef(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextList = [...list, { id: nextId.current, text }];
    setList(nextList);
    setText("");
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const nextList = list.filter((item) => item.id !== deleteId);
    setList(nextList);
  };
  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onSubmit={handleSubmit}>
          <InputText
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <BtnSubmit>+</BtnSubmit>
        </Form>
        <Body>
          <List>
            {list.map((item, i) => (
              <Item key={item.id}>
                <label>
                  <input type="checkbox" />
                  <Content>{item.text}</Content>
                </label>
                <BtnDelete onClick={() => handleDelete(item.id)}>
                  삭제
                </BtnDelete>
              </Item>
            ))}
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #d2d2d3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
`;
const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #fff;
  padding: 10px;
  font-size: 1.5rem;
`;
const Form = styled.form`
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

const Body = styled.div`
  background: #fff;
  min-height: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #d4d0d0;
  }
`;
const Content = styled.span``;
const BtnDelete = styled.button``;

export default Todo;
