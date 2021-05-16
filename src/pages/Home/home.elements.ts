import styled from "styled-components";
import { Row } from "../../styles/grid";
import { BorderedCenteredDiv } from "../../styles/uiKit";

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.text};
  min-height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
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
  @media (max-width: 450px) {
    padding-top: 100px;
  }
`;

export const DropZoneWrapper = styled.div`
  background-color: #ffa047;
  padding: 10px;
  color: ${(props) => props.theme.primaryColor};
`;

export const ButtonWrapper = styled(Row)`
  justify-content: center;
  @media (max-width: 380px) {
    flex-direction: column;
    align-content: center;
  }
  div {
    margin: 0px 10px;
    @media (max-width: 380px) {
      margin: 15px 0px;
    }
  }
`;

export const DroppedFileDiv = styled(BorderedCenteredDiv)`
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  width: 50%;
  border-radius: 3px;
  margin-bottom: 40px;
  svg {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;
