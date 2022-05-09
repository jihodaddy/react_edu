const MyComponent = ({ name, name2, children }) => {
  // 1.
  //   const name = props.name;
  //   const name2 = props.name2;
  //   const children = props.children;
  // 2.
  //const { name, children, name2 } = props;

  return (
    <div>
      {children}
      반갑습니다, 제 이름은 {name} 입니다.{name2}
      {children}
    </div>
  );
};

export default MyComponent;
