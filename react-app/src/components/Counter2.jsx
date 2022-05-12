import React, { useState } from "react";

const Counter2 = () => {
  const [value, setValue] = useState("7");

  const handleMinus = () => {
    setValue(value - 1);
  };

  const handleClick = (i) => {
    setValue(value + i);
  };

  return (
    <div>
      <p> 현재 카운터 값은 {value} 입니다.</p>
      <button onClick={handleMinus}>-1</button>
      <button onClick={() => handleClick(1)}>+1</button>
    </div>
  );
};

export default Counter2;
