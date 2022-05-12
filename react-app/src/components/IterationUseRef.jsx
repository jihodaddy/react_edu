import React, { useRef, useState } from "react";

const IterationUseRef = () => {
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
  const inputEl = useRef(null);
  const nextId = useRef(defaultNames.length + 1);

  const handleClick = () => {
    if (!text) return;
    const newNames = [...names, { id: nextId.current, text }];
    setNames(newNames);
    setText("");
    nextId.current = nextId.current + 1;
    console.log(names);
  };

  const handleDelete = (deleteId) => {
    const newNames = names.filter((name) => name.id !== deleteId);
    setNames(newNames);
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputEl}
      />
      <button onClick={handleClick} ref={nextId}>
        추가
      </button>
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

export default IterationUseRef;
