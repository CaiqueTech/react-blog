// * Imports
import styled, { css } from "styled-components";
import { BsFillMoonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

// * Types
interface Props {
  onClick: (e: Event) => void;
}

interface SidebarProps {
  menuOpened: boolean;
}

// * Header
export const HeaderS = styled.header`
  background-color: #e1e1e1;
`;

export const Navbar = styled.nav`
  margin-inline: auto;
  padding-inline: 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 4.5rem;
`;

export const Logo = styled.h1`
  font-weight: normal;
  justify-self: center;
  pointer-events: none;
  -webkit-tap-highlight-color: transparent;

  ::selection {
    color: none;
    background: none;
  }
  /* For Mozilla Firefox */
  ::-moz-selection {
    color: none;
    background: none;
  }
`;

export const ThemeIcon = styled(BsFillMoonFill)`
  justify-self: flex-end;
`;

// * Hamburger
export const HamburguerS = styled(FiMenu)<Props>`
  font-size: 1.5rem;
  cursor: pointer;
`;

// * Sidebar
export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  left: 0;
  width: min(20rem, 90%);
  background-color: #cbcbcb;
  top: 0;
  bottom: 0;
  transition: 0.3s;
  translate: -100% 0;
  ${(props) =>
    props.menuOpened
      ? css`
          translate: 0 0;
        `
      : ""}

  & ${HamburguerS} {
    position: absolute;
    top: 0rem;
    height: 4.5rem;
    left: 5vw;
    justify-content: center;
    align-items: center;
  }
`;

export const SideMenu = styled.ul`
  display: flex;
  margin-top: 8rem;
  margin-left: 5vw;
  flex-direction: column;
  gap: 2em;
`;

export const SideItem = styled.li``;

export const SideLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
