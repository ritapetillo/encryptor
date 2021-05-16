import styled from "styled-components";
import { Row } from "../../styles/grid";
import { InputDiv } from "../../styles/uiKit";

export const DropZoneWrapper = styled.div`
  background-color: #ffa047;
  padding: 10px;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 20px;
`;

export const DropZoneDiv = styled.div`
  background-color: rgba(22, 22, 22, 0.16);
  border: 1px dashed #363636;
  max-width: 936px;
  width: 70vw;
  height: 200px;
  display: grid;
  object-position: center;
  @media (max-width: 450px) {
    width: 92vw;
  }
`;

export const ButtonWrapper = styled(Row)`
  justify-content: center;
  @media (max-width: 380px) {
    flex-direction: column;
    align-content: center;
  }
  div {
    margin: 30px 10px;
    @media (max-width: 380px) {
      margin: 15px 0px;
    }
  }
`;

export const DroppedFileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  svg {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const KeyInputDiv = styled(InputDiv)`
  margin-top: 40px;
  input {
    background-color: ${(props) => props.theme.primaryColorLighter};
    outline: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.text};
    font-size: 18px;
    color: ${(props) => props.theme.text};
    flex: 1;
    margin-right: 20px;

    &::placeholder {
      color: ${(props) => props.theme.text};
    }
    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.text};
    }
  }
`;
