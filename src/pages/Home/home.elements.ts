import styled from "styled-components";
import { Row } from "../../styles/grid";

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.text};
  min-height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  text-align: center;
  padding: 20px;
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 16px;
    margin-bottom: 50px;
    text-align: center;
    word-break: break-all;
    line-height: 26px;
  }
`;

export const DropZoneWrapper = styled.div`
  background-color: #ffa047;
  padding: 10px;
  color: ${(props) => props.theme.primaryColor};
`;

export const DropZoneDiv = styled.div`
  background-color: rgba(22, 22, 22, 0.16);
  border: 1px dashed #363636;
  max-width: 936px;
  width: 70vw;
  height: 200px;
  display: grid;
  object-position: center;
`;

export const ButtonWrapper = styled(Row)`
  justify-content: center;
  div {
    margin: 30px 10px;
  }
`;
