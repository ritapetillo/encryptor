import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  min-height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
