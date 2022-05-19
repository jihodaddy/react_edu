import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Layout>
      <h1>영화&책 검색 서비스</h1>
      {/* 라우터 안에 있어야 Link를 쓸수 있음  */}
      <Link to="/movie">
        <BtnLink>영화</BtnLink>
      </Link>
      <Link to="/book">
        <BtnLink>책</BtnLink>
      </Link>
    </Layout>
  );
};

export default Main;

const BtnLink = styled.button`
  width: 300px;
  height: 120px;
  font-size: 30px;
  background: #fff;
  border: 1px solid #afafaf;
  border-radius: 4px;
  margin: 10px 0;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
