import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
