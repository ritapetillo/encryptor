import styled from "styled-components";
import { Button } from "../../styles/uiKit";

export const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColorLighter};
  height: 70px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img {
    height: 50px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    height: 60px;

    img {
      margin: 10px 0;
    }
  }
`;

export const NavbarButtonContainer = styled.div`
  display: flex;
  @media (max-width: 450px) {
    width: 100%;
    margin: 40px 0;
    justify-content: center;
  }
`;

export const ToggleContainer = styled(NavbarButtonContainer)`
  font-size: 26px;
  svg {
    margin: 0 5px;
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 450px) {
    width: fit-content;
    position: absolute;
    top: -10px;
    right: 10px;
  }
`;

export interface IButtonNavbar {
  active?: boolean;
}
export const ButtonNavbar = styled(Button)<IButtonNavbar>`
  width: 138px;
  padding: 8px 0;
  border-radius: 0;
  background-color: ${(props) =>
    props.active ? props.theme.secondaryColor : "transparent"};
`;
