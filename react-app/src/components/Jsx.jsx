const Jsx = () => {
  //const name = "뷰";
  const name = "리액트";

  //JS falsy한 값
  // 0, "", false, null, undefined, NaN

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    //div로 묶어서 쓰지만 의미없이 남발될수 있어서 빈꺽쇠 표현시 문법작동
    //p63

    <>
      <div style={style}>{name}</div>

      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니??</h2>
      {name === "리액트" ? (
        <h1>리액트입니다.</h1>
      ) : name === "뷰" ? (
        <h1>뷰입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다</h2>
      )}

      {/* name이 참이면 && 뒤에 구현 */}
      {name === "리액트" && <h1> 리액트 입니다.(and연산)</h1>}

      {/* 빈 값이 나오는 걸 대비 */}
      {/* 빈값이면 "이름이 없습니다. 있으면  name값 출력" */}
      {name || "이름이 없습니다."}
      {/* null, undefined에서만 false로 구현 */}
      {name ?? "이름이 없습니다."}

      <input />
      <br />
    </>
  );
};

export default Jsx;
