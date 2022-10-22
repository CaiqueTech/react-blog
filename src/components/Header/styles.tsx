import styled from "styled-components";

export const HeaderS = styled.header`
  background-color: #e1e1e1;
`;

export const Navbar = styled.nav`
  width: min(80rem, 90%);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled.h1`
  font-weight: normal;
  justify-self: center;
`;
