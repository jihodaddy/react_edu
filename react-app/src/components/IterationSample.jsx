import React, { useState } from "react";

const IterationSample = () => {
  const defaultNames = [
    {
      id: 1,
      text: "눈사람",
    },
    {
      id: 2,
      text: "얼음",
    },
    {
      id: 3,
      text: "눈",
    },
    {
      id: 4,
      text: "바람",
    },
  ];

  const [text, setText] = useState("");
  const [names, setNames] = useState(defaultNames);
  //   const nameList = names.map((e) => <li>{e}</li>);
  //   console.log(nameList);

  const [nextId, setNextId] = useState(defaultNames.length + 1);

  const handleClick = () => {
    if (!text) return;
    const newNames = [...names, { id: nextId, text }];
    setNames(newNames);
    setText("");
    setNextId(nextId + 1);
    console.log(names);
  };

  const handleDelete = (deleteId) => {
    //names중에서 id가 deleteId와 다른 item만 뽑아서 newNames 만들기
    const newNames = names.filter((name) => name.id !== deleteId);
    setNames(newNames);
  };

  return (
    <div>
      {/* <ul> {[<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]} </ul>
    <ul>{nameList}</ul> */}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name, i) => (
          <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
