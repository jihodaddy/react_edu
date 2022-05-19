import React, { useState } from "react";
import styled from "styled-components";

const ModalName = ({ name, onClose, onSubmit }) => {
  const [text, setText] = useState(name);
  const handleSubmit = () => {
    onSubmit(text);
    onClose();
  };
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <h2>이름 바꾸기</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>확인</button>
      </Container>
    </>
  );
};

export default ModalName;

const Backdrop = styled.div`
  /* 백드롭 필수 css */
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%; //인풋 왼쪽 꼭지점이 가운데 위치
  transform: translate(-50%, -50%);
  padding: 20px;
  background: #fff;
`;
