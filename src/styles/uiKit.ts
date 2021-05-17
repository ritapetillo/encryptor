import styled from "styled-components";
import { IButtonNavbar } from "../components/Navbar/navbar.elements";
import { Row } from "./grid";

interface IButton {
  encrypt?: boolean;
}

export const Button = styled.div<IButton>`
  width: 168px;
  padding: 12px 0;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  border: 2px solid #009eff;
  border-radius: 3px;
  background-color: ${(props) =>
    props.encrypt
      ? props.theme.secondaryColor
      : props.theme.secondaryColorDarker};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonInput = styled.div`
  width: 264px;
  height: 48px;
  display: flex;
  background-color: white;
  border-radius: 3px;
  justify-self: center;
  margin-top: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    &:first-child {
      flex: 1;
      border-right: 1px solid #98a0a6;
    }
  }
`;

export const InputDiv = styled.div`
  background-color: ${(props) => props.theme.primaryColorLighter};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.text};
  border-radius: 3px;
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.primaryColorLighter};
  span {
    display: block;
    padding: 0 20px;
    word-wrap: break-word;
    white-space: normal;
  }
  div {
    width: fit-content;
    padding: 10px 20px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-content: center;
    span {
      width: 80vw;
      margin-bottom: 20px;
    }
  }
`;

export const BorderedCenteredDiv = styled(Row)`
  border: 0.1px solid ${(props) => props.theme.primaryColorLighter};
  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const Footer = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${({ theme }) => theme.text};
  padding: 20px 0;
`;
