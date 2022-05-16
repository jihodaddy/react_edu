import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  // useEffect는 렌더링과 관련
  // 마지막 배열 []이면 최초 렌더링 될때 한번만 실행
  // []값이 있으면 값이 변경 될 때마다 실행
  // 리턴 위에는 렌더링 될떄 리턴은 끝나기직전(재렌더링 전) 실행
  useEffect(() => {
    console.log("mount");
    console.log({
      name,
      nickname,
    });
    return () => {
      console.log("unmount");
      console.log(name);
    };
  }, [name]);
  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </>
  );
};

export default Info;
