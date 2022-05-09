# 리액트 교육

- github 가입, repositoty 생성
- **github desktop**설치, repository clone
- vs code clone한 repository 열기

- 노드 설치
  - https://nodejs.org/ko/
- 노드 버전 확인
  - node --version
- npx create-react-app react-app
- cd react-app
- npm start

- webpak : 번들러
- babel : 구버전 브라우저를 위해서 최신문법을 예전 문법으로 변형
- polyfill : 구브라우저에 없는 함수를 채워줌

- 컴포넌트는 첫글자 대문자

- Hook을 사용하기 위해 class형보다는 함수형을 주로 사용

- props

  - 태그안에 {}로 보냄
  - 태그 사이에 내용 보냄, 받는 component에서는 children으로 받음 {props.childrens}
  - props 비구조화 할당: 객체에서 값을 추출하는 문법
    - ex. const name = props.name;
    ```
        const MyComponent = (props) => {
        const { name, children, name2 } = props;
    ```
    ```
        const MyComponent = ({ name, name2, children }) => {
    ```

- 콘솔에만 증가값 찍히고 뷰화면에서는 변하지 않음
- 다시 렌더링이 되야지만 뷰에 반영
- 그런데 다시 실행하면 number값이 다시 5부터 시작
- 그래서 변하는 값이 다시 반영되기 위해 useState를 사용

```
    const Counter = () => {
  // 변하는 수니까 let
  let number = 5;

  const handleClick = () => {
    number += 1;
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
```

- useState 사용

```
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

```

- 이벤트 핸들링

  - 이벤트이름은 카멜 표기법. ex. onClick
  - 함수 형태의 값을 전달
  - DOM요소 안에서만 이벤트 설정 가능

- input

```
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
```

    - e.target : input객체에 접근
