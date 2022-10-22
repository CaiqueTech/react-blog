import { useEffect, useRef, useState } from "react";
import {
  HeaderS,
  Navbar,
  Logo,
  ThemeIcon,
  HamburguerS,
  Sidebar,
  SideMenu,
  SideItem,
  SideLink,
} from "./styles";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  let sidebarRef = useRef(null);

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!ref.current.contains(event.target)) {
          setMenu(false);
        }
      });
    });
  };

  useOutsideAlerter(sidebarRef);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderS>
      <Navbar>
        <HamburguerS onClick={handleMenu}></HamburguerS>
        <Sidebar ref={sidebarRef} menuOpened={menu}>
          <SideMenu>
            <HamburguerS onClick={handleMenu}></HamburguerS>
            <SideItem>
              <SideLink>Home</SideLink>
            </SideItem>
            <SideItem>
              <SideLink>Home</SideLink>
            </SideItem>
            <SideItem>
              <SideLink>Home</SideLink>
            </SideItem>
            <SideItem>
              <SideLink>Home</SideLink>
            </SideItem>
          </SideMenu>
        </Sidebar>
        <Logo>BlogC</Logo>
        <ThemeIcon />
      </Navbar>
    </HeaderS>
  );
};
