import React, { useState } from "react";

const EventPractice = () => {
  //  인풋값이 많아 지면  useState가 너무 많아짐
  //   const [message, setMessage] = useState("");
  //   const [userName, setUserName] = useState("");
  const defaultForm = { username: "", message: "", message2: "" };
  const [form, setForm] = useState(defaultForm);
  const { username, message, message2 } = form;

  const handleClick = () => {
    //alert(userName + ":" + message);
    alert(`${username} : ${message}, ${message2}`);
    //setMessage("");
    //setUserName("");
    //setForm({ username: "", message: "" });
    setForm(defaultForm);
  };

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  //엔터 쳤을 때 이벤트 동작
  const handleKeyUp = (e) => {
    //console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        name="username"
        placeholder="사용자명"
        // onChange={(e) => {
        //   setUserName(e.target.value);
        // }}
        onChange={handleChange}
        value={username}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        // onChange={(e) => {
        //   setMessage(e.target.value);
        // }}
        // handleClick에서 set 빈값 넣어도  input안에는 안없어지기 때문에
        // value값으로 message를 다시 연결해야 적용됨
        onChange={handleChange}
        value={message}
        onKeyUp={handleKeyUp}
      />
      <input
        type="text"
        name="message2"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message2}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
