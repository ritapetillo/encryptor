import styled from "styled-components";
import { Button } from "../../styles/uiKit";

export const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColorLighter}
  height:72px;  
  padding:10px 30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  img{
     height:50px;
  }
`;

export const NavbarButtonContainer = styled.div`
  display: flex;
`;

export const ButtonNavbar = styled(Button)`
  padding: 10px 30px;
`;
