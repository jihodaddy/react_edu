import React, { useState, useRef } from "react";
import styled from "styled-components";
import Item from "./Item";
import Form from "./Form";

const Todo = () => {
  const [list, setList] = useState([]);
  const nextId = useRef(1);

  const handleAdd = (text) => {
    const nextList = [...list, { id: nextId.current, text, isDone: false }];
    setList(nextList);
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const nextList = list.filter((item) => item.id !== deleteId);
    setList(nextList);
  };
  const handelChecked = (id) => {
    // id로 바꿀 item을 찾아서 isDone을 반대로 바꿔주기

    const newList = list.map((item) =>
      // if (item.id !== id) {
      //   return item;
      // } else {
      //   const newItem = { ...item, isDone: !item.isDone };
      //   return newItem;
      // }
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setList(newList);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd} />
        <Body>
          <List>
            {list.map((item) => (
              <Item
                key={item.id}
                data={item}
                onDelete={handleDelete}
                onChecked={handelChecked}
              />
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

const Body = styled.div`
  background: #fff;
  min-height: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Todo;
