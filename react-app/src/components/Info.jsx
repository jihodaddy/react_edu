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
