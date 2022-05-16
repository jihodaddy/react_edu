import React, { useReducer } from "react";
import useInput from "../hooks/useInput";

const InfoCustomInput = () => {
  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });
  // state 처리 하기 위해  input에 name값이 설정 되어있어야 함
  const { name, nickname } = state;
  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </>
  );
};

export default InfoCustomInput;
