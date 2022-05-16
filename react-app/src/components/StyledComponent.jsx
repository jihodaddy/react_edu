import styled, { css } from "styled-components";

const Box = styled.div`
  // 인라인 적용된 값을 가져옴 $써서
  // color이 있으면 그대로 없으면 blue로
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 200px;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <>
      <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted>테두리만</Button>
      </Box>
    </>
  );
};

export default StyledComponent;
