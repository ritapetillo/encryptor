import React, { useMemo } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiSun, HiMoon } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../actions/themeActions";
import { Theme } from "../../interfaces/states";
import { RootStore } from "../../store";
import {
  ButtonNavbar,
  NavbarButtonContainer,
  NavbarContainer,
  ToggleContainer,
} from "./navbar.elements";

const Navbar = () => {
  const { theme } = useSelector((state: RootStore) => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = useMemo(
    () => (
      <ToggleContainer>
        <HiSun />
        {theme === Theme.light ? (
          <BsToggleOff onClick={() => dispatch(switchTheme(Theme.dark))} />
        ) : (
          <BsToggleOn onClick={() => dispatch(switchTheme(Theme.light))} />
        )}
        <HiMoon />
      </ToggleContainer>
    ),

    [theme]
  );

  return (
    <NavbarContainer>
      <img src="./img/Logo.svg" alt="" />
      <NavbarButtonContainer>
        <ButtonNavbar active data-testid="navbar-text">
          Encrypted
        </ButtonNavbar>
        <ButtonNavbar>fdsfsdff</ButtonNavbar>
      </NavbarButtonContainer>
      {toggleTheme}
    </NavbarContainer>
  );
};

export default Navbar;
