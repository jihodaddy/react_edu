import { useEffect, useState } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";

const linkList = [
  {
    link: "/",
    name: "메인",
  },
  {
    link: "/movie",
    name: "영화",
  },
  {
    link: "/book",
    name: "책",
  },
];

const TopNav = () => {
  const { pathname } = useLocation();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const isMain = pathname === "/";
    setIsShow(!isMain);
    // if (pathname === "/") {
    //   setIsShow(false);
    // } else {
    //   setIsShow(true);
    // }
  }, [pathname]);

  if (!isShow) return <></>;
  return (
    <>
      <Container>
        <Nav>
          {linkList.map(({ link, name }) => (
            <Link to={link} key={link}>
              <BtnLink>{name}</BtnLink>
            </Link>
          ))}
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #838282;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const BtnLink = styled.button`
  background: #fff;
  border: 1px solid #838282;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;

const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      background: #000;
      color: #fff;
    }
  }
`;

export default TopNav;
