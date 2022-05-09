import MyComponent from "./MyComponent";
const Parent = () => {
  const name = "nodejs";
  return (
    <>
      Parent
      {/* props 태그안에 보내기 */}
      <MyComponent name="리액트" name2={name} />
      {/* 태그사이의 내용이 props로 보내게 됨. 받을때는 children으로 받음 */}
      <MyComponent name="뷰">
        <h1>안녕하세요!</h1>
      </MyComponent>
      <MyComponent name="앵글러" />
    </>
  );
};

export default Parent;
