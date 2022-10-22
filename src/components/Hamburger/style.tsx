import styled from "styled-components";

export const HamburguerS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 1rem;
  cursor: pointer;
`;

export const HamburgerLine = styled.div`
  height: 2px;
  background-color: #202020;
  width: 100%;

  /* &:nth-of-type(1) {
    rotate: 45deg;
    translate: 0 150%;
  }

  &:nth-of-type(2) {
    display: none;
  }

  &:nth-of-type(3) {
    rotate: -45deg;
    translate: 0 -150%;
  } */
`;
