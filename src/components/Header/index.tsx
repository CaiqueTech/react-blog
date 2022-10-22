import { Hamburger } from "../Hamburger";
import { HeaderS, Navbar, Logo } from "./styles";

export const Header = () => {
  return (
    <HeaderS>
      <Navbar>
        <Hamburger />
        <Logo>BlogC</Logo>
      </Navbar>
    </HeaderS>
  );
};
