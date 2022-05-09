//useState 함수 구조 (이런식으로 작동할 것이다)
const useState = (init) => {
  let state = init;
  const setState = (val) => {
    state = val;
    //...렌더링 작업
  };

  return [state];
};
