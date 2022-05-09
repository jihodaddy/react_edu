import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    alert(message);
    setMessage("");
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        // handleClick에서 set 빈값 넣어도  input안에는 안없어지기 때문에
        // value값으로 message를 다시 연결해야 적용됨
        value={message}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
