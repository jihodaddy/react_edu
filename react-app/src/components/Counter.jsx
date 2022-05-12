import { useState } from "react";

const Counter = () => {
  // 배열의 비구조화 할당
  const [number, setNumber] = useState(5);
  //   let number = 5;

  const handleClick = () => {
    //  number += 1;
    setNumber(number + 1);
    // set함수가 비동기라 console에는 더해지기전 number만 뜸.
    console.log(number);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
