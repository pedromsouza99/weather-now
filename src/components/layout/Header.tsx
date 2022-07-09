import logo from "../../assets/logo.svg";
import styled from "styled-components";

export function Header() {
  return (
    <HeaderStyles>
      <NavStyles>
        <ImgLogo src={logo} alt="logo" />
      </NavStyles>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 46px;
  background-color: var(--card-bg);
  box-shadow: 0px 0px 4px var(--box-shadow);
  position: sticky;
  top: 0;
  left: 0;
`;

const NavStyles = styled.nav`
  margin: auto;
  height: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  height: 50%;
`;
